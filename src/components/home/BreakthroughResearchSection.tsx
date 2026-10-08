"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BreakthroughResearchSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-32 border-b border-northstar-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
        {/* Top Text Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-widest font-semibold text-northstar-muted">
            Clinical Innovation &amp; Discovery
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-northstar-charcoal tracking-tight leading-tight">
            From the laboratory bench to the patient bedside.
          </h2>
          <p className="text-base sm:text-lg text-northstar-slate font-light leading-relaxed">
            Translating molecular discoveries into approved treatments through more than 300 active clinical trials.
          </p>
        </div>

        {/* Large Wide Panoramic Image Panel */}
        <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-northstar-bg-subtle border border-northstar-border overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1800"
            alt="Northstar Biomedical Research Institute laboratories"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Single Disciplined Action */}
        <div className="pt-2 flex items-center justify-between border-t border-northstar-border/70">
          <span className="text-xs text-northstar-muted font-medium">
            Northstar Biomedical Research Institute • Los Angeles, California
          </span>
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-northstar-charcoal hover:text-northstar-red transition-colors border-b border-northstar-border pb-1 hover:border-northstar-red"
          >
            <span>View Active Clinical Trials</span>
            <ArrowRight className="w-3.5 h-3.5 text-northstar-red" />
          </Link>
        </div>
      </div>
    </section>
  );
}
