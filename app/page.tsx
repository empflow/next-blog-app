import Link from "next/link";
import ThemeSwitcher from "./components/ThemeSwticher";

export default function Home() {
  return (
    <>
      <img
        width={500}
        height={500}
        src="https://yt3.ggpht.com/ytc/AGIKgqPTYuxSA9QQBsfYGVm7ABKrQr2--Q8m_UdVqEmUkQ=s48-c-k-c0x00ffffff-no-rj"
      />
      <h1>Blog website</h1>
      <h2>
        Made with{" "}
        <Link href="https://nextjs.org" target="_blank">
          <span className="font-bold">Next.JS</span>
        </Link>
      </h2>
      <ThemeSwitcher />
    </>
  );
}
