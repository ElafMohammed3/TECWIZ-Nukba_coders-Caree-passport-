import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
          <main>
            <div className="page-header">
                <h1>About Us</h1>
                <p>A team of dedicated programmers who started from scratch and became professionals</p>
            </div>

            <div className="about-content">
                <div className="about-text">
                    <h2>Our Story</h2>
                    <p>We started our journey just one year ago, a group of programming enthusiasts with no prior background in this field. We started from scratch, learning one language after another, and challenging ourselves daily to improve our skills.</p>
                    <p>The journey was full of challenges and difficulties, but our determination to learn and grow was stronger. We spent long hours studying and practicing, learning from our mistakes and celebrating our small successes.</p>
                    <p>Today, after just one year, we are proud of what we have achieved. We have become professional programmers who provide innovative technical solutions. We believe that passion and perseverance are the keys to success in any field, especially in the fast-paced world of programming.</p>
                    <p>Our journey is not over yet; in fact, we are still at the beginning of the road. We aspire to be among the best programmers in the region, and to contribute to the development of the technical community in Yemen and the Arab world.</p>
                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Team of programmers" />
                </div>
            </div>

            <div className="mission-vision">
                <div className="mission">
                    <h3>Our Mission</h3>
                    <p>To provide innovative and high-quality software solutions, and to contribute to the development of the technical community by sharing our knowledge and expertise with others.</p>
                </div>
                <div className="vision">
                    <h3>Our Vision</h3>
                    <p>To be a leading team in the field of programming and web development in Yemen and the Arab region, recognized for our technical excellence and creativity.</p>
                </div>
            </div>

            <div className="team-section">
                <h2>Our Team</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <div className="avatar">R</div>
                        <h3>Raed Al-Amri</h3>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="team-member">
                        <div className="avatar">A</div>
                        <h3>Asma Al-Hallak</h3>
                        <p>UI/UX Designer</p>
                    </div>
                    <div className="team-member">
                        <div className="avatar">E</div>
                        <h3>Elaf Mohammed</h3>
                        <p>Database Developer</p>
                    </div>
                    <div className="team-member">
                        <div className="avatar">A</div>
                        <h3>Aya Abdulkarim</h3>
                        <p>Quality Assurance Tester</p>
                    </div>
                    <div className="team-member">
                        <div className="avatar">D</div>
                        <h3>Dhah Eskander</h3>
                        <p>Mobile App Developer</p>
                    </div>
                    <div className="team-member">
                        <div className="avatar">A</div>
                        <h3>Abdulrahman Faid</h3>
                        <p>Backend Developer</p>
                    </div>
                </div>
            </div>
        </main>

  );
}

export default About;