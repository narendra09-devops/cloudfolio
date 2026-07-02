import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">404</h1>

      <p className="mt-4 text-lg text-muted-foreground">Page not found.</p>

      <Link href="/" className="mt-6 rounded bg-blue-600 px-5 py-3 text-white">
        Back to Home
      </Link>
    </main>
  );
}
