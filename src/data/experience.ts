export type ExperienceItem = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string[];
};

export const experiences: ExperienceItem[] = [
  {
    position: "Conscripted into the military",
    company: "Thai Army",
    companyLink: "/",
    time: "2025",
    address: "Chiang Mai",
    work: [
      "Sticking in the military for 6 months and successfully",
      "Leveraging the Microsoft Office suite to drive productivity and streamline workflows."
    ],
  },
  {
    position: "Information System Development Department Intern ",
    company: "SME D Bank",
    companyLink: "/",
    time: "2023",
    address: "Phaya Thai District, Bangkok",
    work: [
      "Architected and optimized SQL queries, stored procedures, and scalar functions within Microsoft SQL Server Management Studio (SSMS).",
      "Transferred data from Excel to SQL Server, performing data validation to ensure accuracy and consistency for downstream processes.",
    ],
  },
];