import React from "react";
import { motion } from "framer-motion";

// مكتبة الحركات الجاهزة
const motions = {
  fade: {
    initial: { opacity: 0 ,y:20 },
    animate: { opacity: 1 ,y:0},
    exit: { opacity: 0 ,y:-20 },
    transition: { duration: 0.5 },
  },
slideRight: {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
  transition: { duration: 0.6 },
}
,
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { duration: 0.4 },
  },
  rotate: {
    initial: { rotate: -10, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 10, opacity: 0 },
    transition: { duration: 0.7 },
  },
  bounce: {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
    transition: { type: "spring", stiffness: 120 },
  },
  
};

function PageMotion({ children, type = "fade" }) {
  const motionType = motions[type] || motions.fade;

  return <motion.div {...motionType}>{children}</motion.div>;
}

export default PageMotion;
