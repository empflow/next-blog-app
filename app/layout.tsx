import Header from "./components/Header";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Blog app",
  description: "Blog made by @empflow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-zinc-200">
        <Providers>
          <Header />
          <main className="m-auto max-w-4xl">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
