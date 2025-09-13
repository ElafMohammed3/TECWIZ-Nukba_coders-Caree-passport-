import React from 'react';
import { Link } from 'react-router-dom';
import '.\src\assets\Content Bookmarking System.js'
import '.\src\assets\Content_Bookmarking_System.css'

function Content_Bookmarking_System() {
  return (
        <main>
                <nav>
            <ul>
                <li><a href="#" className="nav-link active" data-page="home">🏠 Home</a></li>
                <li><a href="#" className="nav-link" data-page="bookmarks">
                    📑 My Bookmarks (<span className="bookmark-count">0</span>)
                </a></li>
                <li><a href="#" className="nav-link" data-page="upload">📤 Upload File</a></li>
            </ul>
        </nav>

            {/* <!-- Home Page --> */}
            <div id="homePage" className="page-content">
                <div className="hero">
                    <h2>Welcome to Your Career Guide</h2>
                    <p>Discover your future career and build your professional path with us</p>
                </div>

                <div className="content-grid">
                    {/* <!-- Career Card 1 --> */}
                    <div className="content-card">
                        <h3>Software Engineer</h3>
                        <p>Specializes in designing and developing software systems and applications. Requires programming and problem-solving skills.</p>
                        <div className="card-footer">
                            <span className="bookmark-type">💻 Career</span>
                            <button className="bookmark-btn" data-id="career-001" data-type="career" 
                                    data-title="Software Engineer" data-url="#software-engineer">
                                ♥ Save
                            </button>
                        </div>
                    </div>

                    {/* <!-- Video Card --> */}
                    <div className="content-card">
                        <h3>Video: Future of Tech Work</h3>
                        <p>Watch this video to understand job market trends in the tech field for the coming years.</p>
                        <div className="card-footer">
                            <span className="bookmark-type">🎥 Video</span>
                            <button className="bookmark-btn" data-id="video-001" data-type="video" 
                                    data-title="Video: Future of Tech Work" data-url="#tech-future">
                                ♥ Save
                            </button>
                        </div>
                    </div>

                    {/* <!-- Success Story Card --> */}
                    <div className="content-card">
                        <h3>Success Story: From Student to Entrepreneur</h3>
                        <p>How Ahmed built his startup through his passion for programming.</p>
                        <div className="card-footer">
                            <span className="bookmark-type">🌟 Success Story</span>
                            <button className="bookmark-btn" data-id="story-001" data-type="story" 
                                    data-title="Success Story: From Student to Entrepreneur" data-url="#success-story">
                                ♥ Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Upload Page --> */}
            <div id="uploadPage" className="page-content bookmarks-page">
                <div className="page-header">
                    <h1>📤 Upload Your Files</h1>
                    <p>Add your images, PDFs, or videos to bookmarks</p>
                </div>

                <div className="upload-section">
                    <form className="upload-form" id="uploadhtmlForm">
                        <div>
                            <label htmlFor="fileInput" className="btn btn-primary">📁 Choose File</label>
                            <input type="file" id="fileInput" accept="image/*,.pdf,video/*" style={{display: none}} onChange="previewFile()" />
                        </div>

                        <div id="filePreview" className="file-preview">
                            <img id="imagePreview" className="upload-preview"/>
                            <video id="videoPreview" className="upload-preview" controls></video>
                            <div id="pdfPreview" className="pdf-preview upload-preview">📄 PDF Preview</div>
                        </div>

                        <input type="text" id="fileTitle" placeholder="File Title" />

                        <textarea id="fileDescription" placeholder="File Description" ></textarea>
                                  {/* style="padding: 1rem; border: 2px solid #B6E1EB; border-radius: 10px; min-height: 100px;" */}

                        <button type="button" className="btn btn-primary" onClick="uploadFile()">💾 Save File</button>
                    </form>
                </div>

                <div className="bookmarks-grid" id="uploadedFiles">
                    {/* <!-- Uploaded files will appear here --> */}
                </div>
            </div>

            {/* <!-- Bookmarks Page --> */}
            <div id="bookmarksPage" className="page-content bookmarks-page">
                <div className="page-header">
                    <h1>My Personal Bookmarks</h1>
                    <p>Manage all items you have saved</p>
                </div>

                <div className="bookmarks-actions">
                    <button className="btn btn-primary" onClick="exportBookmarks('json')">
                        💾 Export as JSON
                    </button>
                    <button className="btn btn-danger" onClick="clearAllBookmarks()">
                        🗑️ Delete All
                    </button>
                </div>

                <div id="bookmarksList" className="bookmarks-grid">
                    {/* <!-- Bookmarks will be populated here via JavaScript --> */}
                </div>

                <div id="emptyState" className="empty-state">
                    <div className="empty-icon">📁</div>
                    <h3>No Saved Items Yet</h3>
                    <p>Start exploring careers and resources and save what you like</p>
                    <button className="btn btn-primary" onClick="showPage('home')">
                        Explore Now
                    </button>
                </div>
            </div>
        </main>
  );
}

export default Content_Bookmarking_System;