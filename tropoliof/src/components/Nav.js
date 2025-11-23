import React, { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div id="header">
      <nav>
        <img src="/images/Logo.png" className="logo" alt="logo" />

        <button
          className={`hamburger ${open ? 'is-active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <li><a className="active" href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#documentaion">Documentation</a></li>
          <li><a href="#philosophy">PNC</a></li>
          <li><a href="/schedule.html" target="_blank" rel="noreferrer">Schedule</a></li>
        </ul>
      </nav>
    </div>
  );
}
