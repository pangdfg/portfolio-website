"use client";

import Head from "next/head";
import Layout from "@/components/Layout";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

/* ================= TYPES ================= */

/* ================= PAGE ================= */

const About = () => {
  return (
    <>
      <Head>
        <title>Experience | Education</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />
      <main className="min-h-screen flex flex-col text-amber-50">
        <Layout className="flex-1 pt-5">
          
          <Experience />
          <Education />

        </Layout>
      </main>
    </>
  );
};

export default About;