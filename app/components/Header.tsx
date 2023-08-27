import Link from "next/link";
import GithubIcon from "../icons/Github";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-b-gray-400 bg-gray-100 backdrop-blur-lg dark:border-b-gray-700 dark:bg-slate-800">
      <nav className="m-auto flex max-w-4xl justify-between px-3 py-5">
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
        </div>
      </nav>
    </header>
  );
}
