import React from 'react'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import '../Experience/Experience.css';

export default function Experience() {

  const experience = "E x p e r i e n c e";

  const words = experience.split(" ");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="exp-section text-center d-flex flex-column align-items-center justify-content-center" id="experience">
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
          textAlign: "center",
        }}
      >
        {words.map((word, i) => (
          <motion.a
            key={i}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {word}
          </motion.a>
        ))}
      </motion.div>


      <div className='text-center text-muted mx-auto exp-details' style={{ maxWidth: '1000px' }}>

        <div className='exp-card'>
          <h2 className='exp-heading'>ACM-W, College Club</h2>
          <p className='exp-timeline'>Sep 2024 - Present</p>
          <ul className='exp-list'>
            <li>Developed and maintained the official website for the ACM-Women Chapter college club.</li>
            <li>Designed and implemented a responsive UI to ensure optimal performance across various devices and screen sizes.</li>
            <li>Integrated Firebase for database management, and real-time updates.</li>
            <li><strong>Technologies Used: React.js, CSS, Firebase</strong></li>
          </ul>
        </div>

        <div className='exp-card-right'>
          <h2 className='exp-heading'>Greenitive Techonology, Internship</h2>
          <p className='exp-timeline'>May 2024 - July 2024</p>
          <ul className='exp-list'>
            <li>Coded and Maintained the scalable web application using Angular.</li>
            <li>Add additional future in the main project make the easy workflow to users.</li>
            <li>Build and redesign the company offical website using React js.</li>
            <li><strong>Technologies Used: React.js, Angular, CSS, Typescript, Bootstarp</strong></li>
          </ul>
        </div>

        <div className='exp-card'>
          <h2 className='exp-heading'>Greenitive Techonology, Internship</h2>
          <p className='exp-timeline'>April 2025 - May 2025</p>
          <ul className='exp-list'>
            <li>Built and maintained scalable web applications using Angular.</li>
            <li>Collaborated with senior developers to enhance the design of the company's main product.</li>
            <li>Implemented responsive design techniques to ensure optimal performance across various devices and screen sizes.</li>
            <li>Participated in team meetings to improve project workflows.</li>
            <li>Gained hands-on experience with version control systems like Git for efficient collaboration.</li>
            <li><strong>Technologies Used: Angular, Typescript, HTML, CSS, Bootstrap</strong></li>
          </ul>
        </div>

      </div>


    </section>
  )
}
