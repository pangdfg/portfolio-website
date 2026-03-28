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
    position: "Frontend Developer",
    company: "RikerWeb",
    companyLink: "/",
    time: "2024-Present",
    address: "Colorado Springs, CO",
    work: [
      "Specialize in full-stack web development using HTML/CSS, JavaScript, and Tailwind CSS",
      "Follow design mockups and wireframes for precise implementation",
      "Collaborate closely with backend developers for seamless integration",
      "Leverage Tailwind CSS utilities to create custom layouts and styles",
      "Delivered projects for various industries, increasing online leads by 25%",
    ],
  },
  {
    position: "Web Developer",
    company: "Coding For Hermit Crabs",
    companyLink: "/",
    time: "2023",
    address: "Atlanta, GA",
    work: [
      "Developed and maintained websites",
      "Optimized mobile responsiveness",
      "Implemented SEO best practices",
      "Collaborated with clients",
    ],
  },
];