import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'
import "../Education/Education.css";

export default function Education() {

  const education = "E d u c a t i o n";
  const words = education.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="edu-section d-flex flex-column align-items-center justify-content-center" id="education">

      <div className="w-100 mb-4"
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
          <a key={i}
          >
            {word}
          </a>
        ))}
      </div>

      <div className="timeline-container">

        <motion.div
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="timeline-item left">
            <div className="content">
              <h3>Kalasalingam Academy of Research and Education</h3>
              <span>Sep 2022 - Present</span>
              <p>Bachelor of Technology - Computer Science Engineering</p>
              <p>CGPA: 7.76 (As of 6th Sem)</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          initial={{ opacity: 0, x: window.matchMedia("(max-width: 768px)").matches ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="timeline-item right">
            <div className="content">
              <h3>ST. Francis Mat. Hr. Sec. School</h3>
              <span>Jun 2021 - Jul 2022</span>
              <p>Computer Science - HSC</p>
              <p>Percentage: 77.5%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="timeline-item left">
            <div className="content">
              <h3>ST. Francis Mat. Hr. Sec. School</h3>
              <span>Jun 2019 - Jul 2020</span>
              <p>SSLC</p>
              <p>Percentage: 67.2%</p>
            </div>
          </div>
        </motion.div>


      </div>



    </section>
  );
}
