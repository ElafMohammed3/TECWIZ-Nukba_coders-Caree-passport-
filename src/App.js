// Home

// Admission and coaching
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  const backToTopBtn = document.getElementById("backToTop");

  // Navigation between sections
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links and sections
      navLinks.forEach((l) => l.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));

      // Add active class to current link and section
      this.classList.add("active");
      const targetSection = this.getAttribute("href");
      document.querySelector(targetSection).classList.add("active");
    });
  });

  // Back to top button
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.opacity = "1";
      backToTopBtn.style.visibility = "visible";
    } else {
      backToTopBtn.style.opacity = "0";
      backToTopBtn.style.visibility = "hidden";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Career Bank
// Career data
const careersData = [
  {
    id: 1,
    title: "Software Developer",
    description:
      "Specializes in designing, developing, and testing software and applications using various programming languages.",
    skills: [
      "JavaScript",
      "Python",
      "HTML/CSS",
      "Databases",
      "Problem Solving",
    ],
    education: "Bachelor's degree in Computer Science or Software Engineering",
    salary_range: "$60,000 - $100,000 per year",
    image: "../src/assets/images/116d99a8-1d94-482e-885c-86d882a5d3df.png",
    category: "Technology",
  },
  {
    id: 2,
    title: "Dentist",
    description:
      "Specializes in diagnosing, treating, and preventing oral and dental diseases.",
    skills: [
      "Diagnosis",
      "Treatment",
      "Patient Communication",
      "Precision",
      "Working Under Pressure",
    ],
    education: "Bachelor's degree in Dentistry and a professional license",
    salary_range: "$80,000 - $150,000 per year",
    image: "../src/assets/images/istockphoto-1942685818-612x612.jpg",
    category: "Health",
  },
  {
    id: 3,
    title: "Civil Engineer",
    description:
      "Specializes in designing, planning, and executing construction projects such as buildings, bridges, and roads.",
    skills: [
      "Structural Design",
      "Project Management",
      "AutoCAD",
      "Analysis",
      "Planning",
    ],
    education: "Bachelor's degree in Civil Engineering",
    salary_range: "$65,000 - $110,000 per year",
    image: "../src/assets/images/pexels-pixabay-416405.jpg",
    category: "Engineering",
  },
  {
    id: 4,
    title: "Teacher",
    description:
      "Teaches students at various educational levels and develops educational curricula.",
    skills: [
      "Communication",
      "Planning",
      "Creativity",
      "Patience",
      "Classroom Management",
    ],
    education: "Bachelor's degree in Education or a specialized field",
    salary_range: "$40,000 - $70,000 per year",
    image: "../src/assets/images/2072b714-36bd-4379-97a4-f87a08616a80.png",
    category: "Education",
  },
  {
    id: 5,
    title: "Accountant",
    description:
      "Specializes in managing financial records and accounting data, and preparing financial reports.",
    skills: [
      "Accounting",
      "Financial Analysis",
      "Accounting Software",
      "Accuracy",
      "Attention to Detail",
    ],
    education: "Bachelor's degree in Accounting or Finance",
    salary_range: "$45,000 - $85,000 per year",
    image: "../src/assets/images/27f96eb1-8a7d-4664-a18e-112ce44082cd.png",
    category: "Commerce",
  },
  {
    id: 6,
    title: "Nurse",
    description:
      "Provides healthcare to patients and supports doctors in diagnosis and treatment.",
    skills: [
      "Caregiving",
      "Empathy",
      "Working Under Pressure",
      "Medical Knowledge",
      "Teamwork",
    ],
    education: "Bachelor's degree in Nursing and a professional license",
    salary_range: "$50,000 - $80,000 per year",
    image: "../src/assets/images/istockphoto-2155531264-612x612.jpg",
    category: "Health",
  },
];

// Filtering and sorting functions
document.addEventListener("DOMContentLoaded", function () {
  const careersContainer = document.getElementById("careers-container");
  const categoryFilter = document.getElementById("category-filter");
  const salaryFilter = document.getElementById("salary-filter");
  const sortOption = document.getElementById("sort-option");
  const searchInput = document.getElementById("search-input");
  const resetButton = document.getElementById("reset-filters");

  // Render careers
  function renderCareers(careers) {
    careersContainer.innerHTML = "";

    if (careers.length === 0) {
      careersContainer.innerHTML = '<p class="no-results">No results found</p>';
      return;
    }

    careers.forEach((career) => {
      const careerCard = document.createElement("div");
      careerCard.className = "career-card";

      careerCard.innerHTML = `
                        <div class="card-image">
                            <img src="${career.image}" alt="${career.title}">
                        </div>
                        <div class="card-content">
                            <h3>${career.title}</h3>
                            <p>${career.description}</p>
                            <div class="skills">
                                ${career.skills
                                  .map(
                                    (skill) =>
                                      `<span class="skill-tag">${skill}</span>`
                                  )
                                  .join("")}
                            </div>
                            <div class="card-details">
                                <div class="detail-item">
                                    <span>Education Path:</span>
                                    <span class="education">${
                                      career.education
                                    }</span>
                                </div>
                                <div class="detail-item">
                                    <span>Salary Range:</span>
                                    <span class="salary">${
                                      career.salary_range
                                    }</span>
                                </div>
                                <div class="detail-item">
                                    <span>Field:</span>
                                    <span>${career.category}</span>
                                </div>
                            </div>
                            <button class="apply-btn" onclick="applyForJob(${
                              career.id
                            })">
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

    let filteredCareers = careersData.filter((career) => {
      let matchesCategory = true;
      let matchesSalary = true;
      let matchesSearch = true;

      if (categoryValue && career.category !== categoryValue) {
        matchesCategory = false;
      }

      if (salaryValue) {
        const minSalary = career.salary_range.split(" - ")[0].replace(/,/g, "");
        if (salaryValue === "low" && parseInt(minSalary) > 50000)
          matchesSalary = false;
        if (
          salaryValue === "medium" &&
          (parseInt(minSalary) < 50000 || parseInt(minSalary) > 80000)
        )
          matchesSalary = false;
        if (salaryValue === "high" && parseInt(minSalary) < 80000)
          matchesSalary = false;
      }

      if (
        searchValue &&
        !career.title.toLowerCase().includes(searchValue) &&
        !career.description.toLowerCase().includes(searchValue)
      ) {
        matchesSearch = false;
      }

      return matchesCategory && matchesSalary && matchesSearch;
    });

    // Sort the results
    if (sortValue === "title") {
      filteredCareers.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === "salary-asc") {
      filteredCareers.sort((a, b) => {
        const aMin = parseInt(a.salary_range.split(" - ")[0].replace(/,/g, ""));
        const bMin = parseInt(b.salary_range.split(" - ")[0].replace(/,/g, ""));
        return aMin - bMin;
      });
    } else if (sortValue === "salary-desc") {
      filteredCareers.sort((a, b) => {
        const aMax = parseInt(
          a.salary_range.split(" - ")[1].replace(/,/g, "").split(" ")[0]
        );
        const bMax = parseInt(
          b.salary_range.split(" - ")[1].replace(/,/g, "").split(" ")[0]
        );
        return bMax - aMax;
      });
    }

    renderCareers(filteredCareers);
  }

  // Add event listeners
  categoryFilter.addEventListener("change", applyFilters);
  salaryFilter.addEventListener("change", applyFilters);
  sortOption.addEventListener("change", applyFilters);
  searchInput.addEventListener("input", applyFilters);
  resetButton.addEventListener("click", function () {
    categoryFilter.value = "";
    salaryFilter.value = "";
    sortOption.value = "title";
    searchInput.value = "";
    applyFilters();
  });

  // Initial render
  renderCareers(careersData);
});

// Function to handle job application
function applyForJob(jobId) {
  const job = careersData.find((c) => c.id === jobId);
  if (job) {
    // Corrected the alert message syntax
    alert(
      `Thank you for your interest in the ${job.title} position! Your application has been received.`
    );
    // Here you can add additional logic, such as directing the user to a form or sending data to the server
  }
}

// Multimedia Guidance
// Media data
const mediaData = [
  {
    id: 1,
    title: "Tips for new graduates to start in the job market",
    description:
      "A discussion with employment consultant Ahmed Al-Sayed on how new graduates can prepare for the job market and overcome initial challenges",
    type: "Video",
    category: "Motivation",
    userType: "New Graduates",
    youtubeId: "jNQXAC9IVRw",
    duration: "15:32",
    views: 12500,
    date: "2023-08-15",
    expert: "Ahmed Al-Sayed - Employment Consultant",
  },
  {
    id: 2,
    title: "How to plan a successful career path",
    description:
      "Listen to tips from professional expert Dr. Fatima Abdullah on how to create a successful career path plan and set professional goals",
    type: "Podcast",
    category: "Training",
    userType: "Students",
    audioUrl: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
    duration: "28:15",
    views: 8700,
    date: "2023-09-02",
    expert: "Dr. Fatima Abdullah - HR Consultant",
  },
  {
    id: 3,
    title: "Public speaking skills for career advancement",
    description:
      "An interactive workshop presented by communication trainer Mona Al-Shammari to improve presentation skills for influence in the workplace",
    type: "Video",
    category: "Skill Development",
    userType: "Professionals",
    youtubeId: "LipL7rEozt8",
    duration: "42:18",
    views: 23600,
    date: "2023-07-22",
    expert: "Mona Al-Shammari - Communication Trainer",
  },
  {
    id: 4,
    title: "Secrets to success in job interviews",
    description:
      "Learn effective strategies for successful job interviews through tips from employment expert Mohammed Hassan",
    type: "Podcast",
    category: "Job Interviews",
    userType: "Beginners",
    audioUrl: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
    duration: "35:42",
    views: 15300,
    date: "2023-09-18",
    expert: "Mohammed Hassan - Employment Expert",
  },
  {
    id: 5,
    title: "Roles and duties of a professional project manager",
    description:
      "A comprehensive introductory tour about the profession of project management with certified trainer Saeed Al-Murshidi",
    type: "Video",
    category: "Job Roles",
    userType: "Professionals",
    youtubeId: "5MgBikgcWnY",
    duration: "25:10",
    views: 18900,
    date: "2023-08-30",
    expert: "Saeed Al-Murshidi - Certified Project Management Trainer",
  },
  {
    id: 6,
    title: "How to build an attractive resume",
    description:
      "A practical workshop to learn how to create an effective resume that attracts the attention of recruiters",
    type: "Video",
    category: "Training",
    userType: "New Graduates",
    youtubeId: "R2e3G4NpEt4",
    duration: "18:27",
    views: 31200,
    date: "2023-09-10",
    expert: "Eman Abdelrahman - Employment Consultant",
  },
];

// Filtering and sorting functions
document.addEventListener("DOMContentLoaded", function () {
  const mediaContainer = document.getElementById("media-container");
  const categoryFilter = document.getElementById("category-filter");
  const userTypeFilter = document.getElementById("user-type-filter");
  const sortOption = document.getElementById("sort-option");
  const searchInput = document.getElementById("search-input");
  const resetButton = document.getElementById("reset-filters");
  const tabButtons = document.querySelectorAll(".tab-btn");

  let currentTab = "all";
  let currentMedia = [...mediaData];

  // Render media
  function renderMedia(media) {
    mediaContainer.innerHTML = "";

    if (media.length === 0) {
      mediaContainer.innerHTML = '<p class="no-results">No results found</p>';
      return;
    }

    media.forEach((item) => {
      const mediaCard = document.createElement("div");
      mediaCard.className = "media-card";

      let mediaElement = "";
      if (item.type === "Video" && item.youtubeId) {
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
                                <span><i class="far fa-clock"></i> ${
                                  item.duration
                                }</span>
                                <span><i class="far fa-eye"></i> ${item.views.toLocaleString()}</span>
                                <span><i class="far fa-calendar"></i> ${formatDate(
                                  item.date
                                )}</span>
                            </div>
                            
                            <div class="media-tags">
                                <span class="media-tag type">${item.type}</span>
                                <span class="media-tag category">${
                                  item.category
                                }</span>
                                <span class="media-tag">${item.userType}</span>
                            </div>
                            
                            <div class="expert">
                                <strong>Expert:</strong> ${item.expert}
                            </div>
                            
                            ${
                              item.type === "Podcast"
                                ? `
                                <audio controls style="width: 100%; margin-top: 15px;">
                                    <source src="${item.audioUrl}" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio>
                            `
                                : `
                                <a href="https://www.youtube.com/watch?v=${item.youtubeId}" class="play-btn" target="_blank">
                                    <i class="fab fa-youtube"></i> Watch on YouTube
                                </a>
                            `
                            }
                        </div>
                    `;

      mediaContainer.appendChild(mediaCard);
    });
  }

  // Convert date to readable format
  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }

  // Apply filters and sorting
  function applyFilters() {
    const categoryValue = categoryFilter.value;
    const userTypeValue = userTypeFilter.value;
    const sortValue = sortOption.value;
    const searchValue = searchInput.value.toLowerCase();

    let filteredMedia = mediaData.filter((item) => {
      // Apply active tab
      if (
        currentTab !== "all" &&
        item.type !== (currentTab === "videos" ? "Video" : "Podcast")
      ) {
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

      if (
        searchValue &&
        !item.title.toLowerCase().includes(searchValue) &&
        !item.description.toLowerCase().includes(searchValue) &&
        !item.expert.toLowerCase().includes(searchValue)
      ) {
        matchesSearch = false;
      }

      return matchesCategory && matchesUserType && matchesSearch;
    });

    // Sort results
    if (sortValue === "newest") {
      filteredMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortValue === "oldest") {
      filteredMedia.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortValue === "popular") {
      filteredMedia.sort((a, b) => b.views - a.views);
    }

    currentMedia = filteredMedia;
    renderMedia(currentMedia);
  }

  // Add event listeners
  categoryFilter.addEventListener("change", applyFilters);
  userTypeFilter.addEventListener("change", applyFilters);
  sortOption.addEventListener("change", applyFilters);
  searchInput.addEventListener("input", applyFilters);
  resetButton.addEventListener("click", function () {
    categoryFilter.value = "";
    userTypeFilter.value = "";
    sortOption.value = "newest";
    searchInput.value = "";
    applyFilters();
  });

  // Tab events
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      currentTab = this.dataset.tab;
      applyFilters();
    });
  });

  // Initial setup
  applyFilters();
});

