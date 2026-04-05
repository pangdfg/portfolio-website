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
      className="my-12 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col justify-between md:w-[60%] lg:w-[80%]"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-lg sm:text-2xl md:text-3xl text-amber-100">
          {type}
        </h3>

        <h2 className="capitalize text-md sm:text-xl md:text-2xl font-medium text-blue-100">
          {place}
        </h2>

        <span className="capitalize text-sm sm:text-md md:text-lg font-medium text-emerald-300">
          {time}
        </span>

        <p className="font-medium w-full text-sm sm:text-md md:text-lg p-3">
          {info}
        </p>

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
    <div className="">
      <h2 className="my-20 font-bold llg:text-8xl md:mb-32 w-full text-center md:text-6xl text-4xl mb-16 text-amber-200 md:underline">
        Education
      </h2>

      <div
        ref={ref}
        className=" mx-auto relative lg:w-[75%] w-full "
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute lg:left-7.5 top-0 w-1 h-full bg-amber-50 origin-top md:left-7.5 left-4.5"
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