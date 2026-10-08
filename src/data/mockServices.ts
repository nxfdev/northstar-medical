import { ClinicalService } from "@/types";

export const mockServices: ClinicalService[] = [
  {
    id: "heart-vascular",
    slug: "heart-vascular",
    name: "Heart & Vascular Care",
    institute: "Northstar Heart & Vascular Institute",
    descriptor: "World-Ranked Cardiovascular Excellence & Structural Heart Innovations",
    rankingBadge: "#1 in California for Cardiology & Heart Surgery (Top 3 Nationally)",
    overview:
      "The Northstar Heart & Vascular Institute unites internationally renowned cardiologists, cardiothoracic surgeons, and researchers to provide breakthrough interventions for the most complex cardiac conditions. From pioneer transcatheter aortic and mitral valve replacements to adult congenital heart reconstruction, our multidisciplinary teams deliver clinical outcomes consistently exceeding national benchmark standards.",
    conditions: [
      "Aortic Stenosis & Regurgitation",
      "Mitral & Tricuspid Valve Disease",
      "Coronary Artery Disease & Complex Occlusions",
      "Heart Failure & Cardiomyopathy",
      "Atrial Fibrillation & Complex Arrhythmias",
      "Thoracic Aortic Aneurysms",
      "Hypertrophic Cardiomyopathy (HCM)",
    ],
    treatments: [
      "Transcatheter Aortic Valve Replacement (TAVR)",
      "Transcatheter Edge-to-Edge Repair (TEER / MitraClip)",
      "Minimally Invasive Robotic Coronary Artery Bypass",
      "Leadless Pacemakers & Subcutaneous ICD Implantation",
      "Mechanical Circulatory Support (LVAD / Impella)",
      "Cardiac Resynchronization & Hybrid Maze Surgery",
      "Heart Transplantation & Ventricular Reconstruction",
    ],
    keyOutcomes: [
      {
        metric: "99.4%",
        description: "30-day survival rate for isolated transcatheter valve therapies",
      },
      {
        metric: "2,400+",
        description: "Catheter-based structural interventions performed annually",
      },
      {
        metric: "14 min",
        description: "Average door-to-balloon STEMI revascularization time",
      },
    ],
    clinicalLeaders: [
      {
        name: "Dr. Marcus Thorne",
        role: "Director, Heart & Vascular Institute / Endowed Chair in Interventional Cardiology",
      },
      {
        name: "Dr. Amara Okafor",
        role: "Director, Center for Women's Cardiovascular Health",
      },
    ],
    phone: "(310) 855-4100",
    location: "8700 San Vicente Blvd, Pavilion East, Floors 2-5, Los Angeles, CA 90048",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
    featuredStory: {
      headline: "Back on the Tennis Court at 76: Overcoming Severe Aortic Stenosis Without Open-Heart Surgery",
      snippet:
        "When traditional sternotomy carried high perioperative risk, Northstar's structural heart team deployed next-generation transcatheter valve reconstruction, discharging the patient within 24 hours.",
      patientName: "Robert Sterling, Pacific Palisades",
    },
  },
  {
    id: "cancer-center",
    slug: "cancer-center",
    name: "Comprehensive Cancer Care",
    institute: "Northstar Comprehensive Cancer Center",
    descriptor: "NCI-Designated Comprehensive Cancer Center Delivering Precision Oncology",
    rankingBadge: "NCI-Designated Comprehensive Cancer Center",
    overview:
      "Designated as a Comprehensive Cancer Center by the National Cancer Institute, Northstar is at the forefront of genomic-guided targeted therapies, immunotherapy, and organ-sparing robotic surgical resections. Every patient case is evaluated by disease-specific tumor boards comprising surgical oncologists, medical oncologists, radiation physicists, pathologists, and genetic counselors.",
    conditions: [
      "Pancreatic, Liver & Biliary Tract Cancers",
      "Glioblastoma & Central Nervous System Malignancies",
      "Refractory Leukemias, Lymphomas & Myelomas",
      "Triple-Negative & HER2+ Breast Cancer",
      "Non-Small Cell Lung Cancer & Mesothelioma",
      "Advanced Melanoma & Cutaneous Squamous Carcinoma",
      "Genitourinary (Prostate, Bladder, Kidney) Cancers",
    ],
    treatments: [
      "Next-Generation CAR-T Cell Immunotherapy",
      "Genomic Biomarker Profiling & Liquid Biopsies",
      "Robotic Da Vinci Single-Port Surgical Resection",
      "Stereotactic Body Radiation Therapy (SBRT / CyberKnife)",
      "Hyperthermic Intraperitoneal Chemotherapy (HIPEC)",
      "Allogeneic & Autologous Stem Cell Transplantation",
      "Phase I/II Experimental Oncology Clinical Trials",
    ],
    keyOutcomes: [
      {
        metric: "180+",
        description: "Active therapeutic oncology clinical trials open for patient enrollment",
      },
      {
        metric: "Top 1%",
        description: "Nationally in 5-year complex pancreatic resection survivorship",
      },
      {
        metric: "100%",
        description: "Multidisciplinary molecular tumor board review for stage III/IV diagnoses",
      },
    ],
    clinicalLeaders: [
      {
        name: "Dr. Elena Vance",
        role: "Chief of Surgical Oncology & Director, Precision Tumor Institute",
      },
      {
        name: "Dr. Tariq Mansoor",
        role: "Chief of Cellular Immunotherapy & Bone Marrow Transplantation",
      },
    ],
    phone: "(310) 855-4000",
    location: "8500 Wilshire Blvd, Northstar Cancer Pavilion, Los Angeles, CA 90048",
    heroImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200",
    featuredStory: {
      headline: "How Genomic Biomarker Mapping Halted Stage IV Lung Cancer",
      snippet:
        "Standard chemotherapy failed to control Elena's progressive tumor. A comprehensive 500-gene liquid biopsy uncovered a rare actionable fusion, allowing Northstar oncologists to prescribe targeted daily oral therapy.",
      patientName: "Elena Vance, Studio City",
    },
  },
  {
    id: "neurosciences",
    slug: "neurosciences",
    name: "Neurological Sciences & Brain Spine",
    institute: "Northstar Brain & Spine Institute",
    descriptor: "Comprehensive Stroke Center & Precision Neurotechnology",
    rankingBadge: "Comprehensive Stroke Center Certification & Top 10 National Neuro Program",
    overview:
      "The Northstar Brain & Spine Institute integrates world-tier neurosurgery, neurology, neuro-critical care, and neuro-radiology. Recognized as a Comprehensive Stroke Center, our teams manage acute ischemic stroke, complex cerebral aneurysms, skull-base tumors, refractory epilepsy, and neurodegenerative disorders utilizing real-time intraoperative MRI and robotic navigation.",
    conditions: [
      "Cerebral Aneurysms & Arteriovenous Malformations (AVMs)",
      "Acute Ischemic & Hemorrhagic Stroke",
      "Meningiomas, Pituitary Tumors & Skull Base Lesions",
      "Parkinson's Disease & Essential Tremor",
      "Drug-Resistant Focal Epilepsy",
      "Complex Spine Deformities & Cervical Myelopathy",
      "Normal Pressure Hydrocephalus (NPH)",
    ],
    treatments: [
      "Awake Cortical Speech & Motor Mapping Craniotomy",
      "MR-Guided Focused Ultrasound for Essential Tremor",
      "Deep Brain Stimulation (DBS) & Responsive Neurostimulation (RNS)",
      "Endovascular Mechanical Thrombectomy & Flow Diverter Coiling",
      "Endoscopic Endonasal Pituitary Surgery",
      "Robotic Minimally Invasive Spine Fusion",
      "Stereotactic Radiosurgery (Gamma Knife Icon)",
    ],
    keyOutcomes: [
      {
        metric: "18 min",
        description: "Median door-to-needle time for acute IV thrombolytic administration",
      },
      {
        metric: "94.2%",
        description: "Successful complete revascularization (TICI 2b/3) in acute endovascular thrombectomy",
      },
      {
        metric: "1,200+",
        description: "Complex neurosurgical and endovascular procedures completed annually",
      },
    ],
    clinicalLeaders: [
      {
        name: "Dr. Sarah Lin Chen",
        role: "Co-Director, Brain & Spine Institute / Chief of Functional Neurosurgery",
      },
    ],
    phone: "(310) 855-4200",
    location: "8500 Wilshire Blvd, West Pavilion Floors 5-6, Los Angeles, CA 90048",
    heroImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200",
    featuredStory: {
      headline: "Regaining Hand Control After Decades of Disabling Essential Tremor",
      snippet:
        "Without incisions or cranial burr holes, an hour of MR-guided focused ultrasound focused soundwaves on microscopic thalamic circuits, permanently silencing a concert cellist's hand tremor.",
      patientName: "Arthur Sterling, Santa Monica",
    },
  },
  {
    id: "orthopedics",
    slug: "orthopedics",
    name: "Orthopedic & Sports Medicine",
    institute: "Northstar Orthopedic & Sports Medicine Pavilion",
    descriptor: "Advanced Joint Replacement, Spine Care & Athletic Performance Recovery",
    rankingBadge: "Magnet Recognized Nursing & Top Rated Joint Replacement Center",
    overview:
      "From weekend athletes to professional sports franchises across Southern California, Northstar Orthopedic provides comprehensive surgical and rehabilitative care. Utilizing CT-guided robotic systems and muscle-sparing approaches, our fellowship-trained orthopedic surgeons maximize longevity, restore joint biomechanics, and return patients to active lifestyles.",
    conditions: [
      "Severe Osteoarthritis of Hip, Knee & Shoulder",
      "ACL, PCL & Complex Multi-Ligament Knee Tears",
      "Rotator Cuff Tears & Glenohumeral Instability",
      "Lumbar Disc Herniation & Spinal Stenosis",
      "Adult Scoliosis & Degenerative Spondylolisthesis",
      "Complex Revision Joint Arthroplasty",
      "Foot & Ankle Cartilage Defects",
    ],
    treatments: [
      "Mako Robotic-Arm Total & Partial Knee Arthroplasty",
      "Direct Anterior Muscle-Sparing Total Hip Arthroplasty",
      "Reverse Total Shoulder Replacement",
      "All-Inside Arthroscopic ACL Reconstruction",
      "Endoscopic Lumbar Discectomy & Decompression",
      "Autologous Chondrocyte Implantation (MACI)",
      "High-Resolution Ultrasound-Guided Biologics",
    ],
    keyOutcomes: [
      {
        metric: "82%",
        description: "Of total joint replacement patients discharged safely same-day or within 24 hours",
      },
      {
        metric: "0.28%",
        description: "Surgical site infection rate, well below the 1.5% national benchmark",
      },
      {
        metric: "98.5%",
        description: "Patient satisfaction score across post-operative functional mobility milestones",
      },
    ],
    clinicalLeaders: [
      {
        name: "Dr. Alejandro Reyes",
        role: "Director of Adult Joint Reconstruction & Sports Medicine",
      },
    ],
    phone: "(310) 829-8800",
    location: "2020 Santa Monica Blvd, Suite 400, Santa Monica, CA 90404",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "digestive-liver",
    slug: "digestive-liver",
    name: "Digestive Health & Organ Transplantation",
    institute: "Northstar Digestive Disease & Liver Center",
    descriptor: "Comprehensive Hepatobiliary Care, IBD Excellence & Solid Organ Transplant",
    overview:
      "Northstar Digestive Health delivers comprehensive care for disorders spanning the esophagus, stomach, liver, pancreas, colon, and rectum. Working with our Organ Transplant Institute, our team performs high-acuity liver and kidney transplants while delivering advanced interventional endoscopic alternatives to invasive surgery.",
    conditions: [
      "Cirrhosis & End-Stage Liver Disease",
      "Crohn's Disease & Ulcerative Colitis (IBD)",
      "Pancreatic Cysts & Chronic Pancreatitis",
      "Barrett's Esophagus & Dysplasia",
      "Achalasia & Esophageal Motility Disorders",
      "Colorectal Polyps & Early Carcinomas",
    ],
    treatments: [
      "Orthotopic Liver Transplantation (Living & Deceased Donor)",
      "Peroral Endoscopic Myotomy (POEM) for Achalasia",
      "Endoscopic Mucosal Resection (EMR) & Submucosal Dissection (ESD)",
      "Radiofrequency Ablation for Barrett's Esophagus",
      "Advanced Biologic Therapies for Refractory IBD",
      "Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
    ],
    keyOutcomes: [
      {
        metric: "96.1%",
        description: "1-year patient survival following deceased donor liver transplantation",
      },
      {
        metric: "4,500+",
        description: "Diagnostic and therapeutic endoscopic procedures completed annually",
      },
      {
        metric: "Top 5",
        description: "Highest-volume solid organ transplant centers in the Western United States",
      },
    ],
    clinicalLeaders: [
      {
        name: "Dr. Lucas Montgomery",
        role: "Division Chief of Digestive Diseases & Hepatology",
      },
    ],
    phone: "(626) 795-1200",
    location: "300 S Fair Oaks Ave, Suite 320, Pasadena, CA 91105",
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "womens-infants",
    slug: "womens-infants",
    name: "Women’s & Infants’ Health",
    institute: "Northstar Center for Women & Newborns",
    descriptor: "High-Risk Maternal-Fetal Medicine, Level IV NICU & Specialized Gynecologic Surgery",
    overview:
      "From routine obstetric wellness to the most complex maternal and fetal conditions, Northstar provides individualized care within a warm, supportive environment. Our Level IV Neonatal Intensive Care Unit (NICU) provides round-the-clock neonatologists and pediatric surgical subspecialists for critically ill newborns.",
    conditions: [
      "High-Risk Multiple Gestations (Twins/Triplets)",
      "Fetal Congenital Anomalies & Heart Conditions",
      "Maternal Cardiac & Renal Disease in Pregnancy",
      "Severe Endometriosis & Pelvic Pain",
      "Uterine Fibroids & Abnormal Bleeding",
      "Pelvic Organ Prolapse & Incontinence",
    ],
    treatments: [
      "Advanced In-Utero Fetal Interventions",
      "Level IV Neonatal Intensive Care Resuscitation & ECMO",
      "Minimally Invasive Robotic Gynecologic Surgery",
      "Uterine Artery Embolization & Fibroid Sparing Resections",
      "Dedicated High-Risk Obstetric Special Delivery Unit",
    ],
    keyOutcomes: [
      {
        metric: "Level IV",
        description: "Highest maternal and neonatal care accreditation in California",
      },
      {
        metric: "99.8%",
        description: "Postpartum hemorrhage protocol safety and compliance index",
      },
      {
        metric: "3,800+",
        description: "Healthy deliveries welcomed into the Northstar family annually",
      },
    ],
    clinicalLeaders: [
      {
        name: "Dr. Priya Patel",
        role: "Director of Maternal-Fetal Medicine & High-Risk Obstetrics",
      },
    ],
    phone: "(310) 855-4300",
    location: "8500 Wilshire Blvd, Pavilion South, Los Angeles, CA 90048",
    heroImage: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1200",
  },
];
