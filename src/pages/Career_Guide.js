import React from 'react';
import { Link } from 'react-router-dom';


function Career_Guide() {
  return (
        <main>
            <div id="homePage" class="page-content">
                <div class="hero">
                    <h2>Welcome to Your Career Guide</h2>
                    <p>Discover your future career and build your professional path with NextStep Navigator</p>
                </div>

                <div class="content-grid">
                    {/* <!-- Career Card 1 --> */}
                    <div class="content-card">
                        <h3>Software Engineer</h3>
                        <p>Specializes in designing and developing software systems and applications. Requires programming and problem-solving skills.</p>
                        <div class="card-footer">
                            <span class="bookmark-type">💻 Career</span>
                            <button class="bookmark-btn" data-id="career-001" data-type="career" 
                                    data-title="Software Engineer" data-url="#software-engineer">
                                ♥ Save
                            </button>
                        </div>
                    </div>

                    {/* <!-- Video Card --> */}
                    <div class="content-card">
                        <h3>Video: Future of Tech Work</h3>
                        <p>Watch this video to understand job market trends in the tech field for the coming years.</p>
                        <div class="card-footer">
                            <span class="bookmark-type">🎥 Video</span>
                            <button class="bookmark-btn" data-id="video-001" data-type="video" 
                                    data-title="Video: Future of Tech Work" data-url="#tech-future">
                                ♥ Save
                            </button>
                        </div>
                    </div>

                    {/* <!-- Success Story Card --> */}
                    <div class="content-card">
                        <h3>Success Story: From Student to Entrepreneur</h3>
                        <p>How Ahmed built his startup through his passion for programming.</p>
                        <div class="card-footer">
                            <span class="bookmark-type">🌟 Success Story</span>
                            <button class="bookmark-btn" data-id="story-001" data-type="story" 
                                    data-title="Success Story: From Student to Entrepreneur" data-url="#success-story">
                                ♥ Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Upload Page --> */}
          <div id="uploadPage" className="page-content bookmarks-page">
   <div class="page-header">
       <h1>📤 Upload Your Files</h1>
       <p>Add your images, PDFs, or videos to bookmarks</p>
   </div>
   <div class="upload-section">
       <form class="upload-form" id="uploadForm">
           <div>
               <label for="fileInput" class="btn btn-primary">
                   📁 Choose File
               </label>
               <input type="file" id="fileInput" accept="image/*,.pdf,video/*" style="display: none;" onchange="previewFile()"  />
           </div>
           <div id="filePreview" class="file-preview">
               <img id="imagePreview" class="upload-preview" />
               <video id="videoPreview" class="upload-preview" controls></video>
               <div id="pdfPreview" class="pdf-preview upload-preview">
                   📄 PDF Preview
               </div>
           </div>
           <input type="text" id="fileTitle" placeholder="File Title" style="padding: 1rem; border: 2px solid #B6E1EB; border-radius: 10px;"  />
           <textarea id="fileDescription" placeholder="File Description" 
                     style="padding: 1rem; border: 2px solid #B6E1EB; border-radius: 10px; min-height: 100px;"></textarea>
           <button type="button" class="btn btn-primary" onclick="uploadFile()">
               💾 Save File
           </button>
       </form>
   </div>
   <div class="bookmarks-grid" id="uploadedFiles">
                </div>
            </div>

            {/* <!-- Bookmarks Page --> */}
            <div id="bookmarksPage" class="page-content bookmarks-page">
                <div class="page-header">
                    <h1>My Personal Bookmarks</h1>
                    <p>Manage all items you have saved</p>
                </div>

                <div class="bookmarks-actions">
                    <button class="btn btn-primary" onclick="exportBookmarks('json')">
                        💾 Export as JSON
                    </button>
                    <button class="btn btn-danger" onclick="clearAllBookmarks()">
                        🗑️ Delete All
                    </button>
                </div>

                <div id="bookmarksList" class="bookmarks-grid">
                  
                </div>

                <div id="emptyState" class="empty-state">
                    <div class="empty-icon">📁</div>
                    <h3>No Saved Items Yet</h3>
                    <p>Start exploring careers and resources and save what you like</p>
                    <button class="btn btn-primary" onclick="showPage('home')">
                        Explore Now
                    </button>
                </div>
            </div>
        </main>
  );
}

export default Career_Guide;