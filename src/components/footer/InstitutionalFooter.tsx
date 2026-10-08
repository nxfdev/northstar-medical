"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export function InstitutionalFooter() {
  return (
    <footer className="w-full bg-northstar-charcoal text-white border-t border-gray-800">
      {/* Emergency Assistance Line (Quiet & Clear) */}
      <div className="w-full bg-northstar-red text-white py-3.5 px-6 sm:px-10 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <span>
            <strong>Emergency Care:</strong> For life-threatening emergencies, dial <strong>911</strong> immediately. Our Level I Adult Trauma Center is open 24 hours at 8500 Wilshire Boulevard.
          </span>
          <Link
            href="/contact#emergency"
            className="uppercase tracking-widest text-[11px] font-semibold underline underline-offset-4 hover:text-gray-200 shrink-0"
          >
            Emergency Department Info →
          </Link>
        </div>
      </div>

      {/* Main Directory */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                NORTHSTAR MEDICAL
              </h3>
              <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium mt-1">
                Northstar Medical Center • Los Angeles, California
              </p>
            </div>

            <p className="text-xs text-gray-300 font-light leading-relaxed max-w-sm">
              A nonprofit academic health system pioneering research and specialty care across Southern California.
            </p>

            <div className="space-y-2 text-xs text-gray-300 pt-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-northstar-red shrink-0 mt-0.5" />
                <span>8500 Wilshire Boulevard, Los Angeles, CA 90048</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-northstar-red shrink-0" />
                <span>General Information: <strong>(310) 855-5000</strong></span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-400">
                Patient Care
              </h4>
              <ul className="space-y-2.5 text-gray-300">
                <li>
                  <Link href="/doctors" className="hover:text-white transition-colors">
                    Find a Doctor
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Clinical Specialties
                  </Link>
                </li>
                <li>
                  <Link href="/contact#urgent-care" className="hover:text-white transition-colors">
                    Urgent Care Wait Times
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Campuses &amp; Directions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-400">
                Research
              </h4>
              <ul className="space-y-2.5 text-gray-300">
                <li>
                  <Link href="/research" className="hover:text-white transition-colors">
                    Research Institute
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="hover:text-white transition-colors">
                    Clinical Trials
                  </Link>
                </li>
                <li>
                  <Link href="/research#academics" className="hover:text-white transition-colors">
                    Graduate Medical Education
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-400">
                About Northstar
              </h4>
              <ul className="space-y-2.5 text-gray-300">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Leadership &amp; Governance
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Referring Physicians
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Notice */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <p>© 2026 Northstar Medical Center. A California 501(c)(3) Nonprofit Institution.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300">Privacy Notice (HIPAA)</a>
            <a href="#" className="hover:text-gray-300">Non-Discrimination</a>
            <a href="#" className="hover:text-gray-300">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
