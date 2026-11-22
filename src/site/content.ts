// All public copy and data for the homepage lives here, so text edits never touch layout code.

export const site = {
  name: "Cyvidence",
  // TODO(owner): confirm the public contact address before launch.
  contactEmail: "hello@cyvidence.com",
};

export const mailto = (subject: string) =>
  `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}`;

export type CategoryId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const categories: { id: CategoryId; name: string; core: boolean }[] = [
  { id: 1, name: "Product identity and scope", core: true },
  { id: 2, name: "Architecture and components", core: true },
  { id: 3, name: "Risk and threat assessment", core: true },
  { id: 4, name: "Security requirements and controls", core: true },
  { id: 5, name: "Engineering and build integrity", core: false },
  { id: 6, name: "Verification and testing", core: true },
  { id: 7, name: "Vulnerabilities and incidents", core: true },
  { id: 8, name: "Updates and lifecycle support", core: true },
  { id: 9, name: "Suppliers and dependencies", core: false },
  { id: 10, name: "AI and safety assurance", core: false },
  { id: 11, name: "Conformity and regulatory files", core: true },
  { id: 12, name: "Governance and independent assurance", core: true },
];

export const regulations: { id: string; name: string; question: string; uses: CategoryId[] }[] = [
  {
    id: "cra",
    name: "Cyber Resilience Act",
    question: "Is this digital product secure, and can its vulnerabilities be managed throughout its support period?",
    uses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12],
  },
  {
    id: "red",
    name: "Radio Equipment Directive",
    question: "Does covered radio equipment protect networks, personal data and users against fraud?",
    uses: [1, 2, 3, 4, 6, 11, 12],
  },
  {
    id: "machinery",
    name: "Machinery Regulation",
    question: "Can cyber interference compromise machinery safety or control functions?",
    uses: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12],
  },
  {
    id: "pld",
    name: "Product Liability Directive",
    question: "What happened, was the product defective, and what evidence can be produced?",
    uses: [1, 2, 3, 4, 5, 6, 7, 8, 10, 12],
  },
  {
    id: "ai-act",
    name: "AI Act",
    question: "Does a qualifying AI system meet risk, data, transparency, robustness and oversight requirements?",
    uses: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12],
  },
  {
    id: "data-act",
    name: "Data Act",
    question: "Can users access the data their connected product generates, without compromising its security?",
    uses: [1, 2, 3, 4, 9, 11, 12],
  },
  {
    id: "nis2",
    name: "NIS2",
    question: "Does the organisation manage cybersecurity risks, suppliers, incidents and continuity adequately?",
    uses: [5, 7, 8, 9, 12],
  },
  {
    id: "dora",
    name: "DORA",
    question: "Does a financial entity manage ICT risk, third parties, incidents and resilience testing?",
    uses: [5, 6, 7, 8, 9, 12],
  },
];

// Key application dates. Status (applies / upcoming) is computed at runtime.
export const timeline: { date: string; law: string; what: string }[] = [
  { date: "2025-08-01", law: "Radio Equipment Directive", what: "Cybersecurity requirements for wireless products" },
  { date: "2026-09-11", law: "Cyber Resilience Act", what: "24 h and 72 h vulnerability and incident reporting" },
  { date: "2026-12-09", law: "Product Liability Directive", what: "Software and AI become products under liability rules" },
  { date: "2027-01-20", law: "Machinery Regulation", what: "Protection against corruption and cyber interference" },
  { date: "2027-12-02", law: "AI Act", what: "Obligations for stand-alone high-risk AI systems" },
  { date: "2027-12-11", law: "Cyber Resilience Act", what: "Full application: technical file and CE marking" },
  { date: "2028-08-02", law: "AI Act", what: "High-risk AI embedded in regulated products" },
];

export const sources = [
  { team: "Engineering", where: "Jira, GitHub, Confluence" },
  { team: "Product security", where: "Threat models in spreadsheets" },
  { team: "Compliance", where: "Regulation mappings in SharePoint" },
  { team: "Quality", where: "Certification files as PDFs" },
  { team: "Vulnerability management", where: "Tickets, wikis and diagrams" },
  { team: "External consultants", where: "Audit reports by email" },
];
