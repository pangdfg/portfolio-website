import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>

      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-350 bg-fuchsia-700"
        initial={{
        clipPath: "circle(0% at 100% 100%)", 
      }}
      animate={{
        clipPath: [
          "circle(0% at 100% 100%)",  
          "circle(150% at 50% 50%)",   
          "circle(0% at 0% 0%)",       
        ],
      }}
      transition={{
        duration: 1.5,
        times: [0, 0.3, 1],
        ease: "easeInOut",
      }}
      />

      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-250 bg-black"
        initial={{
          clipPath: "circle(150% at 50% 50%)",
        }}
        animate={{
          clipPath: "circle(0% at 0% 0%)",
        }}
        transition={{
          delay: 0.4, 
          duration: 1.2,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-150 bg-amber-50"
        initial={{
          clipPath: "circle(150% at 50% 50%)",
        }}
        animate={{
          clipPath: "circle(0% at 0% 0%)",
        }}
        transition={{
          delay: 0.6, 
          duration: 1.2,
          ease: "easeInOut",
        }}
      />
        
    </>
  );
};

export default TransitionEffect;