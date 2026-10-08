import { MedicalLocation } from "@/types";
import { mockLocations } from "@/data/mockLocations";

export const locationService = {
  async getLocations(filterType?: string): Promise<MedicalLocation[]> {
    let results = [...mockLocations];
    if (filterType && filterType !== "All Types") {
      results = results.filter((loc) => loc.type === filterType);
    }
    return results;
  },

  async getLocationById(id: string): Promise<MedicalLocation | null> {
    const loc = mockLocations.find((l) => l.id === id);
    return loc || null;
  },

  async getUrgentCareCenters(): Promise<MedicalLocation[]> {
    return mockLocations.filter((loc) => loc.urgentCare);
  },
};
