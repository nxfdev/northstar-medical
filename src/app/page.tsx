"use client";

import React, { useState } from "react";
import { InstitutionalHeader } from "@/components/header/InstitutionalHeader";
import { EditorialHero } from "@/components/home/EditorialHero";
import { CareDiscoveryBar } from "@/components/care-discovery/CareDiscoveryBar";
import { DarkEditorialStatement } from "@/components/home/DarkEditorialStatement";
import { FlagshipInstitutesSection } from "@/components/home/FlagshipInstitutesSection";
import { HumanCenteredStory } from "@/components/home/HumanCenteredStory";
import { BreakthroughResearchSection } from "@/components/home/BreakthroughResearchSection";
import { CampusNetworkSection } from "@/components/home/CampusNetworkSection";
import { InstitutionalFooter } from "@/components/footer/InstitutionalFooter";
import { AppointmentModal } from "@/components/modals/AppointmentModal";

export default function HomePage() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Architectural Tiered Header */}
      <InstitutionalHeader />

      <main className="flex-1">
        {/* 1. Cinematic Editorial Hero */}
        <EditorialHero onRequestAppointment={() => setIsAppointmentOpen(true)} />

        {/* 2. Spacious, Minimal Care Discovery */}
        <CareDiscoveryBar />

        {/* 3. High-Contrast Dark Institutional Statement */}
        <DarkEditorialStatement />

        {/* 4. Major Clinical Institutes (Two Wide Geometric Panels) */}
        <FlagshipInstitutesSection />

        {/* 5. Human-Centered Editorial Feature (Elena Vance Narrative) */}
        <HumanCenteredStory />

        {/* 6. Panoramic Clinical Innovation & Research */}
        <BreakthroughResearchSection />

        {/* 7. Greater Los Angeles Campus Presence */}
        <CampusNetworkSection />
      </main>

      {/* Quiet, Architectural Institutional Footer */}
      <InstitutionalFooter />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </div>
  );
}
