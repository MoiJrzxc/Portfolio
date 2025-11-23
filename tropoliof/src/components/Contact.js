import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  // Replace FORM_ID with your Formspree form id (see instructions below)
  const FORMSPREE_ID = 'YOUR_FORMSPREE_ID_HERE';
  const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Formspree error response:', data);
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submit error', err);
      setStatus('error');
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><span style={{ color: 'red', marginRight: 12, verticalAlign: 'middle' }}>✉️</span>Fatalmoises1231@gmail.com</p>
            <p><span style={{ color: 'red', marginRight: 12, verticalAlign: 'middle' }}>📞</span> 095654734469</p>
            <div className="social-icon">
              <a href="https://www.facebook.com/IImoises1231/" target="_blank" rel="noreferrer">📘</a>
              <a href="https://x.com/Mftlll" target="_blank" rel="noreferrer">🐦</a>
              <a href="https://www.instagram.com/ctrlaltdelete.mrfjr/" target="_blank" rel="noreferrer">📸</a>
              <a href="https://www.youtube.com/@moisesfataljr.4809" target="_blank" rel="noreferrer">▶️</a>
            </div>

            <a href="/Portfolio/2nd year Representative USG-CCS.pdf" download className="btn">Download CV</a>
          </div>

          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button type="submit" className="btn btn2" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Submit'}
              </button>

              {status === 'success' && <p style={{ color: 'lightgreen', marginTop: 12 }}>Message sent — I'll reply soon.</p>}
              {status === 'error' && <p style={{ color: '#ff7777', marginTop: 12 }}>There was an error sending your message. Try again later.</p>}

              {FORMSPREE_ID === 'YOUR_FORMSPREE_ID_HERE' && (
                <p style={{ color: '#ffcc66', marginTop: 12 }}>
                  To enable form submission, replace <code>YOUR_FORMSPREE_ID_HERE</code> with your Formspree form id.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
