 // Resource data
        const resourcesData = [
            {
                id: 1,
                title: "Job Search Guide",
                description: "A comprehensive guide providing practical tips for job searching, resume writing, and successful personal interviews.",
                type: "E-books",
                format: "PDF",
                image: "../src/assets/images/1eb43d98-54d9-47ad-ba5e-a308529e6449.png",
                link: "#",
                date: "2023-10-15"
            },
            {
                id: 2,
                title: "How to build a professional network",
                description: "A detailed article on the importance of professional networking and how to build and develop it to enhance your career opportunities.",
                type: "Articles",
                format: "Article",
                image: "../src/assets/images/200a0989-ab30-4515-896b-b2554e4d235c.png",
                link: "#",
                date: "2023-09-22"
            },
            {
                id: 3,
                title: "Job application checklist",
                description: "A checklist to help you ensure you have completed all requirements before applying for any job.",
                type: "Checklists",
                format: "PDF",
                image: "../src/assets/images/istockphoto-1465188429-612x612.jpg",
                link: "#",
                date: "2023-11-05"
            },
            {
                id: 4,
                title: "Webinar: The future of work in technology",
                description: "An online webinar discussing the latest trends in the technology job market and the skills required for the future.",
                type: "Webinars",
                format: "Video",
                image: "../src/assets/images/efc42edb-afa2-4239-997a-c4e5a2000893.png",
                link: "#",
                date: "2023-08-30"
            },
            {
                id: 5,
                title: "Infographic: Career development paths",
                description: "An illustrative diagram showing the different career development paths in various sectors and fields.",
                type: "Articles",
                format: "Infographic",
                image: "../src/assets/images/pexels-kindelmedia-7651554.jpg",
                link: "#",
                date: "2023-10-08"
            },
            {
                id: 6,
                title: "Salary negotiation guide",
                description: "An e-book that provides practical strategies and tips for negotiating salary and job benefits.",
                type: "E-books",
                format: "PDF",
                image: "../src/assets/images/13343151-dd34-4d25-9f9e-52daeb708912.png",
                link: "#",
                date: "2023-09-10"
            },
            {
                id: 7,
                title: "How to write the perfect cover letter",
                description: "An article that teaches you how to write an attractive cover letter that catches the attention of recruiters.",
                type: "Articles",
                format: "Article",
                image: "../src/assets/images/pexels-ann-h-45017-15368259.jpg",
                link: "#",
                date: "2023-11-12"
            },
            {
                id: 8,
                title: "Webinar: 21st century leadership skills",
                description: "An interactive online webinar exploring the essential leadership skills required in the modern world of work.",
                type: "Webinars",
                format: "Video",
                image: "../src/assets/images/pexels-rdne-9034219.jpg",
                link: "#",
                date: "2023-10-25"
            }
        ];

        // Filtering and sorting functions
        document.addEventListener('DOMContentLoaded', function() {
            const resourcesContainer = document.getElementById('resources-container');
            const categoryFilter = document.getElementById('category-filter');
            const formatFilter = document.getElementById('format-filter');
            const sortOption = document.getElementById('sort-option');
            const searchInput = document.getElementById('search-input');
            const resetButton = document.getElementById('reset-filters');
            
            // Render resources
            function renderResources(resources) {
                resourcesContainer.innerHTML = '';
                
                if (resources.length === 0) {
                    resourcesContainer.innerHTML = '<p class="no-results">No results found</p>';
                    return;
                }
                
                resources.forEach(resource => {
                    const resourceCard = document.createElement('div');
                    resourceCard.className = 'resource-card';
                    
                    resourceCard.innerHTML = `
                        <div class="card-image">
                            <img src="${resource.image}" alt="${resource.title}">
                            <span class="resource-type">${resource.type}</span>
                        </div>
                        <div class="card-content">
                            <h3>${resource.title}</h3>
                            <p>${resource.description}</p>
                            <div class="detail-item">
                                <span>Format:</span>
                                <span>${resource.format}</span>
                            </div>
                            <a href="${resource.link}" class="resource-link" target="_blank">
                                <i class="fas fa-external-link-alt"></i> View Resource
                            </a>
                        </div>
                    `;
                    
                    resourcesContainer.appendChild(resourceCard);
                });
            }
            
            // Apply filters and sorting
            function applyFilters() {
                const categoryValue = categoryFilter.value;
                const formatValue = formatFilter.value;
                const sortValue = sortOption.value;
                const searchValue = searchInput.value.toLowerCase();
                
                let filteredResources = resourcesData.filter(resource => {
                    let matchesCategory = true;
                    let matchesFormat = true;
                    let matchesSearch = true;
                    
                    if (categoryValue && resource.type !== categoryValue) {
                        matchesCategory = false;
                    }
                    
                    if (formatValue && resource.format !== formatValue) {
                        matchesFormat = false;
                    }
                    
                    if (searchValue && !resource.title.toLowerCase().includes(searchValue) && 
                        !resource.description.toLowerCase().includes(searchValue)) {
                        matchesSearch = false;
                    }
                    
                    return matchesCategory && matchesFormat && matchesSearch;
                });
                
                // Sort results
                if (sortValue === 'title') {
                    filteredResources.sort((a, b) => a.title.localeCompare(b.title));
                } else if (sortValue === 'newest') {
                    filteredResources.sort((a, b) => new Date(b.date) - new Date(a.date));
                } else if (sortValue === 'oldest') {
                    filteredResources.sort((a, b) => new Date(a.date) - new Date(b.date));
                }
                
                renderResources(filteredResources);
            }
            
            // Add event listeners
            categoryFilter.addEventListener('change', applyFilters);
            formatFilter.addEventListener('change', applyFilters);
            sortOption.addEventListener('change', applyFilters);
            searchInput.addEventListener('input', applyFilters);
            resetButton.addEventListener('click', function() {
                categoryFilter.value = '';
                formatFilter.value = '';
                sortOption.value = 'title';
                searchInput.value = '';
                applyFilters();
            });
            
            // Initial render
            renderResources(resourcesData);
        });