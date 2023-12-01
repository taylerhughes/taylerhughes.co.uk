"use client";
import { motion } from "framer-motion";
import React, { FC } from "react";

const AnimatedElement: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <motion.span
      animate={{
        scale: [1, 2, 1, 1],
      }}
      transition={{
        duration: 0.5,
        delay: 2,
        ease: "easeInOut",
        repeatDelay: 1,
      }}
    >
      {children}
    </motion.span>
  );
};

export default AnimatedElement;
