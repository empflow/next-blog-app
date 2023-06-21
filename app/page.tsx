// helper dir = fns used in a specific place in the codebase
// utils dir = fns used in multiple places across the codebase

import Link from "next/link";
import HomepageRecentPosts from "./components/HomepageRecentPosts";

export default function Home() {
  return (
    <>
      <h1 className="mb-2 text-5xl font-semibold">Blog website</h1>
      <p className="mb-10">
        Made with{" "}
        <Link href="https://nextjs.org" target="_blank">
          <span className="font-bold">Next.JS</span>
        </Link>
      </p>

      <HomepageRecentPosts />
    </>
  );
}
