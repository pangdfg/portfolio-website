"use client";

import Head from "next/head";
import Layout from "@/components/Layout";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import { Briefcase, GraduationCap } from 'lucide-react';


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
        <Layout className="flex-1 pt-20 md:32">
          <Tabs defaultValue="experience">
              <TabsList className="bg-gray-950/5 p-1 mb-2 w-full justify-start overflow-x-auto h-auto">
                <TabsTrigger value="experience" className="gap-2 px-6 py-3 data-[state=active]:bg-accent data-[state=active]:text-yellow-400 data-[state=active]:bg-white/5 hover:bg-white/10">
                  <Briefcase className="w-4 h-4 md:w-7 md:h-7" /> Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="gap-2 px-6 py-3 data-[state=active]:bg-accent data-[state=active]:text-yellow-400 data-[state=active]:bg-white/5 hover:bg-white/10">
                  <GraduationCap className="w-4 h-4 md:w-7 md:h-7" /> Education
                </TabsTrigger>
              </TabsList>
                <TabsContent value="experience" className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-4 duration-500">
                  <Experience />
                </TabsContent>
                <TabsContent value="education" className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-4 duration-500">
                  <Education />
                </TabsContent>
          </Tabs>
        </Layout>
      </main>
    </>
  );
};

export default About;