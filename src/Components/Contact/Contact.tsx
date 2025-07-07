import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react'
import '../Contact/Contact.css';
import { FaEnvelopeOpenText } from "react-icons/fa";
import { TbPhoneCalling } from "react-icons/tb";
import { MdMessage, MdSubject } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import emailjs from 'emailjs-com';

export default function Contact() {

  const contact = "C o n t a c t - M e";

  const words = contact.split(" ");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [email, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');



  const sndmsg = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email || !phone || !message || !subject || !name) {
      alert('Please fill all the fields');
      return;
    }

    const templateParams = {
      "From Email": email,
      "name": name,
      "phone number": phone,
      "subject": subject,
      "message": message,
      "time": new Date().toLocaleString()
    };

    emailjs.send('service_fh95t1e', 'template_exe6s7w', templateParams, 'KgKoRpH_Rlyhqs1Tg')
      .then(() => {
        alert('Thank you for your message! i will get back to you soon.');
      })
      .catch((err: any) => {
        console.error('EmailJS Error:', err);
        alert('Something went wrong. Please try again later.');
      });
  };


  return (
    <section className='contact-section text-center d-flex flex-column align-items-center justify-content-center' id='contact'>

      <motion.div className="w-100 mb-4"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
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
          color: 'var(--text-primary)',
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

      <p className='mb-2' style={{ color: 'var(--text-secondary)', maxWidth: '800px' }} >I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, feel free to reach out!</p>

      <div className='text-center text-muted mx-auto contact-details' >
        <div className='contact-form'>
          <h1 className='contact-form-heading'>Drop me a line</h1>
          <p className='contact-description'>Let's talk about business!</p>
          <form className='contact-form-input'>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="bi bi-envelope"><CgProfile /></i></span>
              <input type="text" className="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="bi bi-envelope"><FaEnvelopeOpenText /></i></span>
              <input type="email" className="form-control" placeholder="Email" onChange={(e) => setMail(e.target.value)} />
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="bi bi-telephone-fill"><TbPhoneCalling /></i></span>
              <input type="tel" className="form-control" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="bi bi-telephone-fill"><MdSubject /></i></span>
              <input type="tel" className="form-control" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="bi bi-chat-left-dots"><MdMessage /></i></span>
              <textarea className="form-control" placeholder="Your Message" rows={4} onChange={(e) => setMessage(e.target.value)} ></textarea>
            </div>

            <button className="send-button mv-snd-btn" onClick={sndmsg}>Send</button>
          </form>
        </div>
      </div>

    </section>
  )
}
