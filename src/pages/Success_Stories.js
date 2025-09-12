import React from 'react';
import { Link } from 'react-router-dom';

function AbSuccess_Storiesout() {
  return (
    
    <main className="container">
        <div className="tabs-container">
            <ul className="tabs">
                <li><a href="#stories-tab" className="tab-link active">Browse Stories</a></li>
                <li><a href="#share-tab" className="tab-link">Share Your Story</a></li>
            </ul>
        </div>
        
        <div id="stories-tab" className="tab-content active">
            <div className="inspiration-quote">
                <h2><i className="fas fa-quote-right"></i> There are no shortcuts to any place worth going <i className="fas fa-quote-left"></i></h2>
                <p>Listen to the experiences of inspiring people and build your path to success</p>
            </div>

            <div className="controls">
                <h2>Filter by Field</h2>
                <div className="filter-buttons">
                    <button className="filter-btn active" data-category="all">All Fields</button>
                    <button className="filter-btn" data-category="Engineering">Engineering</button>
                    <button className="filter-btn" data-category="Medicine">Medicine</button>
                    <button className="filter-btn" data-category="Arts">Arts</button>
                    <button className="filter-btn" data-category="Technology">Technology</button>
                    <button className="filter-btn" data-category="Education">Education</button>
                </div>
            </div>
            
            <div className="stories-grid" id="stories-container">
                </div>
            
            <div className="empty-state" id="empty-state">
                <i className="fas fa-search"></i>
                <h3>No stories in this field</h3>
                <p>Try selecting another field or browse all available stories</p>
                <button className="filter-btn active" data-category="all">Show All Stories</button>
            </div>
        </div>
        
        <div id="share-tab" className="tab-content">
            <div className="share-story-container">
                <div className="form-header">
                    <h2>Tell us about your journey to success</h2>
                    <p>Sharing your experience may inspire someone else starting their journey</p>
                </div>
                
                <form id="storyForm" className="story-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" className="form-control" placeholder="example@email.com" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="jobTitle">Current Job Title</label>
                        <input type="text" id="jobTitle" className="form-control" placeholder="Example: Web Developer, Engineer, etc..." required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="company">Company / Organization</label>
                        <input type="text" id="company" className="form-control" placeholder="Company or organization name" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="category">Field</label>
                        <select id="category" className="form-control" required>
                            <option>Choose your field of work</option>
                            <option value={Technology}>Technology</option>
                            <option value={Engineering}>Engineering</option>
                            <option value={Medicine}>Medicine</option>
                            <option value={Education}>Education</option>
                            <option value={Arts}>Arts</option>
                            <option value={Business}>Business</option>
                            <option value={Other}>Other Field</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="years">Years of Experience</label>
                        <input type="number" id="years" className="form-control" min="1" max="50" placeholder="Number of years" required />
                    </div>
                    
                    <div className="form-group full-width">
                        <label htmlFor="quote">Inspirational Quote from Your Journey</label>
                        <textarea id="quote" className="form-control" placeholder="Write an inspiring quote that summarizes your journey or philosophy towards success..." required></textarea>
                        <div className="form-hint">Keep it short and powerful (one or two sentences)</div>
                    </div>
                    
                    <div className="form-group full-width">
                        <label htmlFor="journey">Your Journey to Success</label>
                        <textarea id="journey" className="form-control" placeholder="Tell us about your journey, the challenges you faced, and the lessons you learned..." required></textarea>
                        <div className="form-hint">Share the inspiring details of your journey (between 100-300 words)</div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="projects">Number of Notable Projects</label>
                        <input type="number" id="projects" className="form-control" min="0" placeholder="Number of significant projects" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="companies">Number of Companies You Worked For</label>
                        <input type="number" id="companies" className="form-control" min="1" placeholder="Number of companies" />
                    </div>
                    
                    <div className="form-group full-width">
                        <label htmlFor="photo">Personal Photo (Optional)</label>
                        <input type="file" id="photo" className="form-control" accept="image/*" />
                        <div className="form-hint">A clear photo with a neutral background is preferred</div>
                    </div>
                    
                    <div className="form-group full-width">
                        <label>
                            <input type="checkbox" required />
                            I agree to share my story as an inspiring example for others
                        </label>
                    </div>
                    
                    <button type="submit" className="submit-btn">
                        <i className="fas fa-paper-plane"></i> Share My Story
                    </button>
                </form>
                
                <div id="successMessage" className="success-message">
                    <i className="fas fa-check-circle"></i>
                    <h3>Thank you for sharing your story!</h3>
                    <p>Your story has been successfully received and will be reviewed before publishing. It may become a source of inspiration for many people.</p>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Success_Stories;