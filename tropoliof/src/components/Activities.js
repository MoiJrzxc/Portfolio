import React from 'react';

const items = [
  { icon: 'fa-brands fa-square-web-awesome-stroke', title: 'Prelim', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ullam.', link: 'https://drive.google.com/drive/folders/16BH1BuKQVo_luzmKKxVwMoeDvmMXB0cD?usp=sharing' },
  { icon: 'fa-solid fa-sim-card', title: 'Midterm', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ullam.', link: 'https://drive.google.com/drive/folders/1Vcf1XzuzdmsdLFfFAm5jqzlgwstXXzb_?usp=sharing' },
  { icon: 'fa-solid fa-chalkboard-user', title: 'Finals', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ullam.', link: 'https://drive.google.com/drive/folders/11pzwXDPstKbvsYcFEB7fftQs4fDPgzVV?usp=sharing' },
];

export default function Activities() {
  return (
    <section id="activities">
      <div className="container">
        <h1 className="sub-title">Activities</h1>
        <div className="activities-list">
          {items.map((it, i) => (
            <div key={i}>
              <i className={it.icon}></i>
              <h2>{it.title}</h2>
              <p>{it.desc}</p>
              <a href={it.link} target="_blank" rel="noreferrer">See more.</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
