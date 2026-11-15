"use client";

import React from "react";
import { motion } from "framer-motion";

// Snappy, tactile easing that fits Neo-Brutalism (no bouncy/floaty nonsense)
const BRUTAL_EASE = [0.22, 1, 0.36, 1];

export const BrutalReveal = ({
  children,
  delay = 0,
  y = 24,
  x = 0,
  className = "",
  once = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: 0.15, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.38,
        delay,
        ease: BRUTAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const BrutalStagger = ({
  children,
  stagger = 0.07,
  className = "",
  once = true,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.12, margin: "0px 0px -40px 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const BrutalItem = ({ children, y = 20, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.34,
            ease: BRUTAL_EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
