import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { LinkArrow } from "@/components/Icons";

import profilePic from "../../public/20251206_144537.jpg";

export default function Home() {
  return (
    <>
    <Head>
        <title>Welcome to my Portfolio</title>
        <meta name="description" content="Brian Williams Portfolio" />
      </Head>
      <TransitionEffect />

      <main className="flex items-center w-full min-h-screen text-amber-50 bg-neutral-900">
        <Layout className="pt-0 md:p-16 sm:pt-8">

          <div className="grid grid-cols-2 items-center justify-between w-full lg:flex-col">

            {/* IMAGE */}
            <div className="w-1/2 md:w-full">
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
              <Image
                src={profilePic}
                alt="Brian"
                width={350}
                height={350}
                className="rounded-full w-150 h-150 md:w-125 md:h-125 sm:w-105 sm:h-105 shadow-[10px_10px_0px_0px_rgba(255,255,217)]"
                priority
              />
              </motion.div>
            </div>

            {/* CONTENT */}
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">

              <AnimatedText
                text="Taking what is possible tomorrow and creating it today."
                className="text-5xl text-left 
                xl:text-4xl lg:text-center md:text-3xl sm:text-2xl"
              />

              <p className="my-4 text-base font-medium 
              md:text-sm sm:text-xs max-w-xl">
                I love making something beautiful and functional with the newest
                development techniques. I look for challenges in the unknown and
                the new. Right now, I am practicing with Backend.
              </p>

              <div className="flex items-center gap-4 mt-4 
              lg:justify-center">

                {/* RESUME */}
                <Link
                  href="/Pongsapak-Suwandee-Resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 
                  px-4 py-2 text-sm font-medium 
                  bg-gray-50 text-gray-950 rounded-md
                  hover:bg-gray-950 hover:text-gray-50
                  border border-transparent hover:border-amber-50
                  transition"
                >
                  Resume
                  <LinkArrow className="w-4" />
                </Link>

                {/* CONTACT */}
                <Link
                  href="mailto:pongsapak.suwa@gmail.com"
                  className="text-sm font-medium underline"
                >
                  Contact
                </Link>

              </div>
            </div>
          </div>
          <motion.div
            className="fixed bottom-10 right-10 w-24 h-24 bg-amber-900/20 
            rounded-full blur-2xl pointer-events-none"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
        </Layout>
      </main>
    </>
  );
}