// Resource Library
// Resource data
const resourcesData = [
  {
    id: 1,
    title: "Job Search Guide",
    description:
      "A comprehensive guide providing practical tips for job searching, resume writing, and successful personal interviews.",
    type: "E-books",
    format: "PDF",
    image: "../src/assets/images/1eb43d98-54d9-47ad-ba5e-a308529e6449.png",
    link: "#",
    date: "2023-10-15",
  },
  {
    id: 2,
    title: "How to build a professional network",
    description:
      "A detailed article on the importance of professional networking and how to build and develop it to enhance your career opportunities.",
    type: "Articles",
    format: "Article",
    image: "../src/assets/images/200a0989-ab30-4515-896b-b2554e4d235c.png",
    link: "#",
    date: "2023-09-22",
  },
  {
    id: 3,
    title: "Job application checklist",
    description:
      "A checklist to help you ensure you have completed all requirements before applying for any job.",
    type: "Checklists",
    format: "PDF",
    image: "../src/assets/images/istockphoto-1465188429-612x612.jpg",
    link: "#",
    date: "2023-11-05",
  },
  {
    id: 4,
    title: "Webinar: The future of work in technology",
    description:
      "An online webinar discussing the latest trends in the technology job market and the skills required for the future.",
    type: "Webinars",
    format: "Video",
    image: "../src/assets/images/efc42edb-afa2-4239-997a-c4e5a2000893.png",
    link: "#",
    date: "2023-08-30",
  },
  {
    id: 5,
    title: "Infographic: Career development paths",
    description:
      "An illustrative diagram showing the different career development paths in various sectors and fields.",
    type: "Articles",
    format: "Infographic",
    image: "../src/assets/images/pexels-kindelmedia-7651554.jpg",
    link: "#",
    date: "2023-10-08",
  },
  {
    id: 6,
    title: "Salary negotiation guide",
    description:
      "An e-book that provides practical strategies and tips for negotiating salary and job benefits.",
    type: "E-books",
    format: "PDF",
    image: "../src/assets/images/13343151-dd34-4d25-9f9e-52daeb708912.png",
    link: "#",
    date: "2023-09-10",
  },
  {
    id: 7,
    title: "How to write the perfect cover letter",
    description:
      "An article that teaches you how to write an attractive cover letter that catches the attention of recruiters.",
    type: "Articles",
    format: "Article",
    image: "../src/assets/images/pexels-ann-h-45017-15368259.jpg",
    link: "#",
    date: "2023-11-12",
  },
  {
    id: 8,
    title: "Webinar: 21st century leadership skills",
    description:
      "An interactive online webinar exploring the essential leadership skills required in the modern world of work.",
    type: "Webinars",
    format: "Video",
    image: "../src/assets/images/pexels-rdne-9034219.jpg",
    link: "#",
    date: "2023-10-25",
  },
];

