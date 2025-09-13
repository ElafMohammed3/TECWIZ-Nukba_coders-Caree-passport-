// Media data
        const mediaData = [
            {
                id: 1,
                title: "Tips for new graduates to start in the job market",
                description: "A discussion with employment consultant Ahmed Al-Sayed on how new graduates can prepare for the job market and overcome initial challenges",
                type: "Video",
                category: "Motivation",
                userType: "New Graduates",
                youtubeId: "jNQXAC9IVRw",
                duration: "15:32",
                views: 12500,
                date: "2023-08-15",
                expert: "Ahmed Al-Sayed - Employment Consultant"
            },
            {
                id: 2,
                title: "How to plan a successful career path",
                description: "Listen to tips from professional expert Dr. Fatima Abdullah on how to create a successful career path plan and set professional goals",
                type: "Podcast",
                category: "Training",
                userType: "Students",
                audioUrl: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
                duration: "28:15",
                views: 8700,
                date: "2023-09-02",
                expert: "Dr. Fatima Abdullah - HR Consultant"
            },
            {
                id: 3,
                title: "Public speaking skills for career advancement",
                description: "An interactive workshop presented by communication trainer Mona Al-Shammari to improve presentation skills for influence in the workplace",
                type: "Video",
                category: "Skill Development",
                userType: "Professionals",
                youtubeId: "LipL7rEozt8",
                duration: "42:18",
                views: 23600,
                date: "2023-07-22",
                expert: "Mona Al-Shammari - Communication Trainer"
            },
            {
                id: 4,
                title: "Secrets to success in job interviews",
                description: "Learn effective strategies for successful job interviews through tips from employment expert Mohammed Hassan",
                type: "Podcast",
                category: "Job Interviews",
                userType: "Beginners",
                audioUrl: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
                duration: "35:42",
                views: 15300,
                date: "2023-09-18",
                expert: "Mohammed Hassan - Employment Expert"
            },
            {
                id: 5,
                title: "Roles and duties of a professional project manager",
                description: "A comprehensive introductory tour about the profession of project management with certified trainer Saeed Al-Murshidi",
                type: "Video",
                category: "Job Roles",
                userType: "Professionals",
                youtubeId: "5MgBikgcWnY",
                duration: "25:10",
                views: 18900,
                date: "2023-08-30",
                expert: "Saeed Al-Murshidi - Certified Project Management Trainer"
            },
            {
                id: 6,
                title: "How to build an attractive resume",
                description: "A practical workshop to learn how to create an effective resume that attracts the attention of recruiters",
                type: "Video",
                category: "Training",
                userType: "New Graduates",
                youtubeId: "R2e3G4NpEt4",
                duration: "18:27",
                views: 31200,
                date: "2023-09-10",
                expert: "Eman Abdelrahman - Employment Consultant"
            }
        ];

        // Filtering and sorting functions
        document.addEventListener('DOMContentLoaded', function() {
            const mediaContainer = document.getElementById('media-container');
            const categoryFilter = document.getElementById('category-filter');
            const userTypeFilter = document.getElementById('user-type-filter');
            const sortOption = document.getElementById('sort-option');
            const searchInput = document.getElementById('search-input');
            const resetButton = document.getElementById('reset-filters');
            const tabButtons = document.querySelectorAll('.tab-btn');
            
            let currentTab = 'all';
            let currentMedia = [...mediaData];
            
            // Render media
            function renderMedia(media) {
                mediaContainer.innerHTML = '';
                
                if (media.length === 0) {
                    mediaContainer.innerHTML = '<p class="no-results">No results found</p>';
                    return;
                }
                
                media.forEach(item => {
                    const mediaCard = document.createElement('div');
                    mediaCard.className = 'media-card';
                    
                    let mediaElement = '';
                    if (item.type === 'Video' && item.youtubeId) {
                        mediaElement = `
                            <iframe src="https://www.youtube.com/embed/${item.youtubeId}" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                            </iframe>
                        `;
                    } else {
                        mediaElement = `
                            <div class="media-placeholder">
                                <i class="fas fa-headphones"></i>
                            </div>
                        `;
                    }
                    
                    mediaCard.innerHTML = `
                        <div class="media-container">
                            ${mediaElement}
                        </div>
                        <div class="media-content">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                            
                            <div class="media-meta">
                                <span><i class="far fa-clock"></i> ${item.duration}</span>
                                <span><i class="far fa-eye"></i> ${item.views.toLocaleString()}</span>
                                <span><i class="far fa-calendar"></i> ${formatDate(item.date)}</span>
                            </div>
                            
                            <div class="media-tags">
                                <span class="media-tag type">${item.type}</span>
                                <span class="media-tag category">${item.category}</span>
                                <span class="media-tag">${item.userType}</span>
                            </div>
                            
                            <div class="expert">
                                <strong>Expert:</strong> ${item.expert}
                            </div>
                            
                            ${item.type === 'Podcast' ? `
                                <audio controls style="width: 100%; margin-top: 15px;">
                                    <source src="${item.audioUrl}" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio>
                            ` : `
                                <a href="https://www.youtube.com/watch?v=${item.youtubeId}" class="play-btn" target="_blank">
                                    <i class="fab fa-youtube"></i> Watch on YouTube
                                </a>
                            `}
                        </div>
                    `;
                    
                    mediaContainer.appendChild(mediaCard);
                });
            }
            
            // Convert date to readable format
            function formatDate(dateString) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return new Date(dateString).toLocaleDateString('en-US', options);
            }
            
            // Apply filters and sorting
            function applyFilters() {
                const categoryValue = categoryFilter.value;
                const userTypeValue = userTypeFilter.value;
                const sortValue = sortOption.value;
                const searchValue = searchInput.value.toLowerCase();
                
                let filteredMedia = mediaData.filter(item => {
                    // Apply active tab
                    if (currentTab !== 'all' && item.type !== (currentTab === 'videos' ? 'Video' : 'Podcast')) {
                        return false;
                    }
                    
                    let matchesCategory = true;
                    let matchesUserType = true;
                    let matchesSearch = true;
                    
                    if (categoryValue && item.category !== categoryValue) {
                        matchesCategory = false;
                    }
                    
                    if (userTypeValue && item.userType !== userTypeValue) {
                        matchesUserType = false;
                    }
                    
                    if (searchValue && 
                        !item.title.toLowerCase().includes(searchValue) && 
                        !item.description.toLowerCase().includes(searchValue) &&
                        !item.expert.toLowerCase().includes(searchValue)) {
                        matchesSearch = false;
                    }
                    
                    return matchesCategory && matchesUserType && matchesSearch;
                });
                
                // Sort results
                if (sortValue === 'newest') {
                    filteredMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
                } else if (sortValue === 'oldest') {
                    filteredMedia.sort((a, b) => new Date(a.date) - new Date(b.date));
                } else if (sortValue === 'popular') {
                    filteredMedia.sort((a, b) => b.views - a.views);
                }
                
                currentMedia = filteredMedia;
                renderMedia(currentMedia);
            }
            
            // Add event listeners
            categoryFilter.addEventListener('change', applyFilters);
            userTypeFilter.addEventListener('change', applyFilters);
            sortOption.addEventListener('change', applyFilters);
            searchInput.addEventListener('input', applyFilters);
            resetButton.addEventListener('click', function() {
                categoryFilter.value = '';
                userTypeFilter.value = '';
                sortOption.value = 'newest';
                searchInput.value = '';
                applyFilters();
            });
            
            // Tab events
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    currentTab = this.dataset.tab;
                    applyFilters();
                });
            });
            
            // Initial setup
            applyFilters();
        });