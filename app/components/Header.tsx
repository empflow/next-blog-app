import Link from "next/link";
import GithubIcon from "../icons/Github";
import InstagramIcon from "../icons/Instagram";
import TwitterIcon from "../icons/Twitter";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border border-b-gray-400 bg-white/60 py-5 backdrop-blur-lg">
      <nav className="m-auto flex max-w-4xl justify-between">
        <Link href="/" style={{ textDecoration: "none" }}>
          <h2 className="text-2xl font-semibold">empflow</h2>
        </Link>
        <div className="flex gap-2 md:gap-3">
          <Link href="https://github.com/empflow" target="_blank">
            <GithubIcon pxSize={32} className="fill-slate-700" />
          </Link>
          <Link
            href="https://example.com"
            target="_blank"
            className="fill-slate-700"
          >
            <TwitterIcon pxSize={32} />
          </Link>
          <Link
            href="https://example.com"
            target="_blank"
            className="fill-slate-700"
          >
            <InstagramIcon pxSize={32} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