// Filtering and sorting functions
document.addEventListener("DOMContentLoaded", function () {
  const resourcesContainer = document.getElementById("resources-container");
  const categoryFilter = document.getElementById("category-filter");
  const formatFilter = document.getElementById("format-filter");
  const sortOption = document.getElementById("sort-option");
  const searchInput = document.getElementById("search-input");
  const resetButton = document.getElementById("reset-filters");

  // Render resources
  function renderResources(resources) {
    resourcesContainer.innerHTML = "";

    if (resources.length === 0) {
      resourcesContainer.innerHTML =
        '<p class="no-results">No results found</p>';
      return;
    }

    resources.forEach((resource) => {
      const resourceCard = document.createElement("div");
      resourceCard.className = "resource-card";

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

    let filteredResources = resourcesData.filter((resource) => {
      let matchesCategory = true;
      let matchesFormat = true;
      let matchesSearch = true;

      if (categoryValue && resource.type !== categoryValue) {
        matchesCategory = false;
      }

      if (formatValue && resource.format !== formatValue) {
        matchesFormat = false;
      }

      if (
        searchValue &&
        !resource.title.toLowerCase().includes(searchValue) &&
        !resource.description.toLowerCase().includes(searchValue)
      ) {
        matchesSearch = false;
      }

      return matchesCategory && matchesFormat && matchesSearch;
    });

    // Sort results
    if (sortValue === "title") {
      filteredResources.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === "newest") {
      filteredResources.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortValue === "oldest") {
      filteredResources.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    renderResources(filteredResources);
  }

  // Add event listeners
  categoryFilter.addEventListener("change", applyFilters);
  formatFilter.addEventListener("change", applyFilters);
  sortOption.addEventListener("change", applyFilters);
  searchInput.addEventListener("input", applyFilters);
  resetButton.addEventListener("click", function () {
    categoryFilter.value = "";
    formatFilter.value = "";
    sortOption.value = "title";
    searchInput.value = "";
    applyFilters();
  });

  // Initial render
  renderResources(resourcesData);
});

// Success Stories
document.addEventListener("DOMContentLoaded", () => {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      tabLinks.forEach((item) => item.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));
      const targetId = e.target.getAttribute("href");
      e.target.classList.add("active");
      document.querySelector(targetId).classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("photo");
  const fileName = document.querySelector("#fileName span");
  const preview = document.getElementById("preview");

  fileInput.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      const file = this.files[0];

      /* show file name */
      fileName.textContent = file.name;

      /* image preview */
      if (file.type.match("image.*")) {
        const reader = new FileReader();

        reader.onload = function (e) {
          preview.src = e.target.result;
          preview.style.display = "block";
        };

        reader.readAsDataURL(file);
      }
    } else {
      fileName.textContent = "No file selected";
      preview.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // change default verification message
  const elements = document.querySelectorAll("input, textarea, select");

  elements.forEach((element) => {
    if (element.required && !element.title) {
      element.title = "Please fill out this field";
    }

    // prevent Arabic message from appearing
    element.oninvalid = function (e) {
      e.target.setCustomValidity("");
      if (!e.target.validity.valid) {
        if (e.target.type === "email") {
          e.target.setCustomValidity("Please enter a valid email address");
        } else {
          e.target.setCustomValidity("Please fill out this field");
        }
      }
    };

    element.oninput = function (e) {
      e.target.setCustomValidity("");
    };
  });
});

// Quiz
document.addEventListener("DOMContentLoaded", function () {
  // Data for quiz questions and results
  const quizData = [
    {
      question: "What attracts you most in a new project?",
      options: [
        {
          text: "Analyzing data and finding logical solutions.",
          type: "analytic",
        },
        {
          text: "Working with a team and interacting with others.",
          type: "social",
        },
        { text: "Inventing new, unconventional ideas.", type: "creative" },
        {
          text: "Implementing tasks in a practical and organized way.",
          type: "practical",
        },
      ],
    },
    {
      question: "How do you prefer to spend your weekend?",
      options: [
        {
          text: "Solving puzzles or learning a new technical skill.",
          type: "analytic",
        },
        { text: "Spending time with friends and family.", type: "social" },
        {
          text: "Practicing an artistic hobby like painting or writing.",
          type: "creative",
        },
        {
          text: "Fixing something at home or doing practical tasks.",
          type: "practical",
        },
      ],
    },
    {
      question: "What describes you best in a work environment?",
      options: [
        { text: "Organized and detail-oriented.", type: "analytic" },
        {
          text: "Invested in relationships and supportive of colleagues.",
          type: "social",
        },
        {
          text: "A creative thinker who thinks outside the box.",
          type: "creative",
        },
        {
          text: "A quick decision-maker and effective executor.",
          type: "practical",
        },
      ],
    },
    {
      question: "What do you do when you face a complex problem?",
      options: [
        {
          text: "Break it down into small parts and analyze it step-by-step.",
          type: "analytic",
        },
        {
          text: "Ask others for help and work with them to find a solution.",
          type: "social",
        },
        {
          text: "Think about unconventional and unexpected solutions.",
          type: "creative",
        },
        {
          text: "Start working immediately to find a practical solution.",
          type: "practical",
        },
      ],
    },
    {
      question: "What kind of tasks make you most enthusiastic?",
      options: [
        { text: "Designing complex systems or databases.", type: "analytic" },
        { text: "Training or advising others.", type: "social" },
        { text: "Writing stories or advertising copy.", type: "creative" },
        {
          text: "Managing a team or project to achieve a specific goal.",
          type: "practical",
        },
      ],
    },
    {
      question: "How do you handle a change in the work plan?",
      options: [
        { text: "I create a new, systematic plan to adapt.", type: "analytic" },
        {
          text: "I communicate with the team to make sure everyone is on the same page.",
          type: "social",
        },
        {
          text: "I take advantage of the change to innovate something new.",
          type: "creative",
        },
        {
          text: "I adapt quickly and change my work approach.",
          type: "practical",
        },
      ],
    },
    {
      question: "What is your favorite role in a team?",
      options: [
        { text: "The analyst or planner.", type: "analytic" },
        { text: "The coordinator or mediator.", type: "social" },
        { text: "The innovator or idea person.", type: "creative" },
        { text: "The leader or executor.", type: "practical" },
      ],
    },
    {
      question: "What motivates you most at work?",
      options: [
        {
          text: "Intellectual challenges and solving complex problems.",
          type: "analytic",
        },
        {
          text: "Building strong relationships with colleagues and clients.",
          type: "social",
        },
        {
          text: "The opportunity for self-expression and creativity.",
          type: "creative",
        },
        {
          text: "Achieving tangible results and clear successes.",
          type: "practical",
        },
      ],
    },
    {
      question: "How do you prefer to learn something new?",
      options: [
        { text: "Through deep reading and research.", type: "analytic" },
        { text: "Through discussion with experts.", type: "social" },
        { text: "Through trial and error.", type: "creative" },
        {
          text: "Through practical application and training.",
          type: "practical",
        },
      ],
    },
    {
      question: "What annoys you most at work?",
      options: [
        { text: "Disorganized work and chaos.", type: "analytic" },
        {
          text: "Working alone and a lack of social interaction.",
          type: "social",
        },
        {
          text: "Routine and repetitive tasks that don't require creativity.",
          type: "creative",
        },
        {
          text: "Plans that cannot be implemented in reality.",
          type: "practical",
        },
      ],
    },
  ];

  const quizResults = {
    analytic: {
      description:
        "You have an analytical and logical mindset. You are great at problem-solving, and you love numbers and details. Careers that suit you are those that require critical thinking and deep analysis.",
      careers: [
        "Data Analyst",
        "Software Developer",
        "Financial Engineer",
        "Researcher",
      ],
    },
    social: {
      description:
        "You have a social and persuasive personality. You are excellent at communication and building relationships, and you find joy in helping and interacting with others.",
      careers: [
        "Human Resources Specialist",
        "Career Counselor",
        "Public Relations Manager",
        "Trainer",
      ],
    },
    creative: {
      description:
        "You have a creative and innovative personality. You have a unique artistic perspective and love to think outside the box. Careers that require originality and self-expression are the most suitable for you.",
      careers: [
        "Graphic Designer",
        "Content Writer",
        "Digital Marketer",
        "Photographer",
      ],
    },
    practical: {
      description:
        "You are a practical and organized person. You prefer action over talk and are great at turning ideas into actionable plans.",
      careers: [
        "Project Manager",
        "Event Organizer",
        "Operations Manager",
        "Civil Engineer",
      ],
    },
  };

  const startButton = document.getElementById("start-quiz");
  const nextButton = document.getElementById("next-question");
  const prevButton = document.getElementById("prev-question");
  const restartButton = document.getElementById("restart-quiz");

  const quizIntro = document.getElementById("quiz-intro");
  const quizQuestions = document.getElementById("quiz-questions");
  const quizResultsDiv = document.getElementById("quiz-results");
  const currentQuestionEl = document.getElementById("current-question");
  const optionsContainer = document.getElementById("quiz-options-container");
  const progressBar = document.getElementById("quiz-progress");
  const resultText = document.getElementById("quiz-result-text");
  const suggestionsContainer = document.getElementById("career-suggestions");

  let currentQuestion = 0;
  let userAnswers = [];

  // Start quiz
  startButton.addEventListener("click", function () {
    quizIntro.style.display = "none";
    quizQuestions.style.display = "block";
    showQuestion(0);
  });

  // Next question
  nextButton.addEventListener("click", function () {
    if (currentQuestion < quizData.length - 1) {
      currentQuestion++;
      showQuestion(currentQuestion);
      updateNavigation();
    } else {
      calculateResults();
    }
  });

  // Previous question
  prevButton.addEventListener("click", function () {
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion(currentQuestion);
      updateNavigation();
    }
  });

  // Restart quiz
  restartButton.addEventListener("click", function () {
    quizResultsDiv.style.display = "none";
    quizIntro.style.display = "block";
    currentQuestion = 0;
    userAnswers = [];
    progressBar.style.width = "0%";
  });

  // Show question
  function showQuestion(index) {
    const question = quizData[index];
    currentQuestionEl.textContent = question.question;

    optionsContainer.innerHTML = "";

    question.options.forEach((option, i) => {
      const optionElement = document.createElement("button");
      optionElement.className = "quiz-option-button";
      if (userAnswers[index] === i) {
        optionElement.classList.add("selected");
      }
      optionElement.textContent = option.text;
      optionElement.addEventListener("click", function () {
        document.querySelectorAll(".quiz-option-button").forEach((opt) => {
          opt.classList.remove("selected");
        });
        this.classList.add("selected");
        userAnswers[index] = i;
      });
      optionsContainer.appendChild(optionElement);
    });

    const progress = ((index + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;

    updateNavigation();
  }

  // Update navigation buttons
  function updateNavigation() {
    prevButton.disabled = currentQuestion === 0;
    nextButton.textContent =
      currentQuestion === quizData.length - 1 ? "Finish Quiz" : "Next";
  }

  // Calculate results
  function calculateResults() {
    const resultCount = {
      analytic: 0,
      social: 0,
      creative: 0,
      practical: 0,
    };

    userAnswers.forEach((answerIndex, questionIndex) => {
      if (answerIndex !== undefined) {
        const type = quizData[questionIndex].options[answerIndex].type;
        resultCount[type]++;
      }
    });

    let maxScore = 0;
    let resultType = "analytic";

    for (const type in resultCount) {
      if (resultCount[type] > maxScore) {
        maxScore = resultCount[type];
        resultType = type;
      }
    }

    const result = quizResults[resultType];
    resultText.textContent = result.description;

    suggestionsContainer.innerHTML = "<h4>Careers suitable for you:</h4><ul>";

    result.careers.forEach((career) => {
      suggestionsContainer.innerHTML += `<li>${career}</li>`;
    });

    suggestionsContainer.innerHTML += "</ul>";

    quizQuestions.style.display = "none";
    quizResultsDiv.style.display = "block";
  }
});

// Feedback
// DOM elements
const registrationForm = document.getElementById("registration-form");
const feedbackSection = document.getElementById("feedback-section");
const registerBtn = document.getElementById("registerBtn");
const fullNameInput = document.getElementById("fullName");
const userEmailInput = document.getElementById("userEmail");
const userPhoneInput = document.getElementById("userPhone");
const userInfoDiv = document.getElementById("userInfo");
const logoutBtn = document.getElementById("logoutBtn");

// Feedback form elements
const emojiBtns = document.querySelectorAll(".emoji-btn");
const feedbackForm = document.getElementById("feedback-form");
const initialForm = document.getElementById("initial-state");
const promptText = document.getElementById("prompt-text");
const selectedEmoji = document.getElementById("selected-emoji");
const successMessage = document.getElementById("success-message");
const commentsTextarea = document.getElementById("comments");
const commentError = document.getElementById("commentError");

// Prompts for each mood
const prompts = {
  amazing: { text: "Awesome! Tell us what you liked most.", emoji: "🤩" },
  good: {
    text: "Glad to hear that! How can we make it even better?",
    emoji: "😊",
  },
  neutral: {
    text: "Thanks for your honesty. What could improve your experience?",
    emoji: "😐",
  },
  bad: {
    text: "We're sorry to hear that! Please tell us what went wrong.",
    emoji: "😞",
  },
  terrible: {
    text: "So sorry! We'd really like to know what happened to avoid it in the future.",
    emoji: "😡",
  },
};

// Check if user data exists in localStorage
document.addEventListener("DOMContentLoaded", function () {
  const userData = localStorage.getItem("userData");
  if (userData) {
    showFeedbackSection(JSON.parse(userData));
  }
});

// Register user
registerBtn.addEventListener("click", function () {
  if (validateRegistrationForm()) {
    const userData = {
      name: fullNameInput.value,
      email: userEmailInput.value,
      phone: userPhoneInput.value,
      timestamp: new Date().toISOString(),
    };

    // Save data to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Show feedback section
    showFeedbackSection(userData);
  }
});

// Logout functionality
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("userData");
  location.reload();
});

// Add event listeners to emoji buttons
emojiBtns.forEach((button) => {
  button.addEventListener("click", () => {
    emojiBtns.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const mood = button.dataset.mood;
    promptText.textContent = prompts[mood].text;
    selectedEmoji.textContent = prompts[mood].emoji;

    feedbackForm.classList.add("visible");
  });
});

// Submit feedback
feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validate that comments are provided
  if (!validateComments()) {
    return;
  }

  const comments = commentsTextarea.value;
  const selectedMood = document.querySelector(".emoji-btn.active").dataset.mood;
  const userData = JSON.parse(localStorage.getItem("userData"));

  // Save feedback data (in a real app, this would be sent to a server)
  const feedbackData = {
    user: userData,
    mood: selectedMood,
    comments: comments,
    date: new Date().toISOString(),
  };

  console.log("Feedback Data:", feedbackData);

  // Show success message
  initialForm.style.display = "none";
  feedbackForm.style.display = "none";
  successMessage.style.display = "block";
});

