import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

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
      <body className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
        <Header />
        <main className="m-auto h-full w-full max-w-4xl flex-grow px-3 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
