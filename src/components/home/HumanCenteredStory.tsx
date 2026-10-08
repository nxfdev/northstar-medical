"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HumanCenteredStory() {
  return (
    <section className="w-full bg-northstar-bg-subtle py-20 sm:py-28 lg:py-32 border-b border-northstar-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Large Editorial Portrait (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 w-full bg-white border border-northstar-border overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                alt="Elena Vance, Studio City resident"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Large Typographic Pull Quote & Story (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-widest font-semibold text-northstar-muted">
              Patient Narrative • Precision Oncology
            </p>

            <blockquote className="text-2xl sm:text-3xl lg:text-3.5xl font-serif text-northstar-charcoal leading-snug tracking-tight">
              &ldquo;They mapped my tumor genetics and found a key that turned everything around.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-northstar-slate font-light leading-relaxed">
              Elena Vance, Studio City. In complete clinical remission following a targeted molecular immunotherapy trial at Northstar.
            </p>

            <div className="pt-2">
              <Link
                href="/services#cancer-center"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-northstar-charcoal hover:text-northstar-red transition-colors border-b border-northstar-border pb-1 hover:border-northstar-red"
              >
                <span>Read the Clinical Narrative</span>
                <ArrowRight className="w-3.5 h-3.5 text-northstar-red" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
