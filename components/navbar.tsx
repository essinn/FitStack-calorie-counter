"use client";

import * as React from "react";
import Link from "next/link";
import LogoutButton from "./logout-btn";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BottomSheet } from "@/components/bottom-sheet";
import { navItems } from "@/constants/nav";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Button
          variant="ghost"
          className="md:hidden flex"
          size="icon"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>

         {/* logo */}

        <nav className="hidden md:flex items-center justify-center gap-8">
        <img
              src="https://img.icons8.com/?size=100&id=pSTcJCJyb8Ru&format=png&color=ffffff"
              width={24}
              height={24}
              alt="logo icon"
              className="hidden dark:block"
            />
            <img
              src="https://img.icons8.com/?size=100&id=pSTcJCJyb8Ru&format=png&color=000000"
              width={24}
              height={24}
              alt="logo icon"
              className="block dark:hidden"
            />
          <Link href="/" className="md:flex hidden">
            <span className="text-xl font-bold">FitStack</span>
          </Link>
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            {session ? (
              <LogoutButton />
            ) : (
              <Button asChild>
                <Link href="/sign-in" className="text-lg font-medium">
                  Login
                </Link>
              </Button>
            )}
          </div>

          <ModeToggle />
        </div>
      </div>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <nav className="flex flex-col space-y-4 p-4">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="py-5">
            {session ? (
              <LogoutButton />
            ) : (
              <Button asChild className="w-full">
                <Link href="/sign-in" className="text-lg font-medium">
                  Login
                </Link>
              </Button>
            )}
          </div>
        </nav>
      </BottomSheet>
    </header>
  );
}
