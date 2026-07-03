export function normalizeSearchText(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function matchesSearch(haystack: string, query: string) {
  if (!query) {
    return true;
  }

  return normalizeSearchText(haystack).includes(normalizeSearchText(query));
}

export function uniqueSorted(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).sort((left, right) =>
    left.localeCompare(right),
  );
}
