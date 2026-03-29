import React from "react";
import { motion } from "framer-motion";
import "./Loader.css"; // استورد ملف الـ CSS

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <div className="liquid-loader">
        <div className="loading-text">
          Loading<span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>

        <div className="loader-track">
          <div className="liquid-fill"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
