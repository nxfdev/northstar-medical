"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Calendar, User, ShieldCheck, MapPin, AlertCircle, ArrowRight } from "lucide-react";
import { appointmentService } from "@/services/appointmentService";
import { mockDoctors } from "@/data/mockDoctors";
import { mockLocations } from "@/data/mockLocations";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctorId?: string;
  preselectedSpecialty?: string;
}

export function AppointmentModal({
  isOpen,
  onClose,
  preselectedDoctorId,
  preselectedSpecialty,
}: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    patientFirstName: "",
    patientLastName: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    preferredCampus: "Beverly Grove (Main Campus)",
    specialty: preselectedSpecialty || "Cardiovascular Care",
    preferredDoctorId: preselectedDoctorId || "",
    reasonForVisit: "",
    insuranceProvider: "Anthem Blue Cross",
    isExistingPatient: false,
    preferredTimeframe: "First Available" as "Morning" | "Afternoon" | "First Available",
  });

  useEffect(() => {
    if (preselectedDoctorId) {
      setFormData((prev) => ({ ...prev, preferredDoctorId: preselectedDoctorId }));
      const doc = mockDoctors.find((d) => d.id === preselectedDoctorId);
      if (doc) {
        setFormData((prev) => ({ ...prev, specialty: doc.specialty, preferredCampus: doc.campus }));
      }
    }
    if (preselectedSpecialty) {
      setFormData((prev) => ({ ...prev, specialty: preselectedSpecialty }));
    }
  }, [preselectedDoctorId, preselectedSpecialty]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setStep(1);
      setConfirmationCode(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await appointmentService.submitAppointmentRequest(formData);
      setConfirmationCode(res.confirmationCode);
      setStep(4);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-northstar-charcoal/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white border border-northstar-border shadow-2xl overflow-hidden flex flex-col text-northstar-charcoal max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-northstar-charcoal text-white flex items-center justify-between border-b border-northstar-charcoal">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-northstar-red animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">
                Patient Intake & Scheduling
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif mt-1">Request an Appointment</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="grid grid-cols-3 border-b border-northstar-border text-xs bg-northstar-bg-subtle">
            <div
              className={`p-3 font-semibold text-center border-r border-northstar-border ${
                step === 1 ? "bg-white text-northstar-red border-b-2 border-b-northstar-red" : "text-northstar-muted"
              }`}
            >
              1. Clinical Reason
            </div>
            <div
              className={`p-3 font-semibold text-center border-r border-northstar-border ${
                step === 2 ? "bg-white text-northstar-red border-b-2 border-b-northstar-red" : "text-northstar-muted"
              }`}
            >
              2. Location & Date
            </div>
            <div
              className={`p-3 font-semibold text-center ${
                step === 3 ? "bg-white text-northstar-red border-b-2 border-b-northstar-red" : "text-northstar-muted"
              }`}
            >
              3. Patient Details
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-2">
                  Specialty or Clinical Program
                </label>
                <select
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full p-3 border border-northstar-border bg-white text-sm focus:border-northstar-red focus:outline-none"
                >
                  <option value="Cardiovascular Care">Heart & Vascular Institute</option>
                  <option value="Surgical Oncology">Comprehensive Cancer Center (Surgical Oncology)</option>
                  <option value="Hematology & Medical Oncology">Medical Oncology & Cellular Therapy</option>
                  <option value="Neurosurgery">Neurological Sciences & Brain Spine</option>
                  <option value="Orthopedic Surgery">Orthopedic Surgery & Sports Medicine</option>
                  <option value="Gastroenterology">Digestive Diseases & Liver Center</option>
                  <option value="Obstetrics & Gynecology">Women’s & Infants’ Center</option>
                  <option value="Primary Care & Preventive Health">Primary Care & Executive Health</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-2">
                  Specific Physician (Optional)
                </label>
                <select
                  value={formData.preferredDoctorId}
                  onChange={(e) => setFormData({ ...formData, preferredDoctorId: e.target.value })}
                  className="w-full p-3 border border-northstar-border bg-white text-sm focus:border-northstar-red focus:outline-none"
                >
                  <option value="">No preference / Next available specialist</option>
                  {mockDoctors.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name}, {doc.credentials} — {doc.specialty}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-2">
                  Primary Symptoms or Clinical Reason
                </label>
                <textarea
                  rows={3}
                  value={formData.reasonForVisit}
                  onChange={(e) => setFormData({ ...formData, reasonForVisit: e.target.value })}
                  placeholder="Briefly describe your symptoms, recent diagnosis, or referral notes from your primary physician..."
                  className="w-full p-3 border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="existingPatient"
                  checked={formData.isExistingPatient}
                  onChange={(e) => setFormData({ ...formData, isExistingPatient: e.target.checked })}
                  className="w-4 h-4 text-northstar-red border-northstar-border rounded-none focus:ring-0"
                />
                <label htmlFor="existingPatient" className="text-xs text-northstar-slate font-medium cursor-pointer">
                  I have previously received care or have an active medical record at Northstar Medical Center
                </label>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 bg-northstar-charcoal hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  Continue to Location & Timing <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-2">
                  Preferred Northstar Campus
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mockLocations.map((loc) => (
                    <label
                      key={loc.id}
                      className={`p-3 border cursor-pointer transition-all flex flex-col justify-between ${
                        formData.preferredCampus === loc.name
                          ? "border-northstar-red bg-northstar-red-subtle/40"
                          : "border-northstar-border hover:border-northstar-muted bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs font-bold text-northstar-charcoal">{loc.name}</p>
                          <p className="text-[11px] text-northstar-muted mt-0.5">{loc.city}, {loc.state}</p>
                        </div>
                        <input
                          type="radio"
                          name="campus"
                          checked={formData.preferredCampus === loc.name}
                          onChange={() => setFormData({ ...formData, preferredCampus: loc.name })}
                          className="mt-1 text-northstar-red"
                        />
                      </div>
                      <span className="text-[10px] text-northstar-muted uppercase tracking-wider mt-2">
                        {loc.type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-2">
                  Preferred Time of Day
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(["First Available", "Morning", "Afternoon"] as const).map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredTimeframe: time })}
                      className={`p-2.5 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                        formData.preferredTimeframe === time
                          ? "border-northstar-red bg-northstar-red text-white"
                          : "border-northstar-border bg-white text-northstar-slate hover:border-northstar-muted"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 border border-northstar-border text-xs font-semibold uppercase tracking-wider text-northstar-slate hover:bg-northstar-bg-subtle"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 bg-northstar-charcoal hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  Continue to Patient Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.patientFirstName}
                    onChange={(e) => setFormData({ ...formData, patientFirstName: e.target.value })}
                    className="w-full p-2.5 border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.patientLastName}
                    onChange={(e) => setFormData({ ...formData, patientLastName: e.target.value })}
                    className="w-full p-2.5 border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full p-2.5 border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                    Primary Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(310) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="patient@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                  Insurance Provider
                </label>
                <select
                  value={formData.insuranceProvider}
                  onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                  className="w-full p-2.5 border border-northstar-border bg-white text-sm focus:border-northstar-red focus:outline-none"
                >
                  <option value="Anthem Blue Cross">Anthem Blue Cross (PPO / Covered CA)</option>
                  <option value="Blue Shield of California">Blue Shield of California</option>
                  <option value="Medicare Part B / Supplement">Medicare (Traditional & Supplements)</option>
                  <option value="UnitedHealthcare">UnitedHealthcare (Choice Plus / PPO)</option>
                  <option value="Aetna">Aetna</option>
                  <option value="Cigna Healthcare">Cigna Healthcare</option>
                  <option value="Self-Pay / Private Concierge">Self-Pay / International Concierge</option>
                </select>
              </div>

              <div className="p-3 bg-northstar-bg-subtle border border-northstar-border text-xs text-northstar-muted flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-northstar-slate shrink-0 mt-0.5" />
                <span>
                  <strong>HIPAA Secured:</strong> All clinical and biographical information is transmitted encrypted according to California Health & Safety standards.
                </span>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 border border-northstar-border text-xs font-semibold uppercase tracking-wider text-northstar-slate hover:bg-northstar-bg-subtle"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-northstar-red hover:bg-northstar-red-hover text-white text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Registering Request..." : "Submit Clinical Appointment Request"}
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-green-50 text-green-700 rounded-full flex items-center justify-center mx-auto border border-green-200">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-serif text-northstar-charcoal">
                Appointment Request Confirmed
              </h3>
              <p className="text-sm text-northstar-muted max-w-md mx-auto">
                Your request has been securely registered with Northstar Central Scheduling. A clinical coordinator will reach out to you within one business day to finalize appointment time and pre-visit lab orders.
              </p>
              <div className="p-4 bg-northstar-bg-subtle border border-northstar-border inline-block text-left my-2">
                <p className="text-[11px] font-bold uppercase tracking-widest text-northstar-muted">
                  Confirmation Tracking ID
                </p>
                <p className="text-xl font-mono font-bold text-northstar-charcoal tracking-wider mt-0.5">
                  {confirmationCode}
                </p>
                <div className="text-xs text-northstar-slate mt-2 space-y-1">
                  <p><strong>Patient:</strong> {formData.patientFirstName} {formData.patientLastName}</p>
                  <p><strong>Department:</strong> {formData.specialty}</p>
                  <p><strong>Campus:</strong> {formData.preferredCampus}</p>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-8 py-2.5 bg-northstar-charcoal hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Done & Return to Site
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
