import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/data/social";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Pongsapak | Contact Page</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />

      <main className="min-h-screen flex flex-col text-amber-50">
        <Layout className="flex-1 pt-16">

        <AnimatedText
            text="Contact Me"
            className="lg:mb-16 lg:text-7xl md:text-6xl text-xl mb-8 mt-15 text-blue-100 underline"
          />

        <div className="p-4">
      <div className="grid lg:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl max-lg:max-w-2xl bg-neutral-920/50 [box-shadow:0_2px_10px_-3px_rgba(1000,1000,1000,0.3)] rounded-md">
        <div>
          <h2 className="text-white text-3xl font-bold">Let&apos;s Talk</h2>
          <p className="text-[15px] text-amber-100 mt-4 leading-relaxed">Feel free to reach out to me through any of these channels.</p>
          <div className="mt-12">
            <h2 className="text-yellow-50 text-base font-semibold">Contact at</h2>
            <ul className="mt-4">
              <li className="flex items-center mb-3">
                <div className="bg-gray-950 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#fff'
                    viewBox="0 0 479.058 479.058">
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#0000" />
                  </svg>
                </div>
                <a href="mailto:pongsapak.suwa@gmail.com" className="text-sm ml-4">
                  <small className="block text-slate-50">Mail</small>
                  <span className="text-blue-100 font-medium">pongsapak.suwa@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center">
                <div className="bg-gray-950 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <a className="text-sm ml-4">
                  <small className="block text-slate-50">Telaphone</small>
                  <span className="text-yellow-200 font-medium">+66</span>
                  <span className="text-blue-100 font-medium"> 97 084 9880</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-white text-base font-semibold">Socials</h2>
            <ul className="flex mt-4 space-x-4">
                {SOCIAL_LINKS.map(({ href, Icon }) => (
                <li key={href} className=" h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <motion.a
                    href={href}
                    target="_blank"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-5 md:w-8 h-5 md:h-8   mr-3  rounded-full"
                    >
                    <Icon />
                    </motion.a>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
        
</Layout>
      </main>
      
    </>
  );
};

export default Contact;