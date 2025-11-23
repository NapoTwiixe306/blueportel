"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "../img/logo.png";
import Image from "next/image";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href?: string;
}

interface NavItem {
  label: string;
  items: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "Logement",
    items: [
      { label: "Accueil", href: "#" },
      { label: "Photos", href: "#" },
      { label: "Vue d'ensemble", href: "#" },
      { label: "Plan", href: "#" },
      { label: "Avis", href: "#" },
    ],
  },
  {
    label: "Séjours & Réservations",
    items: [
      { label: "Disponibilités", href: "#" },
      { label: "Tarifs", href: "#" },
      { label: "Réservation personnalisée", href: "#" },
      { label: "Réserver / Calendrier", href: "#" },
    ],
  },
  {
    label: "À Proximité",
    items: [
      { label: "Nausicaa", href: "#" },
      { label: "Guide touristique", href: "#" },
    ],
  },
  {
    label: "Infos Pratique",
    items: [
      { label: "FAQ Blueportel", href: "/pages/FAQ" },
      { label: "Contact", href: "/pages/contact" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      dropdownRefs.current.forEach((ref, index) => {
        if (ref && !ref.contains(event.target as Node)) {
          if (openDropdown === index) {
            setOpenDropdown(null);
          }
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("nav")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" aria-label="Blueportel - Accueil">
              <Image 
                src={Logo} 
                alt="Blueportel - Mobil-Home Prestige Face à la Mer - Logo" 
                className="h-auto w-auto"
                width={200}
                height={80}
                priority
                fetchPriority="high"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  dropdownRefs.current[index] = el;
                }}
                className="relative"
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center gap-1 text-base font-medium text-gray-800 transition-colors hover:text-[#1E3A8A] focus:outline-none"
                >
                  {item.label}
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdown === index && (
                  <div className="absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href || "#"}
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#1E3A8A]"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="https://checkout.lodgify.com/fr/blueportel/654566/reservation?currency=EUR&ref=bnbox&adults=1"
              target="_blank"
              className="rounded-lg bg-[#2663EB] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1E40AF]"
            >
              Réservez Maintenant
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <a
              href="#"
              className="rounded-lg bg-[#2663EB] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1E40AF]"
            >
              Réserver
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 lg:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 focus:outline-none"
                >
                  <span>{item.label}</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdown === index && (
                  <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href || "#"}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1E3A8A]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

