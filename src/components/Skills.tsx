import { motion } from "framer-motion";
import { skillData, SkillCategory } from '../data/skills'

const SkillItem = ({ name }: { name: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="px-4 py-2 bg-dark text-light rounded-lg m-2 dark:bg-light dark:text-dark cursor-pointer"
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillData.map((category: SkillCategory) => (
          <div
            key={category.title}
            className="border border-dark dark:border-light rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap">
              {category.skills.map((skill) => (
                <SkillItem key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;