"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EditorialHeroProps {
  onRequestAppointment: () => void;
}

export function EditorialHero({ onRequestAppointment }: EditorialHeroProps) {
  return (
    <section className="w-full bg-white border-b border-northstar-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Block: Quiet, Editorial, Confident (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-block">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-northstar-muted border-b border-northstar-border pb-1">
                Northstar Medical Center • Los Angeles
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6.5xl font-serif text-northstar-charcoal tracking-tight leading-[1.08]">
              Medicine moves forward. <br />
              <span className="italic font-normal text-northstar-slate">So do we.</span>
            </h1>

            <p className="text-base sm:text-lg text-northstar-slate leading-relaxed font-light max-w-md">
              Extraordinary clinical dedication and world-tier specialty care in Los Angeles.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={onRequestAppointment}
                className="px-8 py-4 bg-northstar-red hover:bg-northstar-red-hover text-white text-xs font-semibold uppercase tracking-widest transition-colors shadow-2xs"
              >
                Request an Appointment
              </button>

              <Link
                href="/doctors"
                className="text-xs font-semibold uppercase tracking-widest text-northstar-charcoal hover:text-northstar-red transition-colors inline-flex items-center gap-1.5"
              >
                <span>Find a Doctor</span>
                <ArrowRight className="w-3.5 h-3.5 text-northstar-red" />
              </Link>
            </div>
          </div>

          {/* Right Photographic Block: Enlarged, Architectural Framing (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[540px] sm:h-[660px] lg:h-[760px] xl:h-[820px] bg-[#ECECEE] border border-northstar-border overflow-hidden shadow-xs">
              <Image
                src="/images/hero-superhero.jpg"
                alt="Northstar Medical Center healthcare professional"
                fill
                priority
                className="object-contain object-bottom sm:object-center p-2 sm:p-4"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
