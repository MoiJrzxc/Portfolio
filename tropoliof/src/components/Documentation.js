import React from 'react';
import Card from './Card';
import './cardStyle.css';

const docs = [
  { image: '/images/GTA6.jpg', title: 'AWS Student Community' },
  { image: '/images/06.jpg', title: 'AWS Cloud Computing Tutor Part 1' },
  { image: '/images/02.jpg', title: 'AWS Cloud Computing Tutor Part 2' },
  { image: '/images/03.jpeg', title: 'ACSS Competition' },
  { image: '/images/04.jpg', title: '1CS-A' },
  { image: '/images/Co-Head Tech.JPG', title: 'Lagunatech Technical Comittee' },
];

export default function Documentation() {
  return (
    <section id="documentaion" className="documentation">
      <h1 className="picture-title">Documentation</h1>
      <div className="container-card">
        {docs.map((d, i) => (
          <Card key={i} image={d.image} title={d.title} />
        ))}
      </div>
    </section>
  );
}
