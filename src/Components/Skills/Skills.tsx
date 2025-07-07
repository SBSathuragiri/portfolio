import React from 'react'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import '../Skills/Skills.css';
import { FaHtml5, FaCss3, FaReact, FaAngular, FaJs, FaBootstrap } from "react-icons/fa";
import { SiC, SiPython, SiSqlite, SiTypescript } from "react-icons/si";

export default function Skills() {

  const skills = "T e c h n i c a l -  S k i l l s";

  const words = skills.split(" ");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const allskills = [
    { icon: <FaHtml5 size={32} />, label: "HTML" },
    { icon: <FaCss3 size={32} />, label: "CSS" },
    { icon: <FaReact size={32} />, label: "React" },
    { icon: <FaReact size={32} />, label: "React Native" },
    { icon: <FaAngular size={32} />, label: "Angular" },
    { icon: <FaJs size={32} />, label: "JavaScript" },
    { icon: <SiTypescript size={32} />, label: "TypeScript" },
    { icon: <FaBootstrap size={32} />, label: "Bootstrap" },
    { icon: <SiPython size={32} />, label: "Python" },
    { icon: <SiC size={32} />, label: "C Programming" },
    { icon: <SiSqlite size={32} />, label: "SQL" },
  ];

  return (
    <section className="skills-section d-flex align-items-center justify-content-center " id="skills">
      <motion.div className="w-10 mb-4"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.035,
            },
          },
        }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "700px",
          lineHeight: 1.7,
          justifyContent: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="skills-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.0, duration: 0.035 }}
      >
        {allskills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill.icon}
            <span>{skill.label}</span>
          </div>
        ))}
      </motion.div>

    </section>
  )
}
