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
        <title>Pongsapak | About Page</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      {/* FIX: full height */}
      <main className="min-h-screen flex flex-col text-amber-50">
        <Layout className="flex-1 pt-16">
          
          <AnimatedText
            text="Every Failure is a Step to Success"
            className="lg:mb-16 lg:text-7xl md:text-6xl text-xl mb-8 mt-15 text-blue-100 underline"
          />

          {/* GRID */}
          <div className="w-full grid lg:grid-cols-[2fr_1fr] lg:gap-16 gap-8">

            {/* LEFT */}
            <div className="flex flex-col items-start">
              <h2 className="mb-4 text-l lg:text-3xl md:text-xl font-bold uppercase text-amber-100 underline">
                About Me
              </h2>

              <p className="font-medium lg:text-xl text-m text-blue-50">
                Hello! My name is Pongsapak. 
                I am deeply passionate about software engineering with a particular focus on database management and backend development.
              </p>

              <p className="my-4 font-medium lg:text-xl text-m">
                 While I am currently at the beginning of my professional journey, 
                 I am a fast learner with a strong drive to grow and contribute.
              </p>

              <p className="font-medium">
                I am eager to bring my dedication to a forward-thinking team and would welcome the opportunity to discuss how I can add value to your organization.
              </p>
            </div>

            {/* RIGHT (STATS) */}
            <div className="flex flex-col items-center justify-center">

              <div className=" flex flex-col justify-between flex-wrap gap-8">

                <div className=" items-center">
                  <span className="text-6xl font-bold text-amber-200">
                    <AnimatedNumbers value={1} />+
                  </span>
                  <p className="text-gray-400 text-sm">Projects</p>
                </div>

                <div className=" items-center">
                  <span className="text-6xl font-bold text-amber-200">
                    <AnimatedNumbers value={1} />+
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