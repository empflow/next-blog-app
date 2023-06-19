import Link from "next/link";
import GithubIcon from "../icons/Github";
import InstagramIcon from "../icons/Instagram";
import TwitterIcon from "../icons/Twitter";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-b-gray-400 bg-gray-100 px-3 py-5 backdrop-blur-lg dark:bg-slate-800">
      <nav className="m-auto flex max-w-4xl justify-between">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <div className="flex gap-2 md:gap-3">
          <Link href="https://github.com/empflow" target="_blank">
            <GithubIcon
              pxSize={32}
              className="fill-slate-700 dark:fill-slate-400"
            />
          </Link>
          <Link
            href="https://example.com"
            target="_blank"
            className="fill-slate-700 dark:fill-slate-400"
          >
            <TwitterIcon pxSize={32} />
          </Link>
          <Link
            href="https://example.com"
            target="_blank"
            className="fill-slate-700 dark:fill-slate-400"
          >
            <InstagramIcon pxSize={32} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
