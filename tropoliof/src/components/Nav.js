import React from 'react';

export default function Nav() {
  return (
    <div id="header">
      <nav>
        <img src="/images/Logo.png" className="logo" alt="logo" />
        <ul>
          <li><a className="active" href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#activities">Activities</a></li>
          <li><a href="#documentaion">Documentation</a></li>
          <li><a href="#philosophy">PNC</a></li>
          <li><a href="/schedule.html" target="_blank" rel="noreferrer">Schedule</a></li>
          <li><a href="https://moijrzxc.github.io/E-commerce-TechTreasure/" target="_top" rel="noreferrer">E-Commerce</a></li>
        </ul>
      </nav>
    </div>
  );
}
