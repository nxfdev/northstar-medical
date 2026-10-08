"use client";

import React from "react";
import { Award, Shield, CheckCircle2, Star } from "lucide-react";

export function NationalRecognitionBar() {
  const accolades = [
    {
      rank: "#1 in California",
      specialty: "Cardiology, Heart & Vascular Surgery",
      source: "National Clinical Hospital Rankings",
    },
    {
      rank: "Top 5 Nationally",
      specialty: "Gastroenterology & GI Surgery",
      source: "Specialty Outcome Metrics",
    },
    {
      rank: "Top 10 Nationally",
      specialty: "Neurology & Neurosurgical Sciences",
      source: "Honor Roll Institution",
    },
    {
      rank: "Top 10 Nationally",
      specialty: "Orthopedic Surgery & Joint Reconstruction",
      source: "Musculoskeletal Registry",
    },
    {
      rank: "NCI-Designated",
      specialty: "Comprehensive Cancer Center",
      source: "National Cancer Institute",
    },
  ];

  return (
    <div className="w-full bg-northstar-bg-subtle border-b border-northstar-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Label */}
          <div className="lg:w-1/4 shrink-0 border-l-2 border-northstar-red pl-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-northstar-slate block">
              Quality &amp; Safety Excellence
            </span>
            <h3 className="text-base font-serif font-bold text-northstar-charcoal">
              Consistently Ranked Among America&apos;s Best Hospitals
            </h3>
          </div>

          {/* Accolades Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:w-3/4">
            {accolades.map((item, idx) => (
              <div
                key={idx}
                className="p-3 bg-white border border-northstar-border flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs sm:text-sm font-bold text-northstar-red font-serif block">
                    {item.rank}
                  </span>
                  <p className="text-xs font-semibold text-northstar-charcoal mt-1 line-clamp-2">
                    {item.specialty}
                  </p>
                </div>
                <span className="text-[10px] text-northstar-muted uppercase tracking-wider mt-2 block">
                  {item.source}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
