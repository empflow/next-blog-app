import Link from "next/link";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwticher";

export default function Footer() {
  return (
    <footer className="border-t border-t-gray-400 px-3 py-6">
      <div className="m-auto mb-5 flex max-w-4xl justify-between">
        <div>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>

      <div className="text-gray-600">
        Copyright © 2023 Twitter Inc.
        <br />
        No rights reserved
      </div>
    </footer>
  );
}
