"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-green-700 text-white py-2 px-4">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:04522679676" className="flex items-center gap-1 hover:text-green-200">
              <Phone className="w-4 h-4" />
              <span>0452-2679676</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:9443310634" className="hidden sm:flex items-center gap-1 hover:text-green-200">
              <Phone className="w-4 h-4" />
              <span>94433 10634</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>mahatmatrustmadurai@gmail.com</span>
          </div>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Heart className="h-6 w-6 text-green-700" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-green-700">
                Mahatma Old Age Home
              </span>
              <span className="text-xs text-gray-600">
                மகாத்மா முதியோர் இல்லம்
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-green-700"
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-green-700 hover:bg-green-800 text-white">
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-green-100 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 transition-colors hover:text-green-700 px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-green-700 hover:bg-green-800 text-white w-full">
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
