"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Car,
  AlertCircle,
  Mail,
  Send,
  CheckCircle2,
  Shield,
  ArrowRight,
} from "lucide-react";
import { InstitutionalHeader } from "@/components/header/InstitutionalHeader";
import { InstitutionalFooter } from "@/components/footer/InstitutionalFooter";
import { mockLocations } from "@/data/mockLocations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "General Patient Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <InstitutionalHeader />

      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-northstar-bg-subtle border-b border-northstar-border py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-northstar-red block mb-1">
              Campus Locations &amp; Institutional Directory
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-northstar-charcoal tracking-tight">
              Campuses, Directions &amp; Contact
            </h1>
            <p className="text-sm sm:text-base text-northstar-slate mt-2 max-w-3xl font-light">
              Connect with Northstar Medical Center&apos;s main hospital pavilions, regional outpatient facilities, and department helplines across Southern California.
            </p>
          </div>
        </div>

        {/* Emergency Alert Banner */}
        <div id="emergency" className="border-b border-northstar-border bg-red-50/60 py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-northstar-charcoal">
            <div className="flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 text-northstar-red shrink-0" />
              <span>
                <strong>Experiencing a life-threatening medical emergency?</strong> Dial <strong>911</strong> immediately. Our Level I Adult Trauma Center is open 24/7 at 8500 Wilshire Boulevard.
              </span>
            </div>
            <a
              href="tel:911"
              className="px-4 py-1.5 bg-northstar-red text-white font-bold uppercase tracking-wider text-[11px] shrink-0 hover:bg-northstar-red-hover transition-colors"
            >
              Call 911
            </a>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          {/* Section 1: Department Key Phone Directory */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-northstar-slate mb-4">
              Institutional Department Helplines
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Main Hospital Switchboard", phone: "(310) 855-5000", hours: "24/7 Operator Assistance" },
                { title: "Central Patient Appointments", phone: "(800) NORTHSTAR", hours: "Mon–Fri: 7:00 AM – 7:00 PM" },
                { title: "Billing & Financial Counseling", phone: "(800) 855-4422", hours: "Mon–Fri: 8:00 AM – 5:00 PM" },
                { title: "Physician Transfer Center", phone: "(855) NSM-BEDS", hours: "24/7 Acute Clinical Transfers" },
                { title: "Health Information & Records (HIM)", phone: "(310) 855-5300", hours: "Mon–Fri: 8:00 AM – 4:30 PM" },
                { title: "Patient Relations & Ombuds", phone: "(310) 855-5120", hours: "Mon–Fri: 8:30 AM – 5:00 PM" },
                { title: "Clinical Research Coordination", phone: "(310) 855-7100", hours: "Mon–Fri: 8:00 AM – 5:00 PM" },
                { title: "Media Relations & Press Office", phone: "(310) 855-5900", hours: "Press & Faculty Spokespersons" },
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-northstar-bg-subtle border border-northstar-border space-y-1">
                  <h3 className="text-xs font-bold text-northstar-charcoal">{item.title}</h3>
                  <a
                    href={`tel:${item.phone.replace(/[^0-9]/g, "")}`}
                    className="text-sm font-semibold text-northstar-red hover:underline block"
                  >
                    {item.phone}
                  </a>
                  <p className="text-[11px] text-northstar-muted">{item.hours}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Campus Locations Directory */}
          <div id="urgent-care">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-northstar-border pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-northstar-red block mb-1">
                  Regional Care Network
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-northstar-charcoal">
                  Campuses &amp; Outpatient Pavilions
                </h2>
              </div>
              <p className="text-xs text-northstar-muted mt-2 md:mt-0">
                All facilities comply with ADA accessibility standards and offer visitor assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockLocations.map((loc) => (
                <div
                  key={loc.id}
                  className="bg-white border border-northstar-border hover:border-northstar-slate transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-16/10 w-full bg-northstar-bg-subtle border-b border-northstar-border overflow-hidden">
                      <Image
                        src={loc.image}
                        alt={loc.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-northstar-charcoal border border-northstar-border">
                        {loc.type}
                      </div>
                      {loc.urgentCare && (
                        <div className="absolute bottom-3 left-3 bg-emerald-700 text-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                          Urgent Care: {loc.currentWaitTimeMinutes}m Wait
                        </div>
                      )}
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-serif font-bold text-northstar-charcoal">
                        {loc.name}
                      </h3>

                      <div className="space-y-1.5 text-xs text-northstar-slate">
                        <p className="flex items-start gap-2">
                          <MapPin className="w-3.5 h-3.5 text-northstar-red shrink-0 mt-0.5" />
                          <span>{loc.address}, {loc.city}, {loc.state} {loc.zip}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-northstar-red shrink-0" />
                          <span>Direct: <strong>{loc.phone}</strong></span>
                        </p>
                        <p className="flex items-start gap-2">
                          <Clock className="w-3.5 h-3.5 text-northstar-slate shrink-0 mt-0.5" />
                          <span>{loc.hours}</span>
                        </p>
                      </div>

                      <div className="pt-2">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-northstar-muted mb-1">
                          Key Services:
                        </h4>
                        <ul className="text-[11px] text-northstar-slate space-y-0.5 list-disc list-inside">
                          {loc.highlights.slice(0, 3).map((hl, hIdx) => (
                            <li key={hIdx} className="line-clamp-1">{hl}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-northstar-border/60 mt-4 flex items-center justify-between">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        `${loc.name} ${loc.address} ${loc.city} CA`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-northstar-red hover:underline inline-flex items-center gap-1"
                    >
                      <span>Google Map</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>

                    <a
                      href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`}
                      className="text-xs text-northstar-slate hover:text-northstar-charcoal font-semibold"
                    >
                      Call Clinic
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Inquiries Form & Visitor Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-northstar-bg-subtle border border-northstar-border space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-northstar-red block mb-1">
                  General Inquiries
                </span>
                <h3 className="text-2xl font-serif text-northstar-charcoal">
                  Send a Message to Northstar Patient Relations
                </h3>
                <p className="text-xs text-northstar-slate mt-1 font-light">
                  Please do not submit urgent medical inquiries or emergency symptoms via this form. For acute emergencies, call 911 immediately.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-white border border-northstar-border text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-serif font-bold text-northstar-charcoal">
                    Inquiry Transmitted Successfully
                  </h4>
                  <p className="text-xs text-northstar-muted max-w-md mx-auto">
                    Your correspondence has been logged with the appropriate administrative division. A representative will respond within two business days.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", department: "General Patient Inquiry", message: "" });
                    }}
                    className="mt-2 px-5 py-2 bg-northstar-charcoal text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Submit Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2.5 bg-white border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 bg-white border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-2.5 bg-white border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                        Department Category *
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full p-2.5 bg-white border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                      >
                        <option value="General Patient Inquiry">General Patient Relations</option>
                        <option value="Billing & Financial Assistance">Billing & Financial Counseling</option>
                        <option value="Medical Records (HIM)">Medical Records Requests</option>
                        <option value="Clinical Trials Coordination">Clinical Research Coordination</option>
                        <option value="Physician Referrals">Physician Referrals & Transfer</option>
                        <option value="Media & Press Relations">Media & Communications Office</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                      Message / Inquiry Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify how we may assist you..."
                      className="w-full p-2.5 bg-white border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-7 py-3 bg-northstar-red hover:bg-northstar-red-hover text-white text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50 flex items-center gap-2 shadow-2xs"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Visitor Guidelines & Parking */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-white border border-northstar-border space-y-3">
                <Car className="w-5 h-5 text-northstar-red" />
                <h4 className="text-base font-serif font-bold text-northstar-charcoal">
                  Beverly Grove Parking &amp; Valet
                </h4>
                <p className="text-xs text-northstar-slate leading-relaxed font-light">
                  Patient and visitor valet parking is located at 8500 Wilshire Blvd and the San Vicente Pavilion entrance. Self-parking structures are accessible from George Burns Road and Gracie Allen Drive.
                </p>
                <div className="text-xs text-northstar-slate border-t border-northstar-border pt-2 space-y-1">
                  <p><strong>First 15 Minutes:</strong> Complimentary</p>
                  <p><strong>Patient Validation Rate:</strong> $5.00 daily flat rate</p>
                  <p><strong>Valet Service:</strong> Available 24/7 at Main Pavilion</p>
                </div>
              </div>

              <div className="p-6 bg-white border border-northstar-border space-y-3">
                <Shield className="w-5 h-5 text-northstar-red" />
                <h4 className="text-base font-serif font-bold text-northstar-charcoal">
                  Inpatient Visiting Guidelines
                </h4>
                <p className="text-xs text-northstar-slate leading-relaxed font-light">
                  General inpatient visiting hours are 8:00 AM – 8:00 PM daily. Two designated visitors are welcomed at the bedside at a time. Pediatric and Neonatal Intensive Care units allow 24-hour parental presence.
                </p>
                <p className="text-[11px] text-northstar-muted border-t border-northstar-border pt-2">
                  All visitors must present valid government photo identification at security intake desks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <InstitutionalFooter />
    </div>
  );
}