// Validate comments
function validateComments() {
  if (!commentsTextarea.value.trim()) {
    commentError.style.display = "block";
    commentsTextarea.focus();
    return false;
  } else {
    commentError.style.display = "none";
    return true;
  }
}

// Helper functions
function validateRegistrationForm() {
  let isValid = true;

  // Validate name
  if (!fullNameInput.value.trim()) {
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("nameError").style.display = "none";
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userEmailInput.value)) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  // Validate phone
  const phoneRegex = /^[0-9]{10,15}$/;
  if (!phoneRegex.test(userPhoneInput.value)) {
    document.getElementById("phoneError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("phoneError").style.display = "none";
  }

  return isValid;
}

function showFeedbackSection(userData) {
  // Hide registration form and show feedback section
  registrationForm.style.display = "none";
  feedbackSection.style.display = "block";

  // Display user information
  userInfoDiv.innerHTML = `
                <p><strong>User:</strong> ${userData.name}</p>
                <p><strong>Email:</strong> ${userData.email}</p>
                <p><strong>Phone:</strong> ${userData.phone}</p>
            `;
}

// Content Bookmarking System
// ==================== Dummy Data for Content ====================
const careers_Data = [
  {
    id: "career-001",
    type: "career",
    title: "Software Engineer",
    description:
      "Specializes in designing and developing software systems and applications. Requires programming and problem-solving skills.",
    image: "../src/assets/images/pexels-luis-gomes-166706-546819.jpg",
    url: "#software-engineer",
  },
  {
    id: "career-002",
    type: "video",
    title: "Video: Future of Tech Work",
    description:
      "Watch this video to understand job market trends in the tech field for the coming years.",
    image: "../src/assets/images/istockphoto-1187179171-612x612.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "career-003",
    type: "story",
    title: "Success Story: From Student to Entrepreneur",
    description:
      "How Ahmed built his startup through his passion for programming.",
    image: "../src/assets/images/pexels-geralt-21696.jpg",
    url: "#success-story",
  },
  {
    id: "career-004",
    type: "career",
    title: "Data Scientist",
    description:
      "Collects, analyzes, and interprets large datasets to find insights. Requires strong math and statistics skills.",
    image: "../src/assets/images/istockphoto-1321462048-612x612.jpg",
    url: "#data-scientist",
  },
  {
    id: "career-005",
    type: "career",
    title: "UI/UX Designer",
    description:
      "Designs the user interface (UI) and user experience (UX) of websites and applications. Focuses on aesthetics and usability.",
    image: "../src/assets/images/pexels-harold-vasquez-853421-2653362.jpg",
    url: "#ui-ux-designer",
  },
];

