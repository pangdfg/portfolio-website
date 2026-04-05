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
        <Layout className="pt-50 md:pt-45 lg:pt-32">

          <div className="grid lg:grid-cols-2 items-center justify-between w-full lg:flex-col ">

            {/* IMAGE */}
            <div className="flex flex-col items-center self-center w-full lg:w-auto pb-10 lg:pb-0">
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
              <Image
                src={profilePic}
                alt="Brian"
                width={350}
                height={350}
                className="rounded-full w-50 h-50 lg:w-150 lg:h-150 md:w-100 md:h-100 shadow-[10px_10px_0px_0px_rgba(255,255,217)]"
                priority
              />
              </motion.div>
            </div>

            {/* CONTENT */}
            <div className=" flex flex-col items-center self-center w-full text-center lg:pl-5">

              <AnimatedText
                text="Taking what is possible tomorrow and creating it today."
                className="lg:text-4xl text-left 
                xl:text-4xl lg:text-center md:text-2xl text-xl text-amber-200"
              />

              <p className="my-4 lg:text-base font-medium 
              md:text-sm text-xs max-w-xl">
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