import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/select-user-type');
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Career Passport</h1>
          <h2>Your Guide to the Future</h2>
          <p>Discover your career path with personalized guidance and resources</p>
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.svg" alt="Career Guidance" />
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>How We Can Help You</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🔍</div>
              <h3>Career Discovery</h3>
              <p>Explore various career options based on your interests and skills</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📚</div>
              <h3>Educational Guidance</h3>
              <p>Get advice on choosing the right educational path for your goals</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💼</div>
              <h3>Professional Development</h3>
              <p>Resources and tips for career advancement and skill development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;