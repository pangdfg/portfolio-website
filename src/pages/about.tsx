"use client";

import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/* ================= TYPES ================= */

type AnimatedNumbersProps = {
  value: number;
};

/* ================= COMPONENT ================= */

const AnimatedNumbers = ({ value }: AnimatedNumbersProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current && latest <= value) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });

    return () => unsubscribe();
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

/* ================= PAGE ================= */

const About = () => {
  return (
    <>
      <Head>
        <title>Brian Williams | About Page</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      {/* FIX: full height */}
      <main className="min-h-screen flex flex-col text-amber-50">
        <Layout className="flex-1 pt-16">
          
          <AnimatedText
            text="Curiosity Leads Creativity!"
            className="mb-16 lg:text-7xl sm:text-6xl xs:!text-4xl sm:mb-8"
          />

          {/* GRID */}
          <div className="w-full grid-cols-8 gap-16 sm:gap-8">

            {/* LEFT */}
            <div className="col-span-3 flex flex-col items-start xl:col-span-4 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-gray-100">
                About Me
              </h2>

              <p className="font-medium">
                Hello! My name is Brian, I am a web developer and UI/UX designer
                with a passion for creating beautiful, functional, and
                user-centered digital experiences.
              </p>

              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty, it is about solving problems.
              </p>

              <p className="font-medium">
                I bring my commitment to design excellence and user-centered
                thinking to every project I work on.
              </p>
            </div>

            {/* RIGHT (STATS) */}
            <div className="col-span-5 flex flex-col justify-between xl:col-span-8 md:mt-8">

              <div className="flex justify-between flex-wrap gap-8">

                <div className="flex flex-col items-center">
                  <span className="text-6xl font-bold">
                    <AnimatedNumbers value={8} />+
                  </span>
                  <p className="text-gray-400 text-sm">Clients</p>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-6xl font-bold">
                    <AnimatedNumbers value={10} />+
                  </span>
                  <p className="text-gray-400 text-sm">Projects</p>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-6xl font-bold">
                    <AnimatedNumbers value={4} />+
                  </span>
                  <p className="text-gray-400 text-sm">Years</p>
                </div>

              </div>

            </div>
          </div>

          <Skills />

        </Layout>
      </main>
    </>
  );
};

export default About;