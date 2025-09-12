import React from 'react';
import { Link } from 'react-router-dom';function Contact_Us() {
  return (
     
    <main>
            <div className="page-header">
                <h1>Contact Us</h1>
                <p>We are here to answer your inquiries and receive your feedback 24 hours a day</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    
                    <div className="info-item">
                        <div className="info-icon">📍</div>
                        <div className="info-content">
                            <h3>Address</h3>
                            <p>Yemen, Sana'a</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <div className="info-icon">📞</div>
                        <div className="info-content">
                            <h3>Phone</h3>
                            <p>+967 775715858</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <div className="info-icon">✉️</div>
                        <div className="info-content">
                            <h3>Email</h3>
                            <p>info@team.com</p>
                            <p>support@team.com</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <div className="info-icon">🕒</div>
                        <div className="info-content">
                            <h3>Business Hours</h3>
                            <p>24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </div>
                
                <div className="contact-form">
                    <h2>Send a Message</h2>
                    <form id="contactForm">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email"  />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <select id="subject" required>
                                <option >Select a subject</option>
                                <option value={Inquiry}>Inquiry</option>
                                <option value={Suggestion}>Suggestion</option>
                                <option value={Complaint}>Complaint</option>
                                <option value={Technical_Support}>Technical Support</option>
                                <option value={Other}>Other</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" required></textarea>
                        </div>
                        
                        <button type="submit" className="btn">📤 Send Message</button>
                    </form>
                </div>
            </div>

            <div className="map-section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7804.022322899881!2d44.20642267614517!3d15.369486999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16078dd7e691a0e1%3A0x9e583f1a2c3e5f7!2sSana'a%2C%20Yemen!5e0!3m2!1sen!2sus!4v1689876543210!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
            </div>

            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                
                <div className="faq-item">
                    <div className="faq-question">
                        How can I request a service?
                        <span>+</span>
                    </div>
                    <div className="faq-answer">
                        <p>You can request a service by filling out the contact form above and our team will contact you within 24 hours. You can also call us directly at the number listed.</p>
                    </div>
                </div>
                
                <div className="faq-item">
                    <div className="faq-question">
                        What are your business hours?
                        <span>+</span>
                    </div>
                    <div className="faq-answer">
                        <p>We operate 24 hours a day, 7 days a week. We receive calls and messages at any time and will respond to you as soon as possible.</p>
                    </div>
                </div>
                
                <div className="faq-item">
                    <div className="faq-question">
                        Do you provide technical support?
                        <span>+</span>
                    </div>
                    <div className="faq-answer">
                        <p>Yes, we provide 24/7 technical support. You can call +967 775715858 or send an email to support@team.com.</p>
                    </div>
                </div>
                
                <div className="faq-item">
                    <div className="faq-question">
                        What is the project implementation period?
                        <span>+</span>
                    </div>
                    <div className="faq-answer">
                        <p>The implementation period varies depending on the nature and complexity of the project. After discussing your requirements, we will provide you with a detailed timeline that includes implementation and delivery stages.</p>
                    </div>
                </div>
            </div>
        </main>

  );
}

export default Contact_Us;