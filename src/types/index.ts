export interface Doctor {
  id: string;
  name: string;
  credentials: string; // e.g. "MD, PhD, FACS"
  title: string; // e.g. "Director, Smidt Heart Institute equivalent / Chief of Cardiac Surgery"
  department: string;
  specialty: string; // e.g. "Cardiovascular Surgery", "Surgical Oncology", "Neurosurgery"
  subspecialties: string[];
  campus: string; // e.g. "Beverly Grove (Main Campus)", "Santa Monica", "Pasadena"
  address: string;
  phone: string;
  image: string;
  bio: string;
  education: {
    medicalSchool: string;
    residency: string;
    fellowship: string;
  };
  boardCertifications: string[];
  languages: string[];
  acceptingNewPatients: boolean;
  rating: number;
  reviewCount: number;
  clinicalInterests: string[];
  nihFunding?: string;
  publicationsCount?: number;
}

export interface ClinicalService {
  id: string;
  slug: string;
  name: string;
  institute: string;
  descriptor: string;
  overview: string;
  rankingBadge?: string; // e.g. "#1 in California for Cardiology & Heart Surgery"
  conditions: string[];
  treatments: string[];
  keyOutcomes: {
    metric: string;
    description: string;
  }[];
  clinicalLeaders: {
    name: string;
    role: string;
  }[];
  phone: string;
  location: string;
  heroImage: string;
  featuredStory?: {
    headline: string;
    snippet: string;
    patientName: string;
  };
}

export interface ClinicalTrial {
  id: string;
  nctId: string; // e.g. "NCT05492104"
  title: string;
  phase: "Phase I" | "Phase II" | "Phase III" | "Phase IV" | "Observational";
  status: "Recruiting" | "Active, Not Recruiting" | "Enrolling by Invitation";
  condition: string;
  department: string;
  principalInvestigator: string;
  summary: string;
  eligibility: string[];
  campus: string;
  contactEmail: string;
  startDate: string;
}

export interface MedicalLocation {
  id: string;
  name: string;
  type: "Flagship Medical Center" | "Specialty Pavilion" | "Urgent Care & Outpatient" | "Diagnostic Imaging";
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  urgentCare: boolean;
  emergencyRoom: boolean;
  valetParking: boolean;
  currentWaitTimeMinutes?: number;
  image: string;
  highlights: string[];
}

export interface EditorialArticle {
  id: string;
  slug: string;
  title: string;
  category: "Clinical Breakthrough" | "Patient Story" | "Faculty Research" | "Community Health";
  readTime: string;
  date: string;
  author: string;
  heroImage: string;
  summary: string;
  pullQuote?: {
    text: string;
    attribution: string;
  };
  contentParagraphs: string[];
}

export interface AppointmentRequest {
  id?: string;
  patientFirstName: string;
  patientLastName: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  preferredCampus: string;
  specialty: string;
  preferredDoctorId?: string;
  reasonForVisit: string;
  insuranceProvider: string;
  isExistingPatient: boolean;
  preferredTimeframe: "Morning" | "Afternoon" | "First Available";
  status?: "pending" | "confirmed" | "requires_triage";
  confirmationCode?: string;
}
