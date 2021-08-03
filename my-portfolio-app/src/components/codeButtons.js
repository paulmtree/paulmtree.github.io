import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Content from "./Content.js";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CodeButtons = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div layout>
        <a className="project-title" href={link}>
          {title}
        </a>
        <FontAwesomeIcon className="project-down-arrow" icon={faChevronDown} />
      </motion.div>
      <AnimatePresence>
        {isOpen && <Content key={title} desc={{ description }} />}
      </AnimatePresence>
    </motion.li>
  );
};
export default CodeButtons;
