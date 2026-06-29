export type GithubProfile = {
  avatarUrl: string;
  bio: string | null;
  blog: string | null;
  company: string | null;
  followers: number;
  following: number;
  htmlUrl: string;
  location: string | null;
  login: string;
  name: string | null;
  publicRepos: number;
};

export type GithubRepository = {
  description: string | null;
  fork: boolean;
  forks: number;
  fullName: string;
  htmlUrl: string;
  id: number;
  language: string | null;
  languages: Record<string, number>;
  name: string;
  openIssues: number;
  pushedAt: string;
  stars: number;
  topics: string[];
};

export type GithubDashboardData = {
  error: string | null;
  fetchedAt: string;
  languages: Record<string, number>;
  profile: GithubProfile | null;
  repositories: GithubRepository[];
};

type GithubProfileResponse = {
  avatar_url: string;
  bio: string | null;
  blog: string | null;
  company: string | null;
  followers: number;
  following: number;
  html_url: string;
  location: string | null;
  login: string;
  name: string | null;
  public_repos: number;
};

type GithubRepositoryResponse = {
  description: string | null;
  fork: boolean;
  forks_count: number;
  full_name: string;
  html_url: string;
  id: number;
  language: string | null;
  languages_url: string;
  name: string;
  open_issues_count: number;
  pushed_at: string;
  stargazers_count: number;
  topics?: string[];
};

const GITHUB_API_URL = "https://api.github.com";
const DEFAULT_REVALIDATE_SECONDS = 60 * 30;

export const githubUsername =
  process.env.GITHUB_USERNAME ?? process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "narendra09-devops";

function githubHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

async function githubFetch<T>(pathOrUrl: string): Promise<T> {
  const url = pathOrUrl.startsWith("https://") ? pathOrUrl : `${GITHUB_API_URL}${pathOrUrl}`;
  const response = await fetch(url, {
    headers: githubHeaders(),
    next: { revalidate: DEFAULT_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed with ${response.status}`);
  }

  return response.json() as Promise<T>;
}

function mapProfile(profile: GithubProfileResponse): GithubProfile {
  return {
    avatarUrl: profile.avatar_url,
    bio: profile.bio,
    blog: profile.blog,
    company: profile.company,
    followers: profile.followers,
    following: profile.following,
    htmlUrl: profile.html_url,
    location: profile.location,
    login: profile.login,
    name: profile.name,
    publicRepos: profile.public_repos,
  };
}

function mapRepository(
  repository: GithubRepositoryResponse,
  languages: Record<string, number>,
): GithubRepository {
  return {
    description: repository.description,
    fork: repository.fork,
    forks: repository.forks_count,
    fullName: repository.full_name,
    htmlUrl: repository.html_url,
    id: repository.id,
    language: repository.language,
    languages,
    name: repository.name,
    openIssues: repository.open_issues_count,
    pushedAt: repository.pushed_at,
    stars: repository.stargazers_count,
    topics: repository.topics ?? [],
  };
}

function mergeLanguages(repositories: GithubRepository[]) {
  return repositories.reduce<Record<string, number>>((accumulator, repository) => {
    Object.entries(repository.languages).forEach(([language, bytes]) => {
      accumulator[language] = (accumulator[language] ?? 0) + bytes;
    });

    return accumulator;
  }, {});
}

export async function getGithubDashboardData(): Promise<GithubDashboardData> {
  const fetchedAt = new Date().toISOString();

  try {
    const [profileResponse, repositoryResponses] = await Promise.all([
      githubFetch<GithubProfileResponse>(`/users/${githubUsername}`),
      githubFetch<GithubRepositoryResponse[]>(
        `/users/${githubUsername}/repos?sort=pushed&direction=desc&per_page=12`,
      ),
    ]);

    const languageResponses = await Promise.all(
      repositoryResponses.map(async (repository) => {
        try {
          return await githubFetch<Record<string, number>>(repository.languages_url);
        } catch {
          return {};
        }
      }),
    );

    const repositories = repositoryResponses.map((repository, index) =>
      mapRepository(repository, languageResponses[index] ?? {}),
    );

    return {
      error: null,
      fetchedAt,
      languages: mergeLanguages(repositories),
      profile: mapProfile(profileResponse),
      repositories,
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "GitHub data is temporarily unavailable.",
      fetchedAt,
      languages: {},
      profile: null,
      repositories: [],
    };
  }
}

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat("en", {
    compactDisplay: "short",
    notation: "compact",
  }).format(value);
}