// ==================== Bookmark Management System ====================
const BOOKMARK_STORAGE_KEY = "nextstep_bookmarks_v6";

function initBookmarkSystem() {
  if (!localStorage.getItem(BOOKMARK_STORAGE_KEY)) {
    const initialData = {
      bookmarks: [],
      metadata: { version: "2.0", created: new Date().toISOString() },
      statistics: { totalAdded: 0, totalRemoved: 0, byType: {} },
    };
    localStorage.setItem(
      BOOKMARK_STORAGE_KEY,
      JSON.stringify(initialData, null, 2)
    );
  }
  renderContentCards();
  updateBookmarkCount();
  updateBookmarkButtons();
  setupNavigation();
}

function getBookmarkData() {
  try {
    return (
      JSON.parse(localStorage.getItem(BOOKMARK_STORAGE_KEY)) ||
      createInitialData()
    );
  } catch (error) {
    console.error("Error reading data:", error);
    return createInitialData();
  }
}

function createInitialData() {
  return {
    bookmarks: [],
    metadata: { version: "2.0", created: new Date().toISOString() },
    statistics: { totalAdded: 0, totalRemoved: 0, byType: {} },
  };
}

function saveBookmarkData(data) {
  try {
    data.metadata.lastModified = new Date().toISOString();
    localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    showNotification("Error saving data", "error");
    return false;
  }
}

