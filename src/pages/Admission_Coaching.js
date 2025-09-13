import React from 'react';
import { Link } from 'react-router-dom';
import  '.\src\assets\Admission and Coaching.css'
import '.\src\assets\Admission and Coaching.css'


function Admission_Coaching(){
  return (
          <main className="container">
        <div className="nav-container">
            <ul className="nav-tabs">
                <li><a href="#major-selection" className="nav-link active">Major Selection</a></li>
                <li><a href="#study-abroad" className="nav-link">Study Abroad</a></li>
                <li><a href="#interview-tips" className="nav-link">Interview Tips</a></li>
                <li><a href="#cv-guidance" className="nav-link">CV Guidance</a></li>
            </ul>
        </div>
        
        <div id="major-selection" className="section active">
            <div className="section-header">
                <h2>Major Selection (After 10th Grade)</h2>
                <p>A comprehensive guide to help you choose the right major for your academic and professional future</p>
            </div>
            
            <div className="content-box">
                <div className="text-content">
                    <h3>How to choose the right major?</h3>
                    <p>Choosing a major after 10th grade is a crucial decision that affects your academic and professional future. Here are some important points to consider:</p>
                    <ul>
                        <li>Determine your personal interests and inclinations</li>
                        <li>Evaluate your academic skills and abilities</li>
                        <li>Research job opportunities available for different majors</li>
                        <li>Consult with academic advisors and experienced professionals</li>
                        <li>Learn about future job market requirements</li>
                    </ul>
                </div>
                <div className="image-content">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Major Selection" />
                </div>
            </div>
            
            <div className="cards-container">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Scientific Majors" />
                    <div className="card-content">
                        <h3><i className="fas fa-brain"></i> Scientific Majors</h3>
                        <p>Includes engineering, medicine, pharmacy, and sciences. Requires analytical skills and abilities in math and science.</p>
                        <a href="#" className="card-btn">Explore More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Literary Majors" />
                    <div className="card-content">
                        <h3><i className="fas fa-book"></i> Literary Majors</h3>
                        <p>Includes literature, history, philosophy, and languages. Suitable for people with humanistic and social inclinations.</p>
                        <a href="#" className="card-btn">Explore More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Business Majors" />
                    <div className="card-content">
                        <h3><i className="fas fa-chart-line"></i> Business Majors</h3>
                        <p>Includes business administration, accounting, economics, and marketing. Suitable for people with administrative and business inclinations.</p>
                        <a href="#" className="card-btn">Explore More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="study-abroad" className="section">
            <div className="section-header">
                <h2>Study Abroad Guidance</h2>
                <p>Everything you need to know to plan your study journey outside your home country</p>
            </div>
            
            <div className="content-box">
                <div className="text-content">
                    <h3>How to prepare for studying abroad?</h3>
                    <p>Studying abroad is a rich experience that opens up new horizons and increases your career opportunities. Here are some important tips:</p>
                    <ul>
                        <li>Start planning at least one year in advance</li>
                        <li>Choose the right destination based on major, language, and cost</li>
                        <li>Prepare your academic documents and pass the required language tests</li>
                        <li>Learn about visa requirements and legal procedures</li>
                        <li>Look for scholarship and funding opportunities</li>
                    </ul>
                </div>
                <div className="image-content">
                    <img src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Studying Abroad" />
                </div>
            </div>
            
            <div className="guide-steps">
                <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                        <h3>Researching Universities</h3>
                        <p>Search for universities that offer the desired major and check their academic ranking and admission requirements.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                        <h3>Applying for Admission</h3>
                        <p>Prepare all required documents and make sure to meet the application deadlines.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                        <h3>Travel and Accommodation Arrangements</h3>
                        <p>Obtain the student visa, secure accommodation, and book your travel ticket.</p>
                    </div>
                </div>
            </div>
            
            <div className="cards-container">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Scholarships" />
                    <div className="card-content">
                        <h3><i className="fas fa-graduation-cap"></i> Scholarships</h3>
                        <p>Discover the best opportunities to get scholarships to cover the costs of study and living abroad.</p>
                        <a href="#" className="card-btn">Explore More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Language Tests" /> 
                    <div className="card-content">
                        <h3><i className="fas fa-language"></i> Language Tests</h3>
                        <p>Learn about the requirements for language tests like IELTS and TOEFL and how to prepare for them effectively.</p>
                        <a href="#" className="card-btn">Explore More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="interview-tips" className="section">
            <div className="section-header">
                <h2>Interview Tips (for Graduates and Professionals)</h2>
                <p>Prepare for job interviews with confidence and professionalism</p>
            </div>
            
            <div className="content-box">
                <div className="text-content">
                    <h3>How to succeed in a job interview?</h3>
                    <p>The personal interview is your chance to prove your competence and worthiness for the job. Here are some golden tips:</p>
                    <ul>
                        <li>Research the company and the nature of the work before the interview</li>
                        <li>Practice common questions and their answers</li>
                        <li>Choose appropriate and professional attire</li>
                        <li>Prepare your documents and papers in advance</li>
                        <li>Be confident and maintain eye contact</li>
                    </ul>
                </div>
                <div className="image-content">
                    <img src="https://images.unsplash.com/photo-1616587226157-48e49175ee20?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Job Interviews" />
                </div>
            </div>
            
            <div className="cards-container">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Common Questions" />
                    <div className="card-content">
                        <h3><i className="fas fa-comments"></i> Common Questions</h3>
                        <p>Anticipate questions like: "Tell me about yourself," "What are your strengths and weaknesses?", "Why do you want to work with us?"</p>
                        <a href="#" className="card-btn">Explore More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Questions to Ask" />
                    <div className="card-content">
                        <h3><i className="fas fa-question-circle"></i> Questions to Ask</h3>
                        <p>Prepare smart questions that show your genuine interest in the job and the company, such as: "What challenges will I face?"</p>
                        <a href="#" className="card-btn">Explore More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="After the Interview" />
                    <div className="card-content">
                        <h3><i className="fas fa-handshake"></i> After the Interview</h3>
                        <p>Send a thank-you note after the interview, ask for feedback if possible, and be patient while waiting for the results.</p>
                        <a href="#" className="card-btn">Explore More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="cv-guidance" className="section">
            <div className="section-header">
                <h2>CV Guidance (for Graduates and Professionals)</h2>
                <p>Create a professional resume that attracts the attention of employers</p>
            </div>
            
            <div className="content-box">
                <div className="text-content">
                    <h3>Writing an effective resume</h3>
                    <p>The resume is your gateway to the professional world. Here are some basic guidelines:</p>
                    <ul>
                        <li>Make your resume clear, organized, and easy to read</li>
                        <li>Focus on accomplishments, not just tasks</li>
                        <li>Customize your resume for each job you apply for</li>
                        <li>Use action verbs to describe your experiences</li>
                        <li>Review your resume carefully to avoid spelling and grammatical errors</li>
                    </ul>
                </div>
                <div className="image-content">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="CV" />
                </div>
            </div>
            
            <div className="guide-steps">
                <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                        <h3>Personal Information</h3>
                        <p>Include basic contact information: name, address, phone number, email, and LinkedIn links if available.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                        <h3>Professional Summary</h3>
                        <p>Write a concise summary (2-3 sentences) highlighting your key experiences, skills, and accomplishments.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                        <h3>Work Experience</h3>
                        <p>List your work experiences from newest to oldest, focusing on accomplishments, not just tasks.</p>
                    </div>
                </div>
                <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                        <h3>Skills and Education</h3>
                        <p>Include your educational qualifications and technical and soft skills relevant to the job.</p>
                    </div>
                </div>
            </div>
            
            <div className="cards-container">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="CV Templates" />
                    <div className="card-content">
                        <h3><i className="fas fa-file-download"></i> Ready-made Templates</h3>
                        <p>Download professional, editable resume templates with various designs and styles.</p>
                        <a href="#" className="card-btn">Download Templates <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Design Tips" />
                    <div className  ="card-content">
                        <h3><i className="fas fa-paint-brush"></i> Design Tips</h3>
                        <p>Learn how to design an attractive and easy-to-read resume while maintaining a professional appearance.</p>
                        <a href="#" className="card-btn">Explore More <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </main>

  );
}

export default Admission_and_Coaching;