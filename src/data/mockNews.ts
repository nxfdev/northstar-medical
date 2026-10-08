import { EditorialArticle } from "@/types";

export const mockArticles: EditorialArticle[] = [
  {
    id: "genomic-breakthrough-panc",
    slug: "genomic-breakthrough-pancreatic-cancer",
    title: "Northstar Investigators Identify Novel Circulating DNA Signature Halting Pancreatic Tumor Recurrence",
    category: "Clinical Breakthrough",
    readTime: "5 min read",
    date: "October 3, 2026",
    author: "Office of Clinical Communications & Faculty Affairs",
    heroImage: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000",
    summary:
      "A five-year study published in Nature Medicine reveals that targeting microscopic methylation fragments in blood prior to surgery doubles survival in resectable pancreatic adenocarcinoma.",
    pullQuote: {
      text: "By seeing tumor dynamics weeks before CT scans detect changes, we are able to personalize every step of surgery and immunotherapy.",
      attribution: "Dr. Elena Vance, Lead Study Investigator",
    },
    contentParagraphs: [
      "In a landmark trial involving 312 patients across Southern California, investigators at Northstar Comprehensive Cancer Center demonstrated that longitudinal liquid biopsies provide unprecedented precision in predicting surgical resectability.",
      "The clinical protocol combines targeted multi-gene panel sequencing with custom hypermethylation analysis. When applied before neoadjuvant therapy, the assay allowed surgeons to time complex robotic Whipple operations with zero positive margin rates in 94% of cohort participants.",
    ],
  },
  {
    id: "patient-story-elena-vance",
    slug: "patient-story-elena-vance",
    title: "Beating the Odds in Beverly Grove: How Northstar's Genomic Oncology Saved Elena Vance",
    category: "Patient Story",
    readTime: "6 min read",
    date: "September 24, 2026",
    author: "Northstar Health Editorial Staff",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
    summary:
      "When standard chemotherapy options were exhausted, a 46-year-old mother from Studio City gained remission through a customized bispecific antibody clinical trial at Northstar.",
    pullQuote: {
      text: "At Northstar, they didn't just see a cancer staging number. They mapped my specific tumor genetics and found a key that turned everything around.",
      attribution: "Elena Vance, Patient & Patient Advocate",
    },
    contentParagraphs: [
      "When Elena Vance first arrived at Northstar Medical Center on Wilshire Boulevard, she had undergone two prior rounds of intensive systemic treatment at another regional hospital without durable response.",
      "Within 48 hours of her initial evaluation, Northstar's molecular tumor board had fully sequenced her biopsy tissue, matching her with an open Phase II immunotherapy protocol. Today, 22 months later, repeated PET/CT imaging confirms complete clinical remission.",
    ],
  },
  {
    id: "women-heart-microvascular",
    slug: "closing-the-diagnostic-gap-in-womens-heart-disease",
    title: "Closing the Diagnostic Gap: Redefining Ischemic Heart Disease in Women",
    category: "Faculty Research",
    readTime: "4 min read",
    date: "September 12, 2026",
    author: "Center for Women's Cardiovascular Health",
    heroImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1000",
    summary:
      "Dr. Amara Okafor discusses how specialized coronary reactivity testing unmasks microvascular spasms in female patients traditionally dismissed with clear angiograms.",
    pullQuote: {
      text: "Normal coronary arteries on a standard angiogram do not mean normal cardiac blood flow. Women's hearts speak a different clinical language.",
      attribution: "Dr. Amara Okafor, Director of Women's Heart Center",
    },
    contentParagraphs: [
      "For decades, cardiovascular diagnostic paradigms focused almost exclusively on large epicardial blockages. Yet millions of women experience severe angina despite having no observable arterial stenosis.",
      "Through advanced functional PET perfusion imaging and invasive endothelial testing, Northstar's dedicated Women's Heart Clinic has diagnosed and treated over 800 patients whose symptoms were previously labeled idiopathic or stress-related.",
    ],
  },
  {
    id: "community-mobile-clinics",
    slug: "expanding-specialty-care-across-greater-los-angeles",
    title: "Northstar Invests $45M to Expand Specialty Outreach in South Los Angeles & East LA",
    category: "Community Health",
    readTime: "3 min read",
    date: "August 29, 2026",
    author: "Office of Community Health & Institutional Equity",
    heroImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
    summary:
      "A new initiative deploys mobile diagnostic imaging vans, cardiovascular screening, and pediatric wellness clinics into historically medically underserved neighborhoods.",
    contentParagraphs: [
      "Consistent with its founding nonprofit charter as a civic health pillar of Southern California, Northstar Medical has announced an expanded community health endowment providing free preventative screenings and subsidized specialty consults to over 25,000 residents annually.",
    ],
  },
];
