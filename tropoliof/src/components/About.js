import React, { useState } from 'react';

export default function About() {
  const [tab, setTab] = useState('skills');

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="/images/ID.png" alt="ID" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About me</h1>
            <p>Hi, I’m Moises Fatal Jr., a passionate and driven computer science student with a strong interest in programming, cloud technologies, and project management. I enjoy turning ideas into practical solutions and continuously learning new skills to tackle challenges creatively. Beyond academics, I have experience leading teams and organizing projects, which has strengthened my collaboration and problem-solving abilities.</p>

            <div className="tab-titles">
              <p className={`tab-links ${tab === 'skills' ? 'active-link' : ''}`} onClick={() => setTab('skills')}>Skills</p>
              <p className={`tab-links ${tab === 'experience' ? 'active-link' : ''}`} onClick={() => setTab('experience')}>Experience</p>
              <p className={`tab-links ${tab === 'education' ? 'active-link' : ''}`} onClick={() => setTab('education')}>Education</p>
            </div>

            <div className={`tab-contents ${tab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li>
                  <span>Programming</span><br />Java
                </li>
                <li>
                  <span>Web Development</span><br />HTML/CSS
                </li>
                <li>
                  <span>Playing</span><br />Valorant
                </li>
              </ul>
            </div>

            <div className={`tab-contents ${tab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <ul>
                <li>
                  <span>Participant</span><br />AWS Cloud Club Inauguration and Cloud Computing Seminar
                </li>
                <li>
                  <span>Co-Head</span><br />Technical Committee LagunaTech 2024
                </li>
                <li>
                  <span>Competitor</span><br />AWS Cloud Session Tutor
                </li>
              </ul>
            </div>

            <div className={`tab-contents ${tab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li>
                  <span>University of Cabuyao</span><br />College - BS in Computer Science
                </li>
                <li>
                  <span>University of Cabuyao - SHS Department</span><br />Senior High School - Enhance S.T.E.M.
                </li>
                <li>
                  <span>Infant Jesus Montessori Center Annex II</span><br />Junior High School
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
