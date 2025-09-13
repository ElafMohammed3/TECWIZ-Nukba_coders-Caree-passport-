document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('.section');
            const backToTopBtn = document.getElementById('backToTop');
            
            // Navigation between sections
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all links and sections
                    navLinks.forEach(l => l.classList.remove('active'));
                    sections.forEach(s => s.classList.remove('active'));
                    
                    // Add active class to current link and section
                    this.classList.add('active');
                    const targetSection = this.getAttribute('href');
                    document.querySelector(targetSection).classList.add('active');
                });
            });
            
            // Back to top button
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopBtn.style.opacity = '1';
                    backToTopBtn.style.visibility = 'visible';
                } else {
                    backToTopBtn.style.opacity = '0';
                    backToTopBtn.style.visibility = 'hidden';
                }
            });
            
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });