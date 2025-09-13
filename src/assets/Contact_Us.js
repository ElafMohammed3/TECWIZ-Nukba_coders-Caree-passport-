// Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                alert('Thank you for contacting us! We will respond to your message as soon as possible.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
        
        // FAQ toggle functionality
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const isActive = answer.classList.contains('active');
                
                // Close all answers
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.classList.remove('active');
                });
                
                document.querySelectorAll('.faq-question span').forEach(span => {
                    span.textContent = '+';
                });
                
                // Open this answer if it wasn't already active
                if (!isActive) {
                    answer.classList.add('active');
                    this.querySelector('span').textContent = '-';
                }
            });
        });
   