// ==================== Rendering Content ====================
function renderContentCards() {
  const container = document.getElementById("contentGrid");
  const cardsHtml = careersData
    .map(
      (item) => `
            <div class="content-card">
                <img src="${item.image}" alt="${item.title}" class="card-image">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="card-footer">
                    <span class="bookmark-type">${getTypeLabel(
                      item.type
                    )}</span>
                    <button class="bookmark-btn" data-id="${
                      item.id
                    }" data-type="${item.type}" 
                            data-title="${item.title}" data-url="${
        item.url
      }" data-image="${item.image}"
                            onclick="handleBookmarkClick(this)">
                        ♥ Save
                    </button>
                </div>
            </div>
        `
    )
    .join("");
  container.innerHTML = cardsHtml;
  updateBookmarkButtons();
}

function handleBookmarkClick(button) {
  const id = button.getAttribute("data-id");
  const type = button.getAttribute("data-type");
  const title = button.getAttribute("data-title");
  const url = button.getAttribute("data-url");
  const image = button.getAttribute("data-image");

  const data = getBookmarkData();
  const existingBookmark = data.bookmarks.find((item) => item.id === id);

  if (existingBookmark) {
    removeBookmark(id);
  } else {
    addBookmark(id, type, title, url, image);
  }
}

// ==================== File Upload System ====================
function previewFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  if (!file) {
    resetUploadForm();
    return;
  }

  const imagePreview = document.getElementById("imagePreview");
  const videoPreview = document.getElementById("videoPreview");
  const pdfPreview = document.getElementById("pdfPreview");

  imagePreview.style.display = "none";
  videoPreview.style.display = "none";
  pdfPreview.style.display = "none";

  if (file.type.startsWith("image/")) {
    imagePreview.src = URL.createObjectURL(file);
    imagePreview.style.display = "block";
  } else if (file.type.startsWith("video/")) {
    videoPreview.src = URL.createObjectURL(file);
    videoPreview.style.display = "block";
  } else if (file.type === "application/pdf") {
    pdfPreview.style.display = "block";
    pdfPreview.innerHTML = `📄 ${file.name}<br><small>File size: ${(
      file.size /
      1024 /
      1024
    ).toFixed(2)} MB</small>`;
  }
}

