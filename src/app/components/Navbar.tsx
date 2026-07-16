"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import logo from "../../../public/printforge-logo.png";
import logoMobile from "../../../public/printforge-logo-mobile.png";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop logo */}
            <Image
              src={logo}
              alt="PrintForge Logo"
              className="w-[200px] h-auto hidden md:block"
            />
            {/* Mobile logo */}
            <Image
              src={logoMobile}
              alt="PrintForge Logo"
              className="w-[40px] h-auto block md:hidden"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          <NavLink href="/3d-models" isActive={pathname === "/3d-models"}>
            3D Models
          </NavLink>
          <NavLink href="/about" isActive={pathname === "/about"}>
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
