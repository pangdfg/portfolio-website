export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Java", "Spring Boot", "golang", "fiber", "gin"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "MySQL Server"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "Nginx" , "Vscode", "MSoffice"],
  },
];