function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const titleInput = document.getElementById("fileTitle");
  const descriptionInput = document.getElementById("fileDescription");

  const file = fileInput.files[0];
  if (!file) {
    showNotification("Please select a file first", "error");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const fileType = file.type.startsWith("image/")
      ? "image"
      : file.type.startsWith("video/")
      ? "video"
      : "pdf";

    const fileUrl = URL.createObjectURL(file);
    const fileData = {
      id: "file-" + Date.now(),
      type: fileType,
      title: titleInput.value || file.name,
      description: descriptionInput.value,
      url: fileUrl,
      dataUrl: e.target.result, // Use this for images/PDFs to save to localStorage
    };

    const data = getBookmarkData();
    data.bookmarks.unshift({
      ...fileData,
      timestamps: {
        created: new Date().toISOString(),
        lastModified: new Date().toISOString(),
      },
      metadata: { favorite: false, tags: [] },
    });
    data.statistics.totalAdded++;
    data.statistics.byType[fileType] =
      (data.statistics.byType[fileType] || 0) + 1;

    if (saveBookmarkData(data)) {
      showNotification("File uploaded and added to bookmarks ✓", "success");
      updateBookmarkCount();
      resetUploadForm();
    }
  };

  if (file.type.startsWith("image/") || file.type === "application/pdf") {
    reader.readAsDataURL(file);
  } else if (file.type.startsWith("video/")) {
    // For videos, we only save the URL created by URL.createObjectURL
    const videoUrl = URL.createObjectURL(file);
    const fileData = {
      id: "file-" + Date.now(),
      type: "video",
      title: titleInput.value || file.name,
      description: descriptionInput.value,
      url: videoUrl,
    };

    const data = getBookmarkData();
    data.bookmarks.unshift({
      ...fileData,
      timestamps: {
        created: new Date().toISOString(),
        lastModified: new Date().toISOString(),
      },
      metadata: { favorite: false, tags: [] },
    });
    data.statistics.totalAdded++;
    data.statistics.byType.video = (data.statistics.byType.video || 0) + 1;

    if (saveBookmarkData(data)) {
      showNotification("Video uploaded and added to bookmarks ✓", "success");
      updateBookmarkCount();
      resetUploadForm();
    }
  }
}

function resetUploadForm() {
  document.getElementById("uploadForm").reset();
  document.getElementById("imagePreview").style.display = "none";
  document.getElementById("videoPreview").style.display = "none";
  document.getElementById("pdfPreview").style.display = "none";
  document.getElementById("fileInput").value = "";
}

// ==================== Basic Bookmark System ====================
function addBookmark(itemId, itemType, itemTitle, itemUrl, itemImage = null) {
  const data = getBookmarkData();
  const existingBookmark = data.bookmarks.find((item) => item.id === itemId);

  if (existingBookmark) {
    showNotification("This item is already bookmarked", "warning");
    return false;
  }

  const newBookmark = {
    id: itemId,
    type: itemType,
    title: itemTitle,
    url: itemUrl,
    image: itemImage,
    notes: "",
    timestamps: {
      created: new Date().toISOString(),
      lastModified: new Date().toISOString(),
    },
    metadata: { favorite: false, tags: [] },
  };

  data.bookmarks.unshift(newBookmark);
  data.statistics.totalAdded++;
  data.statistics.byType[itemType] =
    (data.statistics.byType[itemType] || 0) + 1;

  if (saveBookmarkData(data)) {
    showNotification("Added to bookmarks ✓", "success");
    updateBookmarkCount();
    updateBookmarkButtons();
    return true;
  }
  return false;
}

function removeBookmark(itemId) {
  const data = getBookmarkData();
  const bookmarkIndex = data.bookmarks.findIndex((item) => item.id === itemId);

  if (bookmarkIndex > -1) {
    const removedBookmark = data.bookmarks.splice(bookmarkIndex, 1)[0];
    data.statistics.totalRemoved++;
    data.statistics.byType[removedBookmark.type] = Math.max(
      0,
      data.statistics.byType[removedBookmark.type] - 1
    );

    if (saveBookmarkData(data)) {
      showNotification("Deleted successfully", "success");
      updateBookmarkCount();
      updateBookmarkButtons();
      if (document.getElementById("bookmarksPage").style.display === "block") {
        displayAllBookmarks();
      }
      return true;
    }
  }
  return false;
}

function updateBookmarkNotes(itemId, newNotes) {
  const data = getBookmarkData();
  const bookmark = data.bookmarks.find((item) => item.id === itemId);

  if (bookmark) {
    bookmark.notes = newNotes;
    bookmark.timestamps.lastModified = new Date().toISOString();
    if (saveBookmarkData(data)) {
      // No notification for every keystroke, let's keep it clean
    }
  }
}

let debounceTimeout = null;
function debounce(func, wait) {
  if (debounceTimeout) clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(func, wait);
}

