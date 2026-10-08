import { Doctor } from "@/types";
import { mockDoctors } from "@/data/mockDoctors";

export interface DoctorFilterParams {
  query?: string;
  specialty?: string;
  campus?: string;
  acceptingNewPatientsOnly?: boolean;
  language?: string;
}

export const doctorService = {
  async getDoctors(params?: DoctorFilterParams): Promise<Doctor[]> {
    // Simulates an async database query (e.g. Supabase / Postgres)
    let results = [...mockDoctors];

    if (!params) return results;

    const { query, specialty, campus, acceptingNewPatientsOnly, language } = params;

    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      results = results.filter(
        (doc) =>
          doc.name.toLowerCase().includes(q) ||
          doc.specialty.toLowerCase().includes(q) ||
          doc.department.toLowerCase().includes(q) ||
          doc.subspecialties.some((sub) => sub.toLowerCase().includes(q)) ||
          doc.clinicalInterests.some((ci) => ci.toLowerCase().includes(q))
      );
    }

    if (specialty && specialty !== "All Specialties") {
      results = results.filter(
        (doc) => doc.specialty.toLowerCase() === specialty.toLowerCase() || doc.department.toLowerCase().includes(specialty.toLowerCase())
      );
    }

    if (campus && campus !== "All Campuses") {
      results = results.filter((doc) => doc.campus.toLowerCase().includes(campus.toLowerCase()));
    }

    if (acceptingNewPatientsOnly) {
      results = results.filter((doc) => doc.acceptingNewPatients);
    }

    if (language && language !== "All Languages") {
      results = results.filter((doc) => doc.languages.includes(language));
    }

    return results;
  },

  async getDoctorById(id: string): Promise<Doctor | null> {
    const doc = mockDoctors.find((d) => d.id === id);
    return doc || null;
  },

  async getSpecialties(): Promise<string[]> {
    const specialties = new Set<string>();
    mockDoctors.forEach((d) => specialties.add(d.specialty));
    return Array.from(specialties).sort();
  },

  async getCampuses(): Promise<string[]> {
    const campuses = new Set<string>();
    mockDoctors.forEach((d) => campuses.add(d.campus));
    return Array.from(campuses).sort();
  },

  async getLanguages(): Promise<string[]> {
    const languages = new Set<string>();
    mockDoctors.forEach((d) => d.languages.forEach((lang) => languages.add(lang)));
    return Array.from(languages).sort();
  },
};
