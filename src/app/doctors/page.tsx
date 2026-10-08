"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Filter,
  User,
  MapPin,
  Calendar,
  CheckCircle,
  Phone,
  GraduationCap,
  Star,
  Award,
  ArrowRight,
} from "lucide-react";
import { InstitutionalHeader } from "@/components/header/InstitutionalHeader";
import { InstitutionalFooter } from "@/components/footer/InstitutionalFooter";
import { mockDoctors } from "@/data/mockDoctors";
import { Doctor } from "@/types";
import { DoctorProfileModal } from "@/components/modals/DoctorProfileModal";
import { AppointmentModal } from "@/components/modals/AppointmentModal";

function DoctorsDirectoryContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const initialSpecialty = searchParams.get("specialty") || "All Specialties";
  const initialCampus = searchParams.get("campus") || "All Campuses";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialty);
  const [selectedCampus, setSelectedCampus] = useState(initialCampus);
  const [selectedLanguage, setSelectedLanguage] = useState("All Languages");
  const [acceptingNewOnly, setAcceptingNewOnly] = useState(false);

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [appointmentDoctorId, setAppointmentDoctorId] = useState<string | undefined>(undefined);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  // Sync if URL search params change
  useEffect(() => {
    if (searchParams.get("query")) setSearchQuery(searchParams.get("query") || "");
    if (searchParams.get("specialty")) setSelectedSpecialty(searchParams.get("specialty") || "All Specialties");
    if (searchParams.get("campus")) setSelectedCampus(searchParams.get("campus") || "All Campuses");
  }, [searchParams]);

  // Extract unique filter options
  const specialties = useMemo(() => {
    const list = new Set<string>();
    mockDoctors.forEach((d) => list.add(d.specialty));
    return ["All Specialties", ...Array.from(list).sort()];
  }, []);

  const campuses = useMemo(() => {
    const list = new Set<string>();
    mockDoctors.forEach((d) => list.add(d.campus));
    return ["All Campuses", ...Array.from(list).sort()];
  }, []);

  const languages = useMemo(() => {
    const list = new Set<string>();
    mockDoctors.forEach((d) => d.languages.forEach((l) => list.add(l)));
    return ["All Languages", ...Array.from(list).sort()];
  }, []);

  // Filtered doctors
  const filteredDoctors = useMemo(() => {
    return mockDoctors.filter((doc) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = doc.name.toLowerCase().includes(q);
        const matchesSpec = doc.specialty.toLowerCase().includes(q);
        const matchesDept = doc.department.toLowerCase().includes(q);
        const matchesSub = doc.subspecialties.some((s) => s.toLowerCase().includes(q));
        const matchesInterests = doc.clinicalInterests.some((ci) => ci.toLowerCase().includes(q));
        if (!matchesName && !matchesSpec && !matchesDept && !matchesSub && !matchesInterests) {
          return false;
        }
      }

      if (selectedSpecialty !== "All Specialties") {
        if (doc.specialty !== selectedSpecialty && !doc.department.includes(selectedSpecialty)) {
          return false;
        }
      }

      if (selectedCampus !== "All Campuses") {
        if (!doc.campus.includes(selectedCampus)) return false;
      }

      if (selectedLanguage !== "All Languages") {
        if (!doc.languages.includes(selectedLanguage)) return false;
      }

      if (acceptingNewOnly && !doc.acceptingNewPatients) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedSpecialty, selectedCampus, selectedLanguage, acceptingNewOnly]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <InstitutionalHeader />

      <main className="flex-1">
        {/* Page Header / Editorial Masthead */}
        <div className="bg-northstar-bg-subtle border-b border-northstar-border py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-northstar-red block mb-1">
              Physician &amp; Faculty Directory
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-northstar-charcoal tracking-tight">
              Find a Doctor &amp; Specialist
            </h1>
            <p className="text-sm sm:text-base text-northstar-slate mt-2 max-w-3xl font-light">
              Connect with board-certified attending physicians, division chiefs, and clinical researchers practicing across Northstar Medical Center&apos;s Greater Los Angeles campuses.
            </p>
          </div>
        </div>

        {/* Directory Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Top Search & Filter Bar */}
          <div className="bg-northstar-bg-subtle border border-northstar-border p-6 mb-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Search input */}
              <div className="md:col-span-6 relative">
                <Search className="w-4 h-4 text-northstar-red absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by physician name, clinical specialty, or condition..."
                  className="w-full pl-10 pr-3 py-2.5 bg-white border border-northstar-border text-sm text-northstar-charcoal placeholder-northstar-muted focus:border-northstar-red focus:outline-none"
                />
              </div>

              {/* Specialty */}
              <div className="md:col-span-3">
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full p-2.5 bg-white border border-northstar-border text-xs sm:text-sm text-northstar-charcoal focus:border-northstar-red focus:outline-none"
                >
                  {specialties.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </div>

              {/* Campus */}
              <div className="md:col-span-3">
                <select
                  value={selectedCampus}
                  onChange={(e) => setSelectedCampus(e.target.value)}
                  className="w-full p-2.5 bg-white border border-northstar-border text-xs sm:text-sm text-northstar-charcoal focus:border-northstar-red focus:outline-none"
                >
                  {campuses.map((camp) => (
                    <option key={camp} value={camp}>
                      {camp}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Secondary Filter Row */}
            <div className="pt-3 border-t border-northstar-border flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-4">
                {/* Language Filter */}
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-northstar-slate">Language:</span>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="p-1.5 bg-white border border-northstar-border text-xs text-northstar-charcoal focus:border-northstar-red focus:outline-none"
                  >
                    {languages.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Accepting New Patients */}
                <label className="flex items-center gap-2 cursor-pointer font-medium text-northstar-charcoal">
                  <input
                    type="checkbox"
                    checked={acceptingNewOnly}
                    onChange={(e) => setAcceptingNewOnly(e.target.checked)}
                    className="w-4 h-4 text-northstar-red border-northstar-border rounded-none"
                  />
                  <span>Accepting New Patients Only</span>
                </label>
              </div>

              {/* Reset Filters */}
              {(searchQuery ||
                selectedSpecialty !== "All Specialties" ||
                selectedCampus !== "All Campuses" ||
                selectedLanguage !== "All Languages" ||
                acceptingNewOnly) && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSpecialty("All Specialties");
                    setSelectedCampus("All Campuses");
                    setSelectedLanguage("All Languages");
                    setAcceptingNewOnly(false);
                  }}
                  className="text-northstar-red font-semibold uppercase tracking-wider text-[11px] hover:underline"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6 border-b border-northstar-border pb-3">
            <p className="text-xs font-bold uppercase tracking-wider text-northstar-slate">
              Showing {filteredDoctors.length} Faculty Physicians
            </p>
            <span className="text-xs text-northstar-muted">
              Need immediate triage? Call <strong>(310) 855-5000</strong>
            </span>
          </div>

          {/* Doctors List */}
          {filteredDoctors.length > 0 ? (
            <div className="space-y-6">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white border border-northstar-border p-6 hover:border-northstar-slate transition-all flex flex-col md:flex-row gap-6 items-start"
                >
                  {/* Portrait */}
                  <div className="relative w-32 h-40 sm:w-36 sm:h-44 shrink-0 bg-northstar-bg-subtle border border-northstar-border overflow-hidden">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 128px, 144px"
                    />
                  </div>

                  {/* Physician Details */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-northstar-red bg-northstar-red-subtle px-2 py-0.5 border border-red-100">
                        {doc.specialty}
                      </span>
                      {doc.acceptingNewPatients ? (
                        <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Accepting New Patients
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium text-amber-800 bg-amber-50 px-2 py-0.5 border border-amber-200">
                          Waitlist / Existing Patients Only
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-northstar-charcoal">
                      {doc.name}, {doc.credentials}
                    </h2>
                    <p className="text-xs sm:text-sm font-medium text-northstar-slate">
                      {doc.title}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-northstar-muted pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-northstar-red" />
                        {doc.campus}
                      </span>
                      <span>•</span>
                      <span>Languages: {doc.languages.join(", ")}</span>
                    </div>

                    <p className="text-xs text-northstar-slate line-clamp-2 pt-1 font-light leading-relaxed">
                      {doc.bio}
                    </p>

                    {/* Subspecialties Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {doc.subspecialties.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 bg-northstar-bg-subtle text-[10px] text-northstar-slate border border-northstar-border"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Right Side */}
                  <div className="w-full md:w-56 shrink-0 flex flex-col gap-2 pt-4 md:pt-0 md:border-l md:border-northstar-border md:pl-6">
                    <div className="text-xs text-northstar-muted mb-2 hidden md:block">
                      <div className="flex items-center gap-1 text-amber-600 font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{doc.rating} / 5.0</span>
                      </div>
                      <span className="text-[11px]">({doc.reviewCount} verified patient reviews)</span>
                    </div>

                    <button
                      onClick={() => {
                        setAppointmentDoctorId(doc.id);
                        setIsAppointmentOpen(true);
                      }}
                      className="w-full py-2.5 bg-northstar-red hover:bg-northstar-red-hover text-white text-xs font-bold uppercase tracking-wider transition-colors text-center shadow-2xs"
                    >
                      Request Appointment
                    </button>

                    <button
                      onClick={() => setSelectedDoctor(doc)}
                      className="w-full py-2 border border-northstar-border hover:border-northstar-charcoal text-northstar-charcoal text-xs font-semibold uppercase tracking-wider transition-colors text-center bg-white"
                    >
                      View Full Dossier
                    </button>

                    <a
                      href={`tel:${doc.phone.replace(/[^0-9]/g, "")}`}
                      className="text-center text-xs text-northstar-muted hover:text-northstar-charcoal pt-1"
                    >
                      {doc.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-northstar-bg-subtle border border-northstar-border p-8">
              <User className="w-10 h-10 text-northstar-muted mx-auto mb-3" />
              <h3 className="text-lg font-serif text-northstar-charcoal">
                No matching physicians found
              </h3>
              <p className="text-xs text-northstar-muted max-w-md mx-auto mt-1">
                We couldn&apos;t find any doctors matching your active filters. Try broadening your specialty or resetting your search parameters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSpecialty("All Specialties");
                  setSelectedCampus("All Campuses");
                  setSelectedLanguage("All Languages");
                  setAcceptingNewOnly(false);
                }}
                className="mt-4 px-5 py-2 bg-northstar-charcoal text-white text-xs font-semibold uppercase tracking-wider"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <InstitutionalFooter />

      {/* Modals */}
      <DoctorProfileModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onRequestAppointment={(docId) => {
          setSelectedDoctor(null);
          setAppointmentDoctorId(docId);
          setIsAppointmentOpen(true);
        }}
      />
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedDoctorId={appointmentDoctorId}
      />
    </div>
  );
}

export default function DoctorsDirectoryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center font-serif text-northstar-muted">
          Accessing Northstar Faculty Registry...
        </div>
      }
    >
      <DoctorsDirectoryContent />
    </Suspense>
  );
}

