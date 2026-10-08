"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FlagshipInstitutesSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-32 border-b border-northstar-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-24 sm:space-y-32">
        {/* Panel 1: Heart & Vascular Care */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Large Wide Image (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-16/10 w-full bg-northstar-bg-subtle border border-northstar-border overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1400"
                alt="Northstar Heart & Vascular Institute surgical theater"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>

          {/* Large Editorial Text (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs uppercase tracking-widest font-semibold text-northstar-muted">
              Heart &amp; Vascular Care
            </p>

            <h3 className="text-3xl sm:text-4xl font-serif text-northstar-charcoal tracking-tight leading-tight">
              Pioneering catheter-based valve therapies.
            </h3>

            <p className="text-sm sm:text-base text-northstar-slate font-light leading-relaxed">
              Consistently ranked among California&apos;s leading cardiovascular programs for complex structural heart reconstructions and adult heart failure.
            </p>

            <div className="pt-2">
              <Link
                href="/services#heart-vascular"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-northstar-charcoal hover:text-northstar-red transition-colors border-b border-northstar-border pb-1 hover:border-northstar-red"
              >
                <span>Heart &amp; Vascular Institute</span>
                <ArrowRight className="w-3.5 h-3.5 text-northstar-red" />
              </Link>
            </div>
          </div>
        </div>

        {/* Panel 2: Comprehensive Cancer Care (Inverted Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Large Editorial Text (5 cols) - Order 2 on mobile, Order 1 on desktop */}
          <div className="lg:col-span-5 space-y-6 lg:order-1">
            <p className="text-xs uppercase tracking-widest font-semibold text-northstar-muted">
              Comprehensive Cancer Care
            </p>

            <h3 className="text-3xl sm:text-4xl font-serif text-northstar-charcoal tracking-tight leading-tight">
              Precision oncology guided by genomic mapping.
            </h3>

            <p className="text-sm sm:text-base text-northstar-slate font-light leading-relaxed">
              National Cancer Institute-designated clinical trials, cellular therapies, and organ-sparing robotic surgical resections.
            </p>

            <div className="pt-2">
              <Link
                href="/services#cancer-center"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-northstar-charcoal hover:text-northstar-red transition-colors border-b border-northstar-border pb-1 hover:border-northstar-red"
              >
                <span>Comprehensive Cancer Center</span>
                <ArrowRight className="w-3.5 h-3.5 text-northstar-red" />
              </Link>
            </div>
          </div>

          {/* Large Wide Image (7 cols) - Order 1 on mobile, Order 2 on desktop */}
          <div className="lg:col-span-7 lg:order-2">
            <div className="relative aspect-16/10 w-full bg-northstar-bg-subtle border border-northstar-border overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1400"
                alt="Northstar Comprehensive Cancer Center"
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
