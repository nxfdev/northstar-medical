import { ClinicalService } from "@/types";
import { mockServices } from "@/data/mockServices";

export const serviceService = {
  async getServices(): Promise<ClinicalService[]> {
    return [...mockServices];
  },

  async getServiceBySlug(slug: string): Promise<ClinicalService | null> {
    const service = mockServices.find((s) => s.slug === slug);
    return service || null;
  },

  async getServiceById(id: string): Promise<ClinicalService | null> {
    const service = mockServices.find((s) => s.id === id);
    return service || null;
  },
};
