// Career data
        const careersData = [
        {
        
            id: 1,
            title: "Software Developer",
            description: "Specializes in designing, developing, and testing software and applications using various programming languages.",
            skills: ["JavaScript", "Python", "HTML/CSS", "Databases", "Problem Solving"],
            education: "Bachelor's degree in Computer Science or Software Engineering",
            salary_range: "$60,000 - $100,000 per year",
            image: "../src/assets/images/116d99a8-1d94-482e-885c-86d882a5d3df.png",
            category: "Technology"
        },
        {
            id: 2,
            title: "Dentist",
            description: "Specializes in diagnosing, treating, and preventing oral and dental diseases.",
            skills: ["Diagnosis", "Treatment", "Patient Communication", "Precision", "Working Under Pressure"],
            education: "Bachelor's degree in Dentistry and a professional license",
            salary_range: "$80,000 - $150,000 per year",
            image: "../src/assets/images/istockphoto-1942685818-612x612.jpg",
            category: "Health"
        },
        {
            id: 3,
            title: "Civil Engineer",
            description: "Specializes in designing, planning, and executing construction projects such as buildings, bridges, and roads.",
            skills: ["Structural Design", "Project Management", "AutoCAD", "Analysis", "Planning"],
            education: "Bachelor's degree in Civil Engineering",
            salary_range: "$65,000 - $110,000 per year",
            image: "../src/assets/images/pexels-pixabay-416405.jpg",
            category: "Engineering"
        },
        {
            id: 4,
            title: "Teacher",
            description: "Teaches students at various educational levels and develops educational curricula.",
            skills: ["Communication", "Planning", "Creativity", "Patience", "Classroom Management"],
            education: "Bachelor's degree in Education or a specialized field",
            salary_range: "$40,000 - $70,000 per year",
            image: "../src/assets/images/2072b714-36bd-4379-97a4-f87a08616a80.png",
            category: "Education"
        },
        {
            id: 5,
            title: "Accountant",
            description: "Specializes in managing financial records and accounting data, and preparing financial reports.",
            skills: ["Accounting", "Financial Analysis", "Accounting Software", "Accuracy", "Attention to Detail"],
            education: "Bachelor's degree in Accounting or Finance",
            salary_range: "$45,000 - $85,000 per year",
            image: "../src/assets/images/27f96eb1-8a7d-4664-a18e-112ce44082cd.png",
            category: "Commerce"
        },
        {
            id: 6,
            title: "Nurse",
            description: "Provides healthcare to patients and supports doctors in diagnosis and treatment.",
            skills: ["Caregiving", "Empathy", "Working Under Pressure", "Medical Knowledge", "Teamwork"],
            education: "Bachelor's degree in Nursing and a professional license",
            salary_range: "$50,000 - $80,000 per year",
            image: "../src/assets/images/istockphoto-2155531264-612x612.jpg",
            category: "Health"
        }
        ];

        // Filtering and sorting functions
        document.addEventListener('DOMContentLoaded', function() {
            const careersContainer = document.getElementById('careers-container');
            const categoryFilter = document.getElementById('category-filter');
            const salaryFilter = document.getElementById('salary-filter');
            const sortOption = document.getElementById('sort-option');
            const searchInput = document.getElementById('search-input');
            const resetButton = document.getElementById('reset-filters');
            
            // Render careers
            function renderCareers(careers) {
                careersContainer.innerHTML = '';
                
                if (careers.length === 0) {
                    careersContainer.innerHTML = '<p class="no-results">No results found</p>';
                    return;
                }
                
                careers.forEach(career => {
                    const careerCard = document.createElement('div');
                    careerCard.className = 'career-card';
                    
                    careerCard.innerHTML = `
                        <div class="card-image">
                            <img src="${career.image}" alt="${career.title}">
                        </div>
                        <div class="card-content">
                            <h3>${career.title}</h3>
                            <p>${career.description}</p>
                            <div class="skills">
                                ${career.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                            </div>
                            <div class="card-details">
                                <div class="detail-item">
                                    <span>Education Path:</span>
                                    <span class="education">${career.education}</span>
                                </div>
                                <div class="detail-item">
                                    <span>Salary Range:</span>
                                    <span class="salary">${career.salary_range}</span>
                                </div>
                                <div class="detail-item">
                                    <span>Field:</span>
                                    <span>${career.category}</span>
                                </div>
                            </div>
                            <button class="apply-btn" onclick="applyForJob(${career.id})">
                                <i class="fas fa-paper-plane"></i> Apply for this Job
                            </button>
                        </div>
                    `;
                    
                    careersContainer.appendChild(careerCard);
                });
            }
            
            // Apply filters and sorting
            function applyFilters() {
                const categoryValue = categoryFilter.value;
                const salaryValue = salaryFilter.value;
                const sortValue = sortOption.value;
                const searchValue = searchInput.value.toLowerCase();
                
                let filteredCareers = careersData.filter(career => {
                    let matchesCategory = true;
                    let matchesSalary = true;
                    let matchesSearch = true;
                    
                    if (categoryValue && career.category !== categoryValue) {
                        matchesCategory = false;
                    }
                    
                    if (salaryValue) {
                        const minSalary = career.salary_range.split(' - ')[0].replace(/,/g, '');
                        if (salaryValue === 'low' && parseInt(minSalary) > 50000) matchesSalary = false;
                        if (salaryValue === 'medium' && (parseInt(minSalary) < 50000 || parseInt(minSalary) > 80000)) matchesSalary = false;
                        if (salaryValue === 'high' && parseInt(minSalary) < 80000) matchesSalary = false;
                    }
                    
                    if (searchValue && !career.title.toLowerCase().includes(searchValue) && 
                        !career.description.toLowerCase().includes(searchValue)) {
                        matchesSearch = false;
                    }
                    
                    return matchesCategory && matchesSalary && matchesSearch;
                });
                
                // Sort the results
                if (sortValue === 'title') {
                    filteredCareers.sort((a, b) => a.title.localeCompare(b.title));
                } else if (sortValue === 'salary-asc') {
                    filteredCareers.sort((a, b) => {
                        const aMin = parseInt(a.salary_range.split(' - ')[0].replace(/,/g, ''));
                        const bMin = parseInt(b.salary_range.split(' - ')[0].replace(/,/g, ''));
                        return aMin - bMin;
                    });
                } else if (sortValue === 'salary-desc') {
                    filteredCareers.sort((a, b) => {
                        const aMax = parseInt(a.salary_range.split(' - ')[1].replace(/,/g, '').split(' ')[0]);
                        const bMax = parseInt(b.salary_range.split(' - ')[1].replace(/,/g, '').split(' ')[0]);
                        return bMax - aMax;
                    });
                }
                
                renderCareers(filteredCareers);
            }
            
            // Add event listeners
            categoryFilter.addEventListener('change', applyFilters);
            salaryFilter.addEventListener('change', applyFilters);
            sortOption.addEventListener('change', applyFilters);
            searchInput.addEventListener('input', applyFilters);
            resetButton.addEventListener('click', function() {
                categoryFilter.value = '';
                salaryFilter.value = '';
                sortOption.value = 'title';
                searchInput.value = '';
                applyFilters();
            });
            
            // Initial render
            renderCareers(careersData);
        });
        
        // Function to handle job application
        function applyForJob(jobId) {
            const job = careersData.find(c => c.id === jobId);
            if (job) {
                // Corrected the alert message syntax
            alert(`Thank you for your interest in the ${job.title} position! Your application has been received.`);
            // Here you can add additional logic, such as directing the user to a form or sending data to the server
            }
        }