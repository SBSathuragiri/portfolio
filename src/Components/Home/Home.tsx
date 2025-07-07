import React from 'react'
import { motion } from 'framer-motion';
import '../Home/Home.css';

export default function Home() {
  return (
    <section className="home-section d-flex align-items-center" id="home">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container text-center profile-container">
          <h1 className="display-4 fw-bold">Hi, I'm Sathuragiri</h1>
          <p className="lead">Full Stack Developer</p>

          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/sathuragiri22/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary me-3"
            >
              LinkedIn
            </a>
            {/* <a href="mailto:s.b.sathuragiri@gmail.com" className="btn btn-outline-primary me-3">
              Email Me
            </a> */}
            <a href="/resume.pdf" className="btn btn-outline-primary me-3" download>Resume</a>
          </div>
        </div>
        {/* <div className='d-flex justify-content-center align-items-center flex-row mt-4'>
          <p><FaLinkedin size={32} /></p>
          <p><FaGithub size={32} /></p>
          <p><FaDownload size={32} /></p>
        </div> */}
      </motion.div>
    </section>
  )
}
