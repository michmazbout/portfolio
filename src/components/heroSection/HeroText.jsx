import { motion } from "framer-motion";
import { useMemo } from "react";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  const catchphrases = [
    "Used to design temples. Now I design UIs.",
    "From sandstone to JavaScript — still building.",
    "Centuries of architecture. Now on the web.",
    "Coded Atlantis. The files were lost.",
  ];

  // Randomly pick one *once* on render
  const phrase = useMemo(() => {
    return catchphrases[Math.floor(Math.random() * catchphrases.length)];
  }, []);

  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Front-End Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Elias <br className="sm:hidden md:block" />
        Al Alam
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-lightGrey"
      >
        {phrase}
      </motion.p>
    </div>
  );
};

export default HeroText;
