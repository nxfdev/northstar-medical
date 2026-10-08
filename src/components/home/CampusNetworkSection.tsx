"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CampusNetworkSection() {
  return (
    <section className="w-full bg-northstar-bg-subtle py-20 sm:py-28 lg:py-32 border-b border-northstar-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text block (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs uppercase tracking-widest font-semibold text-northstar-muted">
              Regional Health Network
            </p>

            <h2 className="text-3xl sm:text-4xl font-serif text-northstar-charcoal tracking-tight leading-tight">
              Comprehensive care across Greater Los Angeles.
            </h2>

            <p className="text-sm sm:text-base text-northstar-slate font-light leading-relaxed">
              Our flagship academic medical center in Beverly Grove is supported by regional outpatient pavilions in Santa Monica, Culver City, Pasadena, and Downtown Los Angeles.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-northstar-charcoal hover:text-northstar-red transition-colors border-b border-northstar-border pb-1 hover:border-northstar-red"
              >
                <span>Campuses &amp; Directions</span>
                <ArrowRight className="w-3.5 h-3.5 text-northstar-red" />
              </Link>
            </div>
          </div>

          {/* Large Architectural Campus Photo (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-16/10 w-full bg-white border border-northstar-border overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1400"
                alt="Northstar Medical Center Beverly Grove campus"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
