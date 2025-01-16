"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="py-4 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold text-xl">Ariska Adi</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" asChild>
              <Link href="#skills">Skills</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#services">Services</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#projects">Projects</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
