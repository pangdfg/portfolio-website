import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { experiences, ExperienceItem } from "../data/experience";

type DetailsProps = ExperienceItem;

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
        <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
      
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>

        <span className="capitalize font-medium text-amber-50/75  xs:text-sm">
          {time} | {address}
        </span>

        <ul className="list-disc list-inside">
          {work.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        </motion.div>
    </li>
  );
};

/* ================= MAIN ================= */
const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 text-amber-200">
        Experience
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-amber-50 origin-top md:w-0.5 md:left-7.5 xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experiences.map((exp, index) => (
            <Details key={index} {...exp} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;