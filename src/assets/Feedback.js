// DOM elements
        const registrationForm = document.getElementById('registration-form');
        const feedbackSection = document.getElementById('feedback-section');
        const registerBtn = document.getElementById('registerBtn');
        const fullNameInput = document.getElementById('fullName');
        const userEmailInput = document.getElementById('userEmail');
        const userPhoneInput = document.getElementById('userPhone');
        const userInfoDiv = document.getElementById('userInfo');
        const logoutBtn = document.getElementById('logoutBtn');
        
        // Feedback form elements
        const emojiBtns = document.querySelectorAll('.emoji-btn');
        const feedbackForm = document.getElementById('feedback-form');
        const initialForm = document.getElementById('initial-state');
        const promptText = document.getElementById('prompt-text');
        const selectedEmoji = document.getElementById('selected-emoji');
        const successMessage = document.getElementById('success-message');
        const commentsTextarea = document.getElementById('comments');
        const commentError = document.getElementById('commentError');
        
        // Prompts for each mood
        const prompts = {
            amazing: {text: "Awesome! Tell us what you liked most.", emoji: "🤩"},
            good: {text: "Glad to hear that! How can we make it even better?", emoji: "😊"},
            neutral: {text: "Thanks for your honesty. What could improve your experience?", emoji: "😐"},
            bad: {text: "We're sorry to hear that! Please tell us what went wrong.", emoji: "😞"},
            terrible: {text: "So sorry! We'd really like to know what happened to avoid it in the future.", emoji: "😡"}
        };
        
        // Check if user data exists in localStorage
        document.addEventListener('DOMContentLoaded', function() {
            const userData = localStorage.getItem('userData');
            if (userData) {
                showFeedbackSection(JSON.parse(userData));
            }
        });
        
        // Register user
        registerBtn.addEventListener('click', function() {
            if (validateRegistrationForm()) {
                const userData = {
                    name: fullNameInput.value,
                    email: userEmailInput.value,
                    phone: userPhoneInput.value,
                    timestamp: new Date().toISOString()
                };
                
                // Save data to localStorage
                localStorage.setItem('userData', JSON.stringify(userData));
                
                // Show feedback section
                showFeedbackSection(userData);
            }
        });
        
        // Logout functionality
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('userData');
            location.reload();
        });
        
        // Add event listeners to emoji buttons
        emojiBtns.forEach(button => {
            button.addEventListener('click', () => {
                emojiBtns.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const mood = button.dataset.mood;
                promptText.textContent = prompts[mood].text;
                selectedEmoji.textContent = prompts[mood].emoji;
                
                feedbackForm.classList.add('visible');
            });
        });
        
        // Submit feedback
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate that comments are provided
            if (!validateComments()) {
                return;
            }
            
            const comments = commentsTextarea.value;
            const selectedMood = document.querySelector('.emoji-btn.active').dataset.mood;
            const userData = JSON.parse(localStorage.getItem('userData'));
            
            // Save feedback data (in a real app, this would be sent to a server)
            const feedbackData = {
                user: userData,
                mood: selectedMood,
                comments: comments,
                date: new Date().toISOString()
            };
            
            console.log('Feedback Data:', feedbackData);
            
            // Show success message
            initialForm.style.display = 'none';
            feedbackForm.style.display = 'none';
            successMessage.style.display = 'block';
        });
        
        // Validate comments
        function validateComments() {
            if (!commentsTextarea.value.trim()) {
                commentError.style.display = 'block';
                commentsTextarea.focus();
                return false;
            } else {
                commentError.style.display = 'none';
                return true;
            }
        }
        
        // Helper functions
        function validateRegistrationForm() {
            let isValid = true;
            
            // Validate name
            if (!fullNameInput.value.trim()) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('nameError').style.display = 'none';
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(userEmailInput.value)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('emailError').style.display = 'none';
            }
            
            // Validate phone
            const phoneRegex = /^[0-9]{10,15}$/;
            if (!phoneRegex.test(userPhoneInput.value)) {
                document.getElementById('phoneError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('phoneError').style.display = 'none';
            }
            
            return isValid;
        }
        
        function showFeedbackSection(userData) {
            // Hide registration form and show feedback section
            registrationForm.style.display = 'none';
            feedbackSection.style.display = 'block';
            
            // Display user information
            userInfoDiv.innerHTML = `
                <p><strong>User:</strong> ${userData.name}</p>
                <p><strong>Email:</strong> ${userData.email}</p>
                <p><strong>Phone:</strong> ${userData.phone}</p>
            `;
        }