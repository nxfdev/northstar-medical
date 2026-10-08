"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  Activity,
  Brain,
  Bone,
  Flame,
  Baby,
  Stethoscope,
  Phone,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Calendar,
} from "lucide-react";
import { InstitutionalHeader } from "@/components/header/InstitutionalHeader";
import { InstitutionalFooter } from "@/components/footer/InstitutionalFooter";
import { mockServices } from "@/data/mockServices";
import { AppointmentModal } from "@/components/modals/AppointmentModal";

export default function ServicesPage() {
  const [selectedServiceSlug, setSelectedServiceSlug] = useState(mockServices[0].slug);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedSpecialtyName, setSelectedSpecialtyName] = useState("");

  const activeService =
    mockServices.find((s) => s.slug === selectedServiceSlug) || mockServices[0];

  const handleRequestAppointment = (serviceName: string) => {
    setSelectedSpecialtyName(serviceName);
    setIsAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <InstitutionalHeader />

      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-northstar-bg-subtle border-b border-northstar-border py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-northstar-red block mb-1">
              Clinical Programs &amp; Centers of Excellence
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-northstar-charcoal tracking-tight">
              Clinical Services &amp; Specialties
            </h1>
            <p className="text-sm sm:text-base text-northstar-slate mt-2 max-w-3xl font-light">
              Northstar Medical Center brings together multidisciplinary teams of clinicians, surgeons, imaging specialists, and allied healthcare professionals to deliver world-tier outcomes across every medical specialty.
            </p>
          </div>
        </div>

        {/* Clinical Institutes Tabbed Directory */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Institute Navigation Pills/Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-4 mb-8 border-b border-northstar-border no-scrollbar">
            {mockServices.map((svc) => {
              const isSelected = svc.slug === selectedServiceSlug;
              return (
                <button
                  key={svc.id}
                  onClick={() => setSelectedServiceSlug(svc.slug)}
                  className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors border ${
                    isSelected
                      ? "bg-northstar-charcoal text-white border-northstar-charcoal shadow-2xs"
                      : "bg-northstar-bg-subtle text-northstar-slate border-northstar-border hover:bg-white hover:text-northstar-charcoal"
                  }`}
                >
                  {svc.name}
                </button>
              );
            })}
          </div>

          {/* Active Service Deep Dive Dossier */}
          <div className="space-y-12">
            {/* Hero Banner for Active Specialty */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-northstar-border p-6 lg:p-10 shadow-xs">
              <div className="lg:col-span-7 space-y-4">
                {activeService.rankingBadge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-northstar-bg-subtle border border-northstar-border text-xs font-bold text-northstar-charcoal">
                    <span className="text-northstar-red">★</span>
                    <span>{activeService.rankingBadge}</span>
                  </div>
                )}
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-northstar-muted block">
                    {activeService.institute}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-northstar-charcoal mt-1">
                    {activeService.name}
                  </h2>
                  <p className="text-sm font-medium text-northstar-slate mt-1 italic">
                    {activeService.descriptor}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-northstar-slate leading-relaxed font-light">
                  {activeService.overview}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleRequestAppointment(activeService.name)}
                    className="px-6 py-3 bg-northstar-red hover:bg-northstar-red-hover text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request Institute Consult</span>
                  </button>

                  <a
                    href={`tel:${activeService.phone.replace(/[^0-9]/g, "")}`}
                    className="px-5 py-3 border border-northstar-border hover:border-northstar-charcoal text-northstar-charcoal text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 bg-white"
                  >
                    <Phone className="w-4 h-4 text-northstar-red" />
                    <span>Direct: {activeService.phone}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-4/3 w-full bg-northstar-bg-subtle border border-northstar-border overflow-hidden">
                  <Image
                    src={activeService.heroImage}
                    alt={activeService.institute}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 p-3 text-xs border border-northstar-border">
                    <p className="font-semibold text-northstar-charcoal flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-northstar-red shrink-0" />
                      <span>{activeService.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Outcomes Metrics Matrix */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-northstar-slate mb-4">
                Clinical Outcomes &amp; Quality Benchmarks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeService.keyOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-northstar-bg-subtle border border-northstar-border flex flex-col justify-between"
                  >
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-northstar-charcoal">
                      {outcome.metric}
                    </span>
                    <p className="text-xs sm:text-sm text-northstar-slate mt-2 leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions Treated & Advanced Interventions Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Conditions Treated */}
              <div className="p-6 bg-white border border-northstar-border space-y-4">
                <h3 className="text-base font-serif font-bold text-northstar-charcoal border-b border-northstar-border pb-3">
                  Conditions &amp; Diagnoses Treated
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-northstar-slate">
                  {activeService.conditions.map((cond, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-northstar-red shrink-0 mt-0.5" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatments & Surgeries */}
              <div className="p-6 bg-white border border-northstar-border space-y-4">
                <h3 className="text-base font-serif font-bold text-northstar-charcoal border-b border-northstar-border pb-3">
                  Advanced Interventions &amp; Surgeries
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-northstar-slate">
                  {activeService.treatments.map((treat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-northstar-red shrink-0 mt-1.5" />
                      <span>{treat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Clinical Leadership & Featured Story */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Leadership */}
              <div className="lg:col-span-6 p-6 bg-northstar-bg-subtle border border-northstar-border space-y-4">
                <h3 className="text-base font-serif font-bold text-northstar-charcoal border-b border-northstar-border pb-3">
                  Institute Leadership &amp; Endowed Chairs
                </h3>
                <div className="space-y-4">
                  {activeService.clinicalLeaders.map((ldr, idx) => (
                    <div key={idx} className="space-y-1">
                      <h4 className="text-sm font-bold text-northstar-charcoal">{ldr.name}</h4>
                      <p className="text-xs text-northstar-slate">{ldr.role}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <Link
                    href={`/doctors?specialty=${encodeURIComponent(activeService.name)}`}
                    className="text-xs font-bold uppercase tracking-wider text-northstar-red hover:underline inline-flex items-center gap-1"
                  >
                    <span>View All Faculty in this Institute</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Featured Case Narrative */}
              {activeService.featuredStory && (
                <div className="lg:col-span-6 p-6 bg-white border border-northstar-border space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-northstar-red">
                    Clinical Case Narrative
                  </span>
                  <h4 className="text-lg font-serif font-bold text-northstar-charcoal">
                    {activeService.featuredStory.headline}
                  </h4>
                  <p className="text-xs text-northstar-slate leading-relaxed font-light">
                    {activeService.featuredStory.snippet}
                  </p>
                  <p className="text-[11px] font-semibold text-northstar-muted pt-1">
                    Patient: {activeService.featuredStory.patientName}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <InstitutionalFooter />

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedSpecialty={selectedSpecialtyName}
      />
    </div>
  );
}
