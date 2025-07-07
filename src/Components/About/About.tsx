import React from 'react'
import { motion, useInView } from 'framer-motion';
import '../About/About.css';
import { useRef } from 'react';

export default function About() {

  const aboutme = "A b o u t - M e";

  const words = aboutme.split(" ");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="about-section text-center d-flex flex-column align-items-center justify-content-center"
      id="about">
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
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
        whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className='text-center text-muted mx-auto mv-abt-description' style={{ maxWidth: '900px' }}>
          <p className='p-description'>I'm Sathuragiri, currently pursuing a B.Tech in Computer Science and Engineering at Kalasalingam Academy of Research and Education. I have a strong foundation in both front-end and back-end development, with a keen interest in building scalable and user-friendly applications.</p>
          <p className='p-description'>During my academic journey, I had the opportunity to intern at Greenitive Technology Private Limited, where I worked on a live project as part of the front-end development team. I contributed to building real-time web interfaces using Angular, HTML, CSS, and TypeScript.</p>
          <p className='p-description'>Throughout my studies, I've completed several academic and personal projects that have helped me strengthen my skills in web and app development. I’m always eager to explore new tools and stay up to date with the latest industry trends.</p>
          <p className='p-description'>I'm passionate about continuously learning new technologies and solving real-world problems. I'm excited to begin my career journey and am open to opportunities where I can learn, contribute, and grow alongside experienced professionals—helping me evolve both creatively and technically.</p>
        </div>
      </motion.div>
    </section>
  )
}
