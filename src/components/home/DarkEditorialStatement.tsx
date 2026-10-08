"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DarkEditorialStatement() {
  return (
    <section className="w-full bg-northstar-charcoal text-white py-20 sm:py-28 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center space-y-8">
        <p className="text-xs uppercase tracking-widest font-semibold text-gray-400">
          Institutional Excellence
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white leading-tight tracking-tight max-w-4xl mx-auto">
          An academic health system built for the most complex clinical challenges.
        </h2>

        <p className="text-base sm:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
          Home to internationally recognized surgeons, physician-scientists, and dedicated multidisciplinary care teams across Southern California.
        </p>

        <div className="pt-2">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white hover:text-northstar-red transition-colors border-b border-gray-600 pb-1 hover:border-northstar-red"
          >
            <span>Explore Clinical Programs &amp; Institutes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
