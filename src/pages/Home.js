import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./src/App.css"


const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/select-user-type');
  };
  

  return (
    
<div className="container">

    <div className="hero-section">
        <div className="hero-content">
           <h1 className="animated-title">Your Future Starts Now</h1>
            <p className="hero-description">
                Unlock your potential. Build your career. Our platform is your compass on the journey to professional excellence and innovation.
            </p>
        </div>
        <div className="hero-image">
            <img className="hero-image-placeholder" src=".\src\assets\images\computers.jpg" alt="An illustration of a person learning" />
        </div>
    </div>

    <div className="section user-input-section">
        <h2>Discover Your Path</h2>
        
        <label for="userType">I am a:</label>
        <select id="userType">
            <option value="">-- Choose User Type --</option>
            <option value="student">Student</option>
            <option value="graduate">Graduate</option>
            <option value="professional">Professional</option>
        </select>
        
        <div id="secondaryDropdownContainer" style={{display:none}}>
            <label for="secondarySelection">My Field is:</label>
            <select id="secondarySelection">
            </select>
        </div>

        <button onClick="saveUsername()">Start Your Journey</button>
    </div>

    <div className="section">
        <h2>How We Empower You</h2>
        <div className="features-grid">
            <div className="feature-item">
                <span className="icon">💡</span>
                <h3>Personalized Courses</h3>
                <p>Curated content tailored to your unique goals and learning style.</p>
            </div>
            <div className="feature-item">
                <span className="icon">🚀</span>
                <h3>Career Acceleration</h3>
                <p>Connect with leading companies and jumpstart your professional life.</p>
            </div>
            <div className="feature-item">
                <span className="icon">🎯</span>
                <h3>Expert Mentorship</h3>
                <p>Learn from industry leaders and get hands-on guidance to succeed.</p>
            </div>
        </div>
    </div>

    <div className="section user-selection">
        <h2>Your Tailored Resources</h2>
        <div className="resources" id="resourcesContainer" style={{display:none}}>
            <div id="personalGreeting"></div>
            <div id="resourcesList"></div>
        </div>
    </div>
  </div>
  );
};

export default Home;