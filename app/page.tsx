import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Blog website</h1>
      <h2>
        Made with{" "}
        <Link href="https://nextjs.org">
          <span className="font-bold">Next.JS</span>
        </Link>
      </h2>
    </>
  );
}
