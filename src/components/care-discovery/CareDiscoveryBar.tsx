"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CareDiscoveryBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/doctors?query=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/doctors");
    }
  };

  return (
    <section className="w-full bg-northstar-bg-subtle border-b border-northstar-border py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 space-y-6 text-center">
        <div>
          <h2 className="text-xs uppercase tracking-widest font-semibold text-northstar-muted">
            Find Care at Northstar
          </h2>
          <p className="text-2xl sm:text-3xl font-serif text-northstar-charcoal mt-1">
            Connect with physicians, clinical programs, and regional campuses.
          </p>
        </div>

        {/* Wide Restrained Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2 max-w-3xl mx-auto"
        >
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-northstar-muted absolute left-4 top-4" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by condition, treatment, or physician name..."
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-northstar-border text-sm text-northstar-charcoal placeholder-northstar-muted focus:border-northstar-charcoal focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3.5 bg-northstar-charcoal hover:bg-black text-white text-xs font-semibold uppercase tracking-widest transition-colors shrink-0"
          >
            Find Care
          </button>
        </form>

        {/* Quiet Specialty Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-northstar-slate pt-2 font-medium">
          <span className="text-northstar-muted">Explore:</span>
          <Link href="/services#heart-vascular" className="hover:text-northstar-red transition-colors">
            Heart &amp; Vascular
          </Link>
          <span className="text-northstar-border">•</span>
          <Link href="/services#cancer-center" className="hover:text-northstar-red transition-colors">
            Cancer Care
          </Link>
          <span className="text-northstar-border">•</span>
          <Link href="/services#neurosciences" className="hover:text-northstar-red transition-colors">
            Neurosciences
          </Link>
          <span className="text-northstar-border">•</span>
          <Link href="/services#orthopedics" className="hover:text-northstar-red transition-colors">
            Orthopedics
          </Link>
          <span className="text-northstar-border">•</span>
          <Link href="/contact#urgent-care" className="hover:text-northstar-red transition-colors">
            Urgent Care
          </Link>
        </div>
      </div>
    </section>
  );
}
