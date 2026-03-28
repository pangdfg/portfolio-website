import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-300 bg-fuchsia-700"
        initial={{x:"100%", width:"100%"}}
        animate={{x:"0%", width:"0%"}}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

        
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-200 bg-amber-50"
        initial={{x:"100%", width:"100%"}}
        animate={{x:"0%", width:"0%"}}
        transition={{ delay: 0.2, duration: 2, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-150 bg-black border-amber-50"
        initial={{x:"100%", width:"100%"}}
        animate={{x:"0%", width:"0%"}}
        transition={{ delay: 0.4, duration: 2, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;