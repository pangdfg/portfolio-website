import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Layout from "@/components/Layout";
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
              <Image
                src={profilePic}
                alt="Brian"
                className="rounded-full md:inline-block w-150 h-150"
                priority
              />
            </div>

            {/* CONTENT */}
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              
              <AnimatedText
                text="Taking what is possible tomorrow and creating it today."
                className="text-5xl text-left xl:text-4xl lg:text-center md:text-3xl sm:text-2xl"
              />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I love making something beautiful and functional with the newest
                development techniques. I look for challenges in the unknown and
                the new. Right now, I am practicing with Backend. While you are
                here, feel free to check out some of my other recent work.
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                
                {/* RESUME */}
                <Link
                  href="/Pongsapak-Suwandee-Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-gray-50 text-gray-950 p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-gray-950 hover:text-gray-50 border-2 
                  border-solid border-transparent hover:border-amber-50 md:p-2 md:px-4 md:text-base"
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>

                {/* CONTACT */}
                <Link
                  href="mailto:pongsapak.suwa@gmail.com"
                  className="ml-4 text-lg font-medium underline md:text-base"
                >
                  Contact
                </Link>

              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}