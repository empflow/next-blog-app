import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <h1 className="mb-4 text-xl">Page not found</h1>
      <Link href="/">
        <button className="rounded bg-blue-600 px-3 py-1 text-sm text-gray-50 dark:bg-blue-700">
          Back to home
        </button>
      </Link>
    </>
  );
}
