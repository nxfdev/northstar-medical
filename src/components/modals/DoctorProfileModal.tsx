"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Calendar, Phone, Award, GraduationCap, Globe, BookOpen, CheckCircle, MapPin } from "lucide-react";
import { Doctor } from "@/types";

interface DoctorProfileModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onRequestAppointment: (doctorId: string) => void;
}

export function DoctorProfileModal({ doctor, onClose, onRequestAppointment }: DoctorProfileModalProps) {
  useEffect(() => {
    if (doctor) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [doctor]);

  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-northstar-charcoal/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl bg-white border border-northstar-border shadow-2xl overflow-hidden flex flex-col text-northstar-charcoal max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 bg-northstar-bg-subtle border-b border-northstar-border flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-northstar-muted">
            Physician Clinical Dossier • Faculty Profile
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-northstar-muted hover:text-northstar-charcoal border border-northstar-border hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Top Bio Header */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative w-32 h-40 sm:w-40 sm:h-48 shrink-0 bg-northstar-bg-subtle border border-northstar-border overflow-hidden">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-northstar-red bg-northstar-red-subtle px-2 py-0.5 border border-red-100">
                  {doctor.department}
                </span>
                {doctor.acceptingNewPatients && (
                  <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Accepting New Patients
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-northstar-charcoal">
                {doctor.name}, {doctor.credentials}
              </h2>
              <p className="text-sm font-medium text-northstar-slate">{doctor.title}</p>
              <div className="flex items-center gap-2 text-xs text-northstar-muted pt-1">
                <MapPin className="w-3.5 h-3.5 text-northstar-red" />
                <span>{doctor.campus}</span>
              </div>
              <p className="text-xs text-northstar-muted">{doctor.address}</p>

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onRequestAppointment(doctor.id);
                  }}
                  className="px-5 py-2.5 bg-northstar-red hover:bg-northstar-red-hover text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Request Appointment with {doctor.name.split(" ")[1]}
                </button>
                <a
                  href={`tel:${doctor.phone.replace(/[^0-9]/g, "")}`}
                  className="px-4 py-2.5 border border-northstar-border hover:border-northstar-charcoal text-xs font-semibold uppercase tracking-wider text-northstar-slate transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> {doctor.phone}
                </a>
              </div>
            </div>
          </div>

          <hr className="border-northstar-border" />

          {/* Clinical Bio */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-northstar-slate mb-2">
              Clinical Overview & Practice Philosophy
            </h3>
            <p className="text-sm leading-relaxed text-northstar-charcoal">
              {doctor.bio}
            </p>
          </div>

          {/* Clinical Interests */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-northstar-slate mb-2">
              Areas of Special Focus & Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {doctor.clinicalInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-northstar-bg-subtle text-xs text-northstar-slate border border-northstar-border font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-northstar-bg-subtle p-5 border border-northstar-border">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-northstar-charcoal">
                <GraduationCap className="w-4 h-4 text-northstar-red" />
                <h4 className="text-xs font-bold uppercase tracking-wider">Education & Training</h4>
              </div>
              <div className="text-xs space-y-2 text-northstar-slate">
                <div>
                  <span className="font-semibold block text-northstar-charcoal">Medical School:</span>
                  {doctor.education.medicalSchool}
                </div>
                <div>
                  <span className="font-semibold block text-northstar-charcoal">Residency:</span>
                  {doctor.education.residency}
                </div>
                <div>
                  <span className="font-semibold block text-northstar-charcoal">Fellowship:</span>
                  {doctor.education.fellowship}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-northstar-charcoal">
                <Award className="w-4 h-4 text-northstar-red" />
                <h4 className="text-xs font-bold uppercase tracking-wider">Board Certifications</h4>
              </div>
              <ul className="text-xs space-y-1 text-northstar-slate list-disc list-inside">
                {doctor.boardCertifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>

              <div className="pt-2">
                <div className="flex items-center gap-2 text-northstar-charcoal">
                  <Globe className="w-4 h-4 text-northstar-red" />
                  <h4 className="text-xs font-bold uppercase tracking-wider">Languages Spoken</h4>
                </div>
                <p className="text-xs text-northstar-slate mt-1">
                  {doctor.languages.join(", ")}
                </p>
              </div>
            </div>
          </div>

          {/* Academic & Research Credentials */}
          {(doctor.nihFunding || doctor.publicationsCount) && (
            <div className="p-4 border border-northstar-border bg-white flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-northstar-red" />
                <span className="font-semibold text-northstar-charcoal">Academic Output:</span>
                <span className="text-northstar-muted">
                  {doctor.publicationsCount} Peer-Reviewed Articles in Index Medicus
                </span>
              </div>
              {doctor.nihFunding && (
                <span className="text-northstar-slate font-medium bg-northstar-bg-subtle px-2 py-1 border border-northstar-border">
                  {doctor.nihFunding}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
