"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Microscope,
  Search,
  Filter,
  Dna,
  Activity,
  FileText,
  Mail,
  GraduationCap,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { InstitutionalHeader } from "@/components/header/InstitutionalHeader";
import { InstitutionalFooter } from "@/components/footer/InstitutionalFooter";
import { mockClinicalTrials, mockResearchHighlights } from "@/data/mockResearch";

export default function ResearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPhase, setSelectedPhase] = useState("All Phases");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");

  const phases = ["All Phases", "Phase I", "Phase II", "Phase III", "Phase IV"];
  const statuses = ["All Statuses", "Recruiting", "Active, Not Recruiting"];

  const filteredTrials = useMemo(() => {
    return mockClinicalTrials.filter((trial) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = trial.title.toLowerCase().includes(q);
        const matchesCondition = trial.condition.toLowerCase().includes(q);
        const matchesSummary = trial.summary.toLowerCase().includes(q);
        const matchesNct = trial.nctId.toLowerCase().includes(q);
        const matchesPi = trial.principalInvestigator.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCondition && !matchesSummary && !matchesNct && !matchesPi) {
          return false;
        }
      }

      if (selectedPhase !== "All Phases" && trial.phase !== selectedPhase) {
        return false;
      }

      if (selectedStatus !== "All Statuses" && trial.status !== selectedStatus) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedPhase, selectedStatus]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <InstitutionalHeader />

      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-northstar-bg-subtle border-b border-northstar-border py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-northstar-red block mb-1">
              Northstar Biomedical Research Institute
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-northstar-charcoal tracking-tight">
              Research &amp; Clinical Trials
            </h1>
            <p className="text-sm sm:text-base text-northstar-slate mt-2 max-w-3xl font-light">
              Accelerating discoveries from laboratory benches to patient bedsides. Our faculty investigators conduct groundbreaking basic science, translational studies, and multicenter clinical trials shaping the future of global medicine.
            </p>
          </div>
        </div>

        {/* Research Metrics Strip */}
        <div className="border-b border-northstar-border bg-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {mockResearchHighlights.map((hl, idx) => (
                <div key={idx} className="border-l-2 border-northstar-red pl-4">
                  <span className="text-3xl font-serif font-bold text-northstar-charcoal block">
                    {hl.metric}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-northstar-slate mt-0.5 block">
                    {hl.label}
                  </span>
                  <span className="text-[11px] text-northstar-muted block mt-1 leading-snug">
                    {hl.subtext}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clinical Trials Directory Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-northstar-red block mb-1">
              Human Subject Research Registry
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-northstar-charcoal">
              Active Clinical Trials Protocol Registry
            </h2>
            <p className="text-xs sm:text-sm text-northstar-slate mt-1 font-light">
              Search open therapeutic clinical trials across oncology, cardiovascular surgery, neurology, and rare disease indications.
            </p>
          </div>

          {/* Trials Search & Filters */}
          <div className="bg-northstar-bg-subtle border border-northstar-border p-6 mb-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Search query */}
              <div className="md:col-span-6 relative">
                <Search className="w-4 h-4 text-northstar-red absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by condition, trial title, or NCT number..."
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-northstar-border text-sm text-northstar-charcoal placeholder-northstar-muted focus:border-northstar-red focus:outline-none"
                />
              </div>

              {/* Phase select */}
              <div className="md:col-span-3">
                <select
                  value={selectedPhase}
                  onChange={(e) => setSelectedPhase(e.target.value)}
                  className="w-full p-2.5 bg-white border border-northstar-border text-xs sm:text-sm text-northstar-charcoal focus:border-northstar-red focus:outline-none"
                >
                  {phases.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status select */}
              <div className="md:col-span-3">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full p-2.5 bg-white border border-northstar-border text-xs sm:text-sm text-northstar-charcoal focus:border-northstar-red focus:outline-none"
                >
                  {statuses.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-northstar-muted">
              <span>Showing {filteredTrials.length} Open Research Protocols</span>
              {(searchQuery || selectedPhase !== "All Phases" || selectedStatus !== "All Statuses") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedPhase("All Phases");
                    setSelectedStatus("All Statuses");
                  }}
                  className="text-northstar-red font-semibold uppercase tracking-wider text-[11px] hover:underline"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Trials List */}
          <div className="space-y-6">
            {filteredTrials.map((trial) => (
              <div
                key={trial.id}
                className="bg-white border border-northstar-border p-6 hover:border-northstar-slate transition-all space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-northstar-border pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-northstar-bg-subtle px-2 py-0.5 border border-northstar-border text-northstar-slate">
                      {trial.phase}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border ${
                        trial.status === "Recruiting"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-gray-100 text-gray-700 border-gray-300"
                      }`}
                    >
                      {trial.status}
                    </span>
                    <span className="text-xs font-mono font-medium text-northstar-muted">
                      {trial.nctId}
                    </span>
                  </div>

                  <span className="text-xs text-northstar-muted font-medium">
                    {trial.department}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-northstar-charcoal">
                    {trial.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-northstar-slate mt-2 leading-relaxed font-light">
                    {trial.summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-northstar-bg-subtle p-4 border border-northstar-border text-xs">
                  <div>
                    <h4 className="font-bold text-northstar-charcoal uppercase tracking-wider text-[10px] mb-1.5">
                      Key Eligibility Criteria:
                    </h4>
                    <ul className="space-y-1 text-northstar-slate">
                      {trial.eligibility.map((el, eIdx) => (
                        <li key={eIdx} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-northstar-red shrink-0 mt-0.5" />
                          <span>{el}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="font-bold text-northstar-charcoal uppercase tracking-wider text-[10px] block">
                        Principal Investigator:
                      </span>
                      <span className="text-northstar-slate">{trial.principalInvestigator}</span>
                    </div>
                    <div>
                      <span className="font-bold text-northstar-charcoal uppercase tracking-wider text-[10px] block">
                        Study Site:
                      </span>
                      <span className="text-northstar-slate">{trial.campus}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={`mailto:${trial.contactEmail}?subject=${encodeURIComponent(
                      `Inquiry regarding Protocol ${trial.nctId}: ${trial.title}`
                    )}`}
                    className="px-5 py-2.5 bg-northstar-charcoal hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-2xs"
                  >
                    <Mail className="w-4 h-4 text-northstar-red" />
                    <span>Inquire About Participation</span>
                  </a>

                  <a
                    href={`https://clinicaltrials.gov/study/${trial.nctId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-northstar-red hover:underline flex items-center gap-1"
                  >
                    <span>View Official NIH Registry (ClinicalTrials.gov)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Medicine & Fellowships Section */}
          <div id="academics" className="mt-16 pt-12 border-t border-northstar-border">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-northstar-bg-subtle border border-northstar-border space-y-3">
                <GraduationCap className="w-6 h-6 text-northstar-red" />
                <h3 className="text-base font-serif font-bold text-northstar-charcoal">
                  Graduate Medical Education (GME)
                </h3>
                <p className="text-xs text-northstar-slate leading-relaxed font-light">
                  Training 450+ medical residents and clinical fellows annually across ACGME-accredited residency programs in Internal Medicine, General Surgery, Neurosurgery, and Cardiology.
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-bold uppercase tracking-wider text-northstar-red hover:underline block pt-2"
                >
                  Residency Programs &amp; Match Information →
                </Link>
              </div>

              <div className="p-6 bg-northstar-bg-subtle border border-northstar-border space-y-3">
                <Dna className="w-6 h-6 text-northstar-red" />
                <h3 className="text-base font-serif font-bold text-northstar-charcoal">
                  Precision Genomic Biobank
                </h3>
                <p className="text-xs text-northstar-slate leading-relaxed font-light">
                  A state-of-the-art annotated clinical biospecimen repository housing over 150,000 consented tissue and liquid biopsy specimens powering biomarker discovery across California.
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-bold uppercase tracking-wider text-northstar-red hover:underline block pt-2"
                >
                  Core Lab Services &amp; Investigator Access →
                </Link>
              </div>

              <div className="p-6 bg-northstar-bg-subtle border border-northstar-border space-y-3">
                <Award className="w-6 h-6 text-northstar-red" />
                <h3 className="text-base font-serif font-bold text-northstar-charcoal">
                  Continuing Medical Education (CME)
                </h3>
                <p className="text-xs text-northstar-slate leading-relaxed font-light">
                  Accredited by the ACCME to provide AMA PRA Category 1 Credits™ through Grand Rounds, clinical symposia, and surgical live-demonstration workshops for regional physicians.
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-bold uppercase tracking-wider text-northstar-red hover:underline block pt-2"
                >
                  CME Calendar &amp; Grand Rounds Schedules →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <InstitutionalFooter />
    </div>
  );
}
