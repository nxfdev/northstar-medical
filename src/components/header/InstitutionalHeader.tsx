"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Menu, X, ArrowRight } from "lucide-react";
import { GlobalSearchModal } from "@/components/modals/GlobalSearchModal";
import { AppointmentModal } from "@/components/modals/AppointmentModal";
import { PatientPortalModal } from "@/components/modals/PatientPortalModal";

export function InstitutionalHeader() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/doctors", label: "Find a Doctor" },
    { href: "/services", label: "Specialties & Care" },
    { href: "/research", label: "Research & Trials" },
    { href: "/contact", label: "Campuses & Contact" },
  ];

  return (
    <>
      <header className="w-full bg-white border-b border-northstar-border relative z-40">
        {/* Tier 1: Utility Bar (Quiet, Architectural) */}
        <div className="w-full border-b border-northstar-border/70 text-xs text-northstar-slate">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 h-11 flex items-center justify-between">
            <div className="text-[11px] uppercase tracking-widest text-northstar-muted font-medium">
              Los Angeles, California • Academic Health System
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-northstar-slate hover:text-northstar-red transition-colors"
              >
                <Search className="w-3 h-3 text-northstar-red" />
                <span>Search</span>
              </button>

              <button
                onClick={() => setIsPortalOpen(true)}
                className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-northstar-slate hover:text-northstar-red transition-colors"
              >
                <User className="w-3 h-3 text-northstar-red" />
                <span>MyNorthstar Portal</span>
              </button>

              <button
                onClick={() => setIsAppointmentOpen(true)}
                className="hidden sm:inline-block px-4 py-1.5 bg-northstar-red hover:bg-northstar-red-hover text-white text-[11px] font-semibold uppercase tracking-wider transition-colors"
              >
                Request Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Tier 2: The Brand (Generous, Confident Vertical Scale) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between">
          <Link href="/" className="group block">
            <div className="flex items-baseline gap-2.5">
              <span className="font-serif text-2xl sm:text-3xl lg:text-3.5xl font-bold tracking-tight text-northstar-charcoal group-hover:text-black transition-colors">
                NORTHSTAR MEDICAL
              </span>
              <span className="w-2 h-2 rounded-full bg-northstar-red inline-block mb-1" />
            </div>
            <p className="text-[11px] uppercase tracking-widest text-northstar-muted font-medium mt-1">
              Northstar Medical Center • Los Angeles
            </p>
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-northstar-charcoal border border-northstar-border"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Tier 3: Primary Navigation Bar (Deliberate & Architectural) */}
        <div className="hidden lg:block border-t border-northstar-border/70">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <nav className="flex items-center space-x-10 h-13">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs uppercase tracking-widest font-semibold transition-colors relative py-4 ${
                      isActive
                        ? "text-northstar-red font-bold"
                        : "text-northstar-slate hover:text-northstar-charcoal"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-northstar-red" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-northstar-border px-6 py-6 bg-white space-y-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-wider font-semibold text-northstar-charcoal py-2 border-b border-northstar-border/50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAppointmentOpen(true);
                }}
                className="w-full py-3 bg-northstar-red text-white text-xs font-semibold uppercase tracking-wider text-center"
              >
                Request an Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AppointmentModal isOpen={isAppointmentOpen} onClose={() => setIsAppointmentOpen(false)} />
      <PatientPortalModal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
    </>
  );
}
