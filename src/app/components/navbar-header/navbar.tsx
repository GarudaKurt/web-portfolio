"use client";
import { useState, useEffect } from "react";
import { useThemeStore } from "@/zustand/themeStore";
import { ThemeSwitch } from "@/app/theme/themeswitch";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [open, setOpen] = useState(false);

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

      <div className="hidden md:flex flex-1 justify-center">
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-md font-montserrat text-primary dark:text-white "
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

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

        {/* Theme Switch */}
        <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
      </div>

      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className="p-2 rounded-md border bg-white hover:bg-gray-500 transition">
              <HiMenuAlt3 className="bg-white" size={28} />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="p-6 w-64 bg-white dark:bg-black shadow-xl"
          >
            <SheetClose asChild>
              <button
                className="absolute top-4 right-4 p-2 rounded-full 
                 bg-gray-200 hover:bg-gray-300 
                 dark:bg-white dark:hover:bg-gray-200"
              >
                <X className="h-5 w-5 text-black" />
              </button>
            </SheetClose>
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

            <div className="flex gap-4 mt-6 items-center">
              <Link
                href="https://github.com/GarudaKurt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                <FaGithub size={28} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/aldren-letada/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <FaLinkedin size={28} />
              </Link>

              <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
