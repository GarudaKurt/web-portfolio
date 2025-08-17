"use client";
import { useState, useEffect } from "react";
import { useThemeStore } from "@/zustand/themeStore";
import { HiMoon, HiSun, HiMenuAlt3 } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const Header = () => {
  const { theme, toggleTheme, setTheme } = useThemeStore();
  const [open, setOpen] = useState(false);

  // Apply theme on first load
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
  }, [theme]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-me" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between sticky top-0 z-50 px-6 py-4 w-full bg-white dark:bg-black transition-colors duration-500">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={60}
            height={60}
            priority
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-center">
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-md text-white font-montserrat hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop Social + Dark Mode */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-colors dark:text-gray-300 dark:hover:text-white"
        >
          <FaGithub size={28} />
        </Link>
        <Link
          href="https://linkedin.com/in/yourusername"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-800 transition-colors dark:text-blue-400 dark:hover:text-blue-300"
        >
          <FaLinkedin size={28} />
        </Link>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {theme === "dark" ? <HiSun size={24} /> : <HiMoon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md border bg-white hover:bg-gray-500 transition">
              <HiMenuAlt3 size={28} />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="p-6 w-64 bg-white dark:bg-gray-800 shadow-xl"
          >
            <SheetHeader>
              <SheetTitle />
              <SheetDescription />
            </SheetHeader>

            <nav className="flex flex-col gap-4 mt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex gap-4 mt-6">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                <FaGithub size={28} />
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <FaLinkedin size={28} />
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                {theme === "dark" ? <HiSun size={24} /> : <HiMoon size={24} />}
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
