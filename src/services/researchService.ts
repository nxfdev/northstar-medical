import { ClinicalTrial } from "@/types";
import { mockClinicalTrials, mockResearchHighlights } from "@/data/mockResearch";

export interface TrialFilterParams {
  query?: string;
  phase?: string;
  status?: string;
  department?: string;
}

export const researchService = {
  async getClinicalTrials(params?: TrialFilterParams): Promise<ClinicalTrial[]> {
    let results = [...mockClinicalTrials];
    if (!params) return results;

    const { query, phase, status, department } = params;

    if (query && query.trim()) {
      const q = query.toLowerCase().trim();
      results = results.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.condition.toLowerCase().includes(q) ||
          t.summary.toLowerCase().includes(q) ||
          t.nctId.toLowerCase().includes(q) ||
          t.principalInvestigator.toLowerCase().includes(q)
      );
    }

    if (phase && phase !== "All Phases") {
      results = results.filter((t) => t.phase === phase);
    }

    if (status && status !== "All Statuses") {
      results = results.filter((t) => t.status === status);
    }

    if (department && department !== "All Departments") {
      results = results.filter((t) => t.department.toLowerCase().includes(department.toLowerCase()));
    }

    return results;
  },

  async getHighlights() {
    return mockResearchHighlights;
  },
};
