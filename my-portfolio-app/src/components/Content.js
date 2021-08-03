import { motion, AnimatePresence } from "framer-motion";
import React, { Component } from "react";

const Content = ({ desc }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="project-desc">{desc.description}</div>
    </motion.div>
  );
};

export default Content;
