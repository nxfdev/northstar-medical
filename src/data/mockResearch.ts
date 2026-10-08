import { ClinicalTrial } from "@/types";

export const mockClinicalTrials: ClinicalTrial[] = [
  {
    id: "trial-car-t-glio",
    nctId: "NCT05849201",
    title: "Phase II Multi-Targeted CAR-T Cell Infusion in Recurrent Glioblastoma Multiforme",
    phase: "Phase II",
    status: "Recruiting",
    condition: "Glioblastoma Multiforme (GBM)",
    department: "Comprehensive Cancer Center / Neurosciences",
    principalInvestigator: "Dr. Tariq Mansoor, MD, PhD & Dr. Sarah Lin Chen, MD",
    summary:
      "Evaluating intracavitary delivery of bispecific EGFRvIII and IL13Ralpha2-targeted chimeric antigen receptor T cells in patients with histologically confirmed recurrent supratentorial glioblastoma.",
    eligibility: [
      "Age 18 to 75 years",
      "Histologically documented recurrent WHO Grade 4 Glioblastoma",
      "KPS score >= 70%",
      "Adequate bone marrow, renal, and hepatic function",
    ],
    campus: "Beverly Grove (Main Campus)",
    contactEmail: "neuro-trials@northstarmedical.org",
    startDate: "2025-04-15",
  },
  {
    id: "trial-tavr-asymp",
    nctId: "NCT06102944",
    title: "Early Intervention Transcatheter Aortic Valve Replacement in Asymptomatic Severe Aortic Stenosis (EVOLVE-AS)",
    phase: "Phase III",
    status: "Recruiting",
    condition: "Severe Aortic Stenosis (Asymptomatic)",
    department: "Heart & Vascular Institute",
    principalInvestigator: "Dr. Marcus Thorne, MD, FACC",
    summary:
      "A randomized trial comparing upfront transfemoral TAVR versus watchful clinical surveillance in patients with asymptomatic severe aortic stenosis and preserved left ventricular ejection fraction.",
    eligibility: [
      "Age >= 65 years",
      "Aortic valve area <= 1.0 cm² or mean gradient >= 40 mmHg",
      "LVEF >= 50% with absence of symptoms on treadmill stress test",
      "Anatomically eligible for transfemoral TAVR",
    ],
    campus: "Beverly Grove (Main Campus)",
    contactEmail: "cardiac-research@northstarmedical.org",
    startDate: "2025-01-10",
  },
  {
    id: "trial-genomic-panc",
    nctId: "NCT05928103",
    title: "Circulating Tumor DNA-Guided Neoadjuvant Immunochemotherapy in Resectable Pancreatic Adenocarcinoma",
    phase: "Phase II",
    status: "Recruiting",
    condition: "Pancreatic Ductal Adenocarcinoma (PDAC)",
    department: "Comprehensive Cancer Center",
    principalInvestigator: "Dr. Elena Vance, MD, PhD, FACS",
    summary:
      "Investigating ultra-deep cell-free DNA sequencing to tailor neoadjuvant triplet chemotherapy combined with checkpoint inhibition prior to robotic pancreaticoduodenectomy.",
    eligibility: [
      "Biopsy-proven resectable or borderline resectable pancreatic adenocarcinoma",
      "Measurable disease by RECIST 1.1",
      "ECOG performance status 0 or 1",
    ],
    campus: "Beverly Grove (Main Campus)",
    contactEmail: "oncology-trials@northstarmedical.org",
    startDate: "2024-11-01",
  },
  {
    id: "trial-mri-fus-tremor",
    nctId: "NCT06230491",
    title: "Bilateral MR-Guided Focused Ultrasound Thalamotomy for Medically Refractory Essential Tremor",
    phase: "Phase IV",
    status: "Active, Not Recruiting",
    condition: "Essential Tremor",
    department: "Neurological Sciences",
    principalInvestigator: "Dr. Sarah Lin Chen, MD, FAANS",
    summary:
      "Long-term registry analyzing safety, durability of tremor reduction, and quality-of-life outcomes following staged bilateral non-invasive acoustic thalamotomy.",
    eligibility: [
      "Refractory essential tremor despite trials of >= 2 standard medications",
      "Tremor severity score indicating substantial functional limitation",
    ],
    campus: "Beverly Grove (Main Campus)",
    contactEmail: "neuro-trials@northstarmedical.org",
    startDate: "2024-06-20",
  },
  {
    id: "trial-microvascular-women",
    nctId: "NCT05719022",
    title: "Novel Endothelin Receptor Antagonist in Coronary Microvascular Dysfunction Among Women (LADY-CMD)",
    phase: "Phase II",
    status: "Recruiting",
    condition: "Ischemia with Non-Obstructive Coronary Arteries (INOCA)",
    department: "Heart & Vascular Institute",
    principalInvestigator: "Dr. Amara Okafor, MD, MS",
    summary:
      "Assessing myocardial blood flow reserve measured by cardiac PET before and after 16 weeks of selective endothelin-A receptor blockade in symptomatic women.",
    eligibility: [
      "Female patients aged 21 to 80 with persistent angina",
      "Coronary angiography demonstrating < 50% stenosis in epicardial vessels",
      "Abnormal coronary flow reserve (< 2.5) on invasive reactivity testing",
    ],
    campus: "Beverly Grove (Main Campus)",
    contactEmail: "womensheart-research@northstarmedical.org",
    startDate: "2025-02-01",
  },
];

export const mockResearchHighlights = [
  {
    metric: "$245M+",
    label: "Annual Research Funding",
    subtext: "NIH grants, peer-reviewed clinical endowments, and translational gifts",
  },
  {
    metric: "320+",
    label: "Active Clinical Trials",
    subtext: "Providing patients early access to next-generation life-saving therapeutics",
  },
  {
    metric: "1,450+",
    label: "Peer-Reviewed Studies",
    subtext: "Published in NEJM, The Lancet, JAMA, and Nature Medicine this past year",
  },
  {
    metric: "48",
    label: "Patents & Discoveries",
    subtext: "Translating laboratory bench breakthroughs directly into bedside patient cures",
  },
];
