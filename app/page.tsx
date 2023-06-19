import Link from "next/link";
import MyAvatar from "./components/MyAvatar";
import ThemeSwitcher from "./components/ThemeSwticher";

export default function Home() {
  return (
    <>
      <h1>Blog website</h1>
      <h2>
        Made with{" "}
        <Link href="https://nextjs.org" target="_blank">
          <span className="font-bold">Next.JS</span>
        </Link>
      </h2>
      <MyAvatar />
    </>
  );
}
