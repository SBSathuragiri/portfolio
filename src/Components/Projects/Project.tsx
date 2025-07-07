import React, { useRef } from 'react'
import '../Projects/Projects.css'
import { motion, useInView } from 'framer-motion';
import ProjectSlider from '../Sliders/projectSliders';

export default function Project() {

  const projects = "P r o j e c t s";
  const words = projects.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <section className="projects-section d-flex flex-column align-items-center" id="home">
      <motion.div className="w-100 mb-4"
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
          <motion.a key={i}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {word}
          </motion.a>
        ))}
      </motion.div>
      <div className='justify-content-center d-flex align-items-center w-100  flex-column'>
        <ProjectSlider />
      </div>
    </section>
  )
}
