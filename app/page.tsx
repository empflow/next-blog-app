import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="mb-2 text-5xl font-semibold">Blog website</h1>
      <h2 className="mb-10">
        Made with{" "}
        <Link href="https://nextjs.org" target="_blank">
          <span className="font-bold">Next.JS</span>
        </Link>
      </h2>
    </>
  );
}
