import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { experiences, ExperienceItem } from "../data/experience";

type DetailsProps = ExperienceItem;

const Details = ({
  position,
  company,
  time,
  address,
  work,
}: DetailsProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={ref}
      className="my-12 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col justify-between md:w-[60%] lg:w-[80%]"
    >
      <LiIcon reference={ref} />
        <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
      
        <h3 className="capitalize font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-amber-100">
          {position}
        </h3> 
        <h3 className="capitalize font-bold text-md sm:text-xl md:text-2xl lg:text-3xl text-emerald-400">
            &nbsp;@ {company}
        </h3>

        <span className="capitalize font-medium text-sm sm:text-md md:text-lg lg:text-xl text-blue-100">
          {time} | {address}
        </span>

        <ul className="list-disc list-inside">
          {work.map((item, index) => (
            <li key={index} className="text-sm sm:text-md md:text-lg">
              {item}
            </li>
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
    <div className="">
      <h2 className="my-20 font-bold llg:text-8xl md:mb-32 w-full text-center md:text-6xl text-4xl mb-16 text-amber-200 md:underline">
        Experience
      </h2>

      <div
        ref={ref}
        className=" mx-auto relative lg:w-[75%] w-full "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute lg:left-7.5 top-0 w-1 h-full bg-amber-50 origin-top md:left-7.5 left-4.5"
        />

        <ul className="w-full flex flex-col items-start justify-between md:ml-4 ml-2">
          {experiences.map((exp, index) => (
            <Details key={index} {...exp} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;