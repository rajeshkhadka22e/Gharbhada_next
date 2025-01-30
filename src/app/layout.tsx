import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar /> {/* ✅ Now it will work */}
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
