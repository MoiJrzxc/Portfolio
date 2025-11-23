import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'TTGAI Website',
      desc: 'A project demo hosted at the TTGAI Website.',
      link: 'https://moijrzxc.github.io/TTGAI-Website/'
    },
    {
      title: 'TechTreasure E‑commerce',
      desc: 'E-commerce demo showcasing product listing and basic checkout flow.',
      link: 'https://moijrzxc.github.io/E-commerce-TechTreasure/'
    }
  ];

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="btn">View</a>
          </article>
        ))}
      </div>
    </section>
  );
}
