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
    <html lang="en">
      <body className="dark:text-zinc-200 text-gray-900 dark:bg-slate-800">
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
