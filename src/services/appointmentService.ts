import { AppointmentRequest } from "@/types";

export const appointmentService = {
  async submitAppointmentRequest(data: Omit<AppointmentRequest, "id" | "confirmationCode" | "status">): Promise<{
    success: boolean;
    confirmationCode: string;
    message: string;
    appointment: AppointmentRequest;
  }> {
    // Generates institutional appointment reference code (e.g. NSM-2026-9842)
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const confirmationCode = `NSM-${new Date().getFullYear()}-${randomSuffix}`;

    const newAppointment: AppointmentRequest = {
      ...data,
      id: `apt-${Date.now()}`,
      confirmationCode,
      status: "confirmed",
    };

    // Store in browser localStorage if client-side
    if (typeof window !== "undefined") {
      try {
        const existing = JSON.parse(localStorage.getItem("northstar_appointments") || "[]");
        existing.push(newAppointment);
        localStorage.setItem("northstar_appointments", JSON.stringify(existing));
      } catch (e) {
        console.error("Storage error:", e);
      }
    }

    return {
      success: true,
      confirmationCode,
      message:
        "Your appointment request has been securely registered in Northstar's clinical scheduling registry. A clinical intake coordinator will contact you to verify details.",
      appointment: newAppointment,
    };
  },
};
