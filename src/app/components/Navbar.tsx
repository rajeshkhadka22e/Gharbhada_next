"use client"; // ✅ Required for client-side navigation
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Get current route

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className={pathname === "/" ? "text-yellow-400" : "hover:text-gray-300"}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={pathname === "/about" ? "text-yellow-400" : "hover:text-gray-300"}>About</Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === "/contact" ? "text-yellow-400" : "hover:text-gray-300"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
