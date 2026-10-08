"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { mockArticles } from "@/data/mockNews";

export function NewsAndInsightsSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-northstar-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-northstar-border pb-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-northstar-red block mb-1">
              Institutional Communications &amp; Media
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-northstar-charcoal tracking-tight">
              Clinical Insights, Discoveries &amp; Health News
            </h2>
            <p className="text-sm sm:text-base text-northstar-slate mt-2 font-light">
              Scientific breakthroughs from our research institutes, clinical advisories, and community health initiatives across Los Angeles.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/research"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-northstar-charcoal hover:text-northstar-red transition-colors"
            >
              <span>Visit the Northstar Newsroom</span>
              <ArrowRight className="w-4 h-4 text-northstar-red" />
            </Link>
          </div>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockArticles.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="flex flex-col justify-between border border-northstar-border hover:border-northstar-slate bg-white transition-all group"
            >
              <div>
                <div className="relative aspect-16/10 w-full bg-northstar-bg-subtle border-b border-northstar-border overflow-hidden">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-northstar-charcoal border border-northstar-border">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-northstar-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-northstar-slate" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-northstar-slate" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-northstar-charcoal leading-snug group-hover:text-northstar-red transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs text-northstar-slate leading-relaxed font-light line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-northstar-border/60 mt-4 flex items-center justify-between text-xs">
                <span className="text-[11px] text-northstar-muted font-medium">
                  {article.author.split("&")[0]}
                </span>
                <Link
                  href="/research"
                  className="font-bold text-northstar-red hover:underline flex items-center gap-1 text-[11px] uppercase tracking-wider"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