function displayAllBookmarks() {
  const container = document.getElementById("bookmarksList");
  const emptyState = document.getElementById("emptyState");
  const data = getBookmarkData();

  if (!data.bookmarks || data.bookmarks.length === 0) {
    container.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  const bookmarksHtml = data.bookmarks
    .map(
      (bookmark) => `
            <div class="bookmark-card" data-id="${bookmark.id}">
                <div class="bookmark-header">
                    <h3 class="bookmark-title">${bookmark.title}</h3>
                    <div class="bookmark-actions">
                        <span class="bookmark-type">${getTypeLabel(
                          bookmark.type
                        )}</span>
                        <button class="btn btn-danger" onclick="removeBookmark('${
                          bookmark.id
                        }')" 
                                style="padding: 6px 12px; font-size: 12px;">
                            🗑 Delete
                        </button>
                    </div>
                </div>
                
                ${renderMediaForBookmark(bookmark)}
                
                <div class="bookmark-notes">
                    <textarea placeholder="Add your personal notes here..."
                                onblur="updateBookmarkNotes('${
                                  bookmark.id
                                }', this.value)"
                                oninput="debounce(() => updateBookmarkNotes('${
                                  bookmark.id
                                }', this.value), 500)">${
        bookmark.notes || ""
      }</textarea>
                </div>
                
                <div class="bookmark-footer">
                    <span class="bookmark-date">Added: ${formatDate(
                      bookmark.timestamps.created
                    )}</span>
                    ${
                      bookmark.type === "pdf"
                        ? `
                       <a href="${bookmark.url}" class="btn btn-primary" target="_blank">
                           Open File
                       </a>
                    `
                        : `
                        <button class="btn btn-primary" onclick="window.location.href='${bookmark.url}'">
                            View Item
                        </button>
                    `
                    }
                </div>
                
                <div class="social-share">
                    <button class="social-btn twitter" onclick="shareOnTwitter('${
                      bookmark.title
                    }', '${bookmark.url}')">
                        🐦 Twitter
                    </button>
                    <button class="social-btn facebook" onclick="shareOnFacebook('${
                      bookmark.url
                    }')">
                        📘 Facebook
                    </button>
                    <button class="social-btn linkedin" onclick="shareOnLinkedIn('${
                      bookmark.title
                    }', '${bookmark.url}')">
                        💼 LinkedIn
                    </button>
                </div>
            </div>
        `
    )
    .join("");

  container.innerHTML = bookmarksHtml;
}

function renderMediaForBookmark(bookmark) {
  if (bookmark.type === "image") {
    const source = bookmark.url || bookmark.dataUrl;
    return `<img src="${source}" alt="${bookmark.title}" class="uploaded-media">`;
  } else if (bookmark.type === "video") {
    const source = bookmark.url || bookmark.dataUrl;
    return `
                <video controls class="uploaded-media">
                    <source src="${source}">
                </video>
            `;
  } else if (bookmark.type === "pdf") {
    return `
                <div class="pdf-preview-card">
                    📄 ${bookmark.title}
                </div>
            `;
  }
  return "";
}

function getTypeLabel(type) {
  const labels = {
    career: "💻 Career",
    video: "🎥 Video",
    story: "🌟 Success Story",
    image: "🖼 Image",
    pdf: "📄 PDF File",
  };
  return labels[type] || type;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function updateBookmarkCount() {
  const data = getBookmarkData();
  const count = data.bookmarks.length;
  document.querySelector(".bookmark-count").textContent = count;
}

function updateBookmarkButtons() {
  const data = getBookmarkData();
  const bookmarkIds = new Set(data.bookmarks.map((item) => item.id));

  document.querySelectorAll(".bookmark-btn").forEach((btn) => {
    const itemId = btn.getAttribute("data-id");
    if (bookmarkIds.has(itemId)) {
      btn.classList.add("added");
      btn.innerHTML = "✓ Saved";
    } else {
      btn.classList.remove("added");
      btn.innerHTML = "♥ Save";
    }
  });
}

function setupNavigation() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.getAttribute("data-page");
      showPage(page);

      document
        .querySelectorAll(".nav-link")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

function showPage(pageName) {
  document.querySelectorAll(".page-content").forEach((page) => {
    page.style.display = "none";
  });

  if (pageName === "home") {
    document.getElementById("homePage").style.display = "block";
  } else if (pageName === "bookmarks") {
    document.getElementById("bookmarksPage").style.display = "block";
    displayAllBookmarks();
  } else if (pageName === "upload") {
    document.getElementById("uploadPage").style.display = "block";
    // We can optionally display uploaded files on this page too
  }
}

function clearAllBookmarks() {
  if (
    !confirm(
      "Are you sure you want to delete all bookmarks? This action cannot be undone."
    )
  )
    return;

  const data = createInitialData(); // Reset to initial state
  if (saveBookmarkData(data)) {
    showNotification("All bookmarks have been deleted", "success");
    updateBookmarkCount();
    updateBookmarkButtons();
    displayAllBookmarks();
  }
}

function exportBookmarks(format) {
  const data = getBookmarkData();
  if (data.bookmarks.length === 0) {
    showNotification("No bookmarks to export", "warning");
    return;
  }

  if (format === "json") {
    // Remove large dataURLs before exporting
    const exportableData = JSON.parse(JSON.stringify(data));
    exportableData.bookmarks = exportableData.bookmarks.map((bookmark) => {
      if (bookmark.dataUrl) {
        delete bookmark.dataUrl;
      }
      return bookmark;
    });

    const jsonStr = JSON.stringify(exportableData, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `nextstep-bookmarks-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showNotification("Bookmarks exported successfully", "success");
  }
}

function shareOnTwitter(title, url) {
  const text = `Check out "${title}" via NextStep Navigator`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text
  )}&url=${encodeURIComponent(url)}`;
  window.open(shareUrl, "_blank");
}

function shareOnFacebook(url) {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
  window.open(shareUrl, "_blank");
}

function shareOnLinkedIn(title, url) {
  const text = `Check out "${title}" via NextStep Navigator`;
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}&summary=${encodeURIComponent(text)}`;
  window.open(shareUrl, "_blank");
}

function showNotification(message, type = "info") {
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notif) => notif.remove());

  const notification = document.createElement("div");
  notification.className = `notification ${type}`;

  let icon = "ℹ️";
  if (type === "success") icon = "✅";
  if (type === "error") icon = "❌";
  if (type === "warning") icon = "⚠️";

  notification.innerHTML = `${icon} ${message}`;
  document.body.appendChild(notification);

  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideIn 0.3s ease reverse forwards";
      setTimeout(() => notification.remove(), 300);
    }
  }, 3000);
}

// Initial setup on page load
document.addEventListener("DOMContentLoaded", initBookmarkSystem);

// About Us

document.addEventListener("DOMContentLoaded", function () {
  // Title Animation
  const titleElement = document.getElementById("animated-title");
  if (titleElement) {
    const titleText = titleElement.textContent;
    titleElement.innerHTML = "";

    titleText.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.animationDelay = `${index * 0.05}s`;
      titleElement.appendChild(span);
    });
  }

  // Text Animations for all p tags
  const textParagraphs = document.querySelectorAll(
    ".about-text p, .mission p, .vision p"
  );
  textParagraphs.forEach((p, index) => {
    p.style.animationDelay = `${0.5 + index * 0.15}s`; /* adjusted delay */
  });

  // Team Member Animations
  const teamMembers = document.querySelectorAll(".team-member");
  teamMembers.forEach((member, index) => {
    member.style.animationDelay = `${1.5 + index * 0.2}s`;
    // Animate the member's name and title after their card appears
    const nameElement = member.querySelector("h3");
    const roleElement = member.querySelector("p");
    if (nameElement) {
      nameElement.style.animationDelay = `${1.8 + index * 0.2}s`;
    }
    if (roleElement) {
      roleElement.style.animationDelay = `${2.0 + index * 0.2}s`;
    }
  });
});

// Contact Us
// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (name && email && subject && message) {
    alert(
      "Thank you for contacting us! We will respond to your message as soon as possible."
    );
    this.reset();
  } else {
    alert("Please fill in all required fields.");
  }
});

// FAQ toggle functionality
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const isActive = answer.classList.contains("active");

    // Close all answers
    document.querySelectorAll(".faq-answer").forEach((ans) => {
      ans.classList.remove("active");
    });

    document.querySelectorAll(".faq-question span").forEach((span) => {
      span.textContent = "+";
    });

    // Open this answer if it wasn't already active
    if (!isActive) {
      answer.classList.add("active");
      this.querySelector("span").textContent = "-";
    }
  });
});
