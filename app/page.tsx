// helper dir = fns used in a specific place in the codebase
// utils dir = fns used in multiple places across the codebase

import Link from "next/link";
import HomepageRecentPosts from "./components/HomepageRecentPosts";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <section>
        <h1 className="mb-2 text-3xl font-semibold">Blog website</h1>
        <p className="mb-12">
          Made with{" "}
          <Link href="https://nextjs.org" target="_blank">
            <span className="font-bold">Next.JS</span>
          </Link>
        </p>
      </section>

      <section>
        <HomepageRecentPosts />
        <Link
          className="mt-3 flex items-center gap-2 font-bold hover:underline"
          href="/posts"
        >
          <span>All posts</span>
          <span>
            <AiOutlineArrowRight className="text-xl" />
          </span>
        </Link>
      </section>
    </>
  );
}
