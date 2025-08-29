import { FlipWords } from "./FlipWords";
const words = ["Minimal", "Scalable", "Effective"]
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1 className="text-4xl font-medium">Hi, I'm Aawhan</motion.h1>
        <div className="flex flex-col items-start">
          <motion.p className="text-5xl font-medium text-neutral-300">
            Software engineer building intuitive experiences
          </motion.p>
          <motion.div>
            <FlipWords
              words={["Minimal", "Scalable", "Effective"]}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p className="text-4xl font-medium text-neutral-300">Web solutions</motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p className="text-4xl font-medium">Hi, I'm Aawhan</motion.p>
        <p className="text-5xl font-black text-neutral-300">Building</p>
        <motion.div>
          <FlipWords words={words}
          className="font-bold text-white text-7xl"
          />
        </motion.div>
        <motion.p className="text-4xl font-black">Web Applications</motion.p>
      </div>
    </div>
  );
};

export default HeroText;
