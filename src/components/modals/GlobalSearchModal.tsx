"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Search, X, User, HeartPulse, Microscope, MapPin, ArrowRight } from "lucide-react";
import { mockDoctors } from "@/data/mockDoctors";
import { mockServices } from "@/data/mockServices";
import { mockClinicalTrials } from "@/data/mockResearch";
import { mockLocations } from "@/data/mockLocations";
import Link from "next/link";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDoctor?: (doctorId: string) => void;
}

export function GlobalSearchModal({ isOpen, onClose, onSelectDoctor }: GlobalSearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // toggle
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase().trim();

    const matchedDoctors = mockDoctors.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.specialty.toLowerCase().includes(q) ||
        d.department.toLowerCase().includes(q) ||
        d.subspecialties.some((s) => s.toLowerCase().includes(q))
    ).slice(0, 4);

    const matchedServices = mockServices.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.institute.toLowerCase().includes(q) ||
        s.conditions.some((c) => c.toLowerCase().includes(q)) ||
        s.treatments.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 3);

    const matchedTrials = mockClinicalTrials.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.condition.toLowerCase().includes(q) ||
        t.nctId.toLowerCase().includes(q)
    ).slice(0, 3);

    const matchedLocations = mockLocations.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.city.toLowerCase().includes(q) ||
        l.type.toLowerCase().includes(q)
    ).slice(0, 3);

    return {
      doctors: matchedDoctors,
      services: matchedServices,
      trials: matchedTrials,
      locations: matchedLocations,
      totalCount:
        matchedDoctors.length +
        matchedServices.length +
        matchedTrials.length +
        matchedLocations.length,
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-northstar-charcoal/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl bg-white border border-northstar-border shadow-2xl overflow-hidden text-northstar-charcoal flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-northstar-border flex items-center gap-3 bg-northstar-bg-subtle">
          <Search className="w-5 h-5 text-northstar-red shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search doctors, conditions, clinical specialties, trials, or locations..."
            className="w-full bg-transparent text-base sm:text-lg text-northstar-charcoal placeholder-northstar-muted focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-northstar-muted hover:text-northstar-charcoal text-xs uppercase font-medium tracking-wider"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-northstar-muted hover:text-northstar-charcoal border border-northstar-border rounded-none hover:bg-white transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto divide-y divide-northstar-border space-y-6">
          {!query.trim() ? (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-northstar-muted mb-3">
                  Frequent Searches Across Northstar
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Cardiology & TAVR",
                    "Surgical Oncology",
                    "Robotic Knee Replacement",
                    "Level I Trauma Center",
                    "CAR-T Cell Therapy",
                    "Maternal Fetal Medicine",
                    "Urgent Care Wait Times",
                  ].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 text-xs font-medium bg-northstar-bg-subtle text-northstar-slate border border-northstar-border hover:border-northstar-red hover:text-northstar-red transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <Link
                  href="/doctors"
                  onClick={onClose}
                  className="p-4 border border-northstar-border hover:border-northstar-red transition-all group bg-white"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-northstar-muted">Directory</span>
                    <ArrowRight className="w-4 h-4 text-northstar-muted group-hover:text-northstar-red transition-colors" />
                  </div>
                  <h4 className="text-base font-semibold text-northstar-charcoal group-hover:text-northstar-red transition-colors">
                    Find a Doctor & Specialists
                  </h4>
                  <p className="text-xs text-northstar-muted mt-1">
                    Browse over 2,800 affiliated faculty physicians and clinical investigators.
                  </p>
                </Link>

                <Link
                  href="/services"
                  onClick={onClose}
                  className="p-4 border border-northstar-border hover:border-northstar-red transition-all group bg-white"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-northstar-muted">Institutes</span>
                    <ArrowRight className="w-4 h-4 text-northstar-muted group-hover:text-northstar-red transition-colors" />
                  </div>
                  <h4 className="text-base font-semibold text-northstar-charcoal group-hover:text-northstar-red transition-colors">
                    Clinical Programs & Specialties
                  </h4>
                  <p className="text-xs text-northstar-muted mt-1">
                    Explore comprehensive cancer care, cardiovascular, neurosciences, and orthopedics.
                  </p>
                </Link>
              </div>
            </div>
          ) : searchResults && searchResults.totalCount > 0 ? (
            <div className="space-y-6">
              {/* Doctors Matches */}
              {searchResults.doctors.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <User className="w-4 h-4 text-northstar-red" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-northstar-charcoal">
                      Physicians ({searchResults.doctors.length})
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {searchResults.doctors.map((doc) => (
                      <div
                        key={doc.id}
                        onClick={() => {
                          if (onSelectDoctor) onSelectDoctor(doc.id);
                          onClose();
                        }}
                        className="p-3 border border-northstar-border hover:border-northstar-red bg-white cursor-pointer transition-colors flex items-center justify-between"
                      >
                        <div>
                          <p className="font-semibold text-sm text-northstar-charcoal hover:text-northstar-red">
                            {doc.name}, {doc.credentials}
                          </p>
                          <p className="text-xs text-northstar-muted">{doc.specialty} • {doc.campus}</p>
                        </div>
                        <span className="text-xs font-semibold text-northstar-red uppercase tracking-wider">
                          View Dossier →
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Clinical Services Matches */}
              {searchResults.services.length > 0 && (
                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <HeartPulse className="w-4 h-4 text-northstar-red" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-northstar-charcoal">
                      Clinical Programs ({searchResults.services.length})
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {searchResults.services.map((svc) => (
                      <Link
                        key={svc.id}
                        href={`/services#${svc.slug}`}
                        onClick={onClose}
                        className="p-3 border border-northstar-border hover:border-northstar-red bg-white flex items-center justify-between block transition-colors"
                      >
                        <div>
                          <p className="font-semibold text-sm text-northstar-charcoal">{svc.name}</p>
                          <p className="text-xs text-northstar-muted">{svc.institute}</p>
                        </div>
                        <span className="text-xs font-semibold text-northstar-red uppercase tracking-wider">
                          Learn More →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Research Trials Matches */}
              {searchResults.trials.length > 0 && (
                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Microscope className="w-4 h-4 text-northstar-red" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-northstar-charcoal">
                      Clinical Trials ({searchResults.trials.length})
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {searchResults.trials.map((trial) => (
                      <Link
                        key={trial.id}
                        href="/research"
                        onClick={onClose}
                        className="p-3 border border-northstar-border hover:border-northstar-red bg-white flex items-center justify-between block transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-northstar-bg-subtle px-1.5 py-0.5 border border-northstar-border">
                              {trial.phase}
                            </span>
                            <span className="font-medium text-xs text-northstar-charcoal line-clamp-1">
                              {trial.title}
                            </span>
                          </div>
                          <p className="text-xs text-northstar-muted mt-1">{trial.condition} • {trial.nctId}</p>
                        </div>
                        <span className="text-xs font-semibold text-northstar-red uppercase tracking-wider shrink-0 ml-4">
                          Protocol Info →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Locations Matches */}
              {searchResults.locations.length > 0 && (
                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-northstar-red" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-northstar-charcoal">
                      Campuses & Facilities ({searchResults.locations.length})
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {searchResults.locations.map((loc) => (
                      <Link
                        key={loc.id}
                        href="/contact"
                        onClick={onClose}
                        className="p-3 border border-northstar-border hover:border-northstar-red bg-white flex items-center justify-between block transition-colors"
                      >
                        <div>
                          <p className="font-semibold text-sm text-northstar-charcoal">{loc.name}</p>
                          <p className="text-xs text-northstar-muted">{loc.address}, {loc.city}</p>
                        </div>
                        <span className="text-xs font-semibold text-northstar-red uppercase tracking-wider">
                          Directions →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="py-12 text-center text-northstar-muted">
              <p className="text-sm">No matches found for &ldquo;{query}&rdquo;.</p>
              <p className="text-xs mt-1">Try searching by clinical condition, physician surname, or campus name.</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-northstar-bg-subtle border-t border-northstar-border flex items-center justify-between text-xs text-northstar-muted">
          <span>Need immediate assistance? Call <strong>(310) 855-5000</strong></span>
          <span className="hidden sm:inline">Press <kbd className="px-1.5 py-0.5 bg-white border border-northstar-border font-mono text-[10px]">ESC</kbd> to exit</span>
        </div>
      </div>
    </div>
  );
}
