import "./globals.css";

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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
