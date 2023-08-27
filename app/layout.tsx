import Header from "./components/Header";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Произведения, которые я (возможно) прочитал летом",
  description: "Что я прочитал летом",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="flex min-h-screen flex-col bg-gray-100 text-gray-900 dark:bg-slate-800 dark:text-gray-200">
        <Providers>
          <Header />
          <main className="m-auto h-full w-full max-w-4xl flex-grow px-3 py-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
