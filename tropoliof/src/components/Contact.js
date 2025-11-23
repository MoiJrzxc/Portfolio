import React from 'react';
import { FaPaperPlane, FaPhone, FaFacebook, FaTwitterSquare, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><FaPaperPlane style={{ color: 'red', marginRight: 12, verticalAlign: 'middle' }} />Fatalmoises1231@gmail.com</p>
            <p><FaPhone style={{ color: 'red', marginRight: 12, verticalAlign: 'middle' }} /> 095654734469</p>
            <div className="social-icon">
              <a href="https://www.facebook.com/IImoises1231/" target="_blank" rel="noreferrer"><FaFacebook size={30} /></a>
              <a href="https://x.com/Mftlll" target="_blank" rel="noreferrer"><FaTwitterSquare size={30} /></a>
              <a href="https://www.instagram.com/heyy.mrfjr/" target="_blank" rel="noreferrer"><FaInstagram size={30} /></a>
              <a href="https://www.youtube.com/@moisesfataljr.4809" target="_blank" rel="noreferrer"><FaYoutube size={30} /></a>
            </div>

            <a href="/Portfolio/2nd year Representative USG-CCS.pdf" download className="btn">Download CV</a>
          </div>
          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="text" name="email" placeholder="Your Email" required />
              <textarea name="Message" rows={6} placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
