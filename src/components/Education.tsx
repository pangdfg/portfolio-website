import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { educations, EducationItem } from "../data/education";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";


type DetailsProps = EducationItem;

const Details = ({ type, time, place, info, web }: DetailsProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={ref}
      className="my-12 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold sm:text-3xl xs:text-lg text-amber-100">
          {type}
        </h3>

        <h2 className="capitalize text-xl font-medium text-blue-100  xs:text-m">
          {place}
        </h2>

        <span className="capitalize text-l font-medium text-emerald-300  xs:text-sm">
          {time}
        </span>

        <p className="font-medium w-full md:text-sm p-3">{info}</p>

        <Link
          href={web}
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium 
          bg-gray-50 text-gray-950 rounded-md
          hover:bg-gray-950 hover:text-gray-50 
          border border-transparent hover:border-amber-50
          transition-all duration-200"
        >
          View
          <LinkArrow className="w-4" />
        </Link>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 text-amber-200 md:underline">
        Education
      </h2>

      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-amber-50 origin-top md:w-0.5 md:left-7.5 xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {educations.map((edu, index) => (
            <Details key={index} {...edu} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;