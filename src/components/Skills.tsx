import { motion } from "framer-motion";
import { skillData, SkillCategory } from '../data/skills'

const SkillItem = ({ name }: { name: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="px-4 py-2 text-amber-50 rounded-lg m-2 cursor-pointer hover:text-amber-100"
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
        Skills
      </h2>
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skillData.map((category: SkillCategory) => (
          <div
            key={category.title}
            className="border border-dark rounded-xl p-6 shadow-[10px_10px_0px_0px_rgba(255,255,255)]"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 underline text-blue-100">
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