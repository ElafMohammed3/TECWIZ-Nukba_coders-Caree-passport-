document.addEventListener('DOMContentLoaded', function() {
            
            // Data for quiz questions and results
            const quizData = [
                {
                    question: "What attracts you most in a new project?",
                    options: [
                        { text: "Analyzing data and finding logical solutions.", type: "analytic" },
                        { text: "Working with a team and interacting with others.", type: "social" },
                        { text: "Inventing new, unconventional ideas.", type: "creative" },
                        { text: "Implementing tasks in a practical and organized way.", type: "practical" }
                    ]
                },
                {
                    question: "How do you prefer to spend your weekend?",
                    options: [
                        { text: "Solving puzzles or learning a new technical skill.", type: "analytic" },
                        { text: "Spending time with friends and family.", type: "social" },
                        { text: "Practicing an artistic hobby like painting or writing.", type: "creative" },
                        { text: "Fixing something at home or doing practical tasks.", type: "practical" }
                    ]
                },
                {
                    question: "What describes you best in a work environment?",
                    options: [
                        { text: "Organized and detail-oriented.", type: "analytic" },
                        { text: "Invested in relationships and supportive of colleagues.", type: "social" },
                        { text: "A creative thinker who thinks outside the box.", type: "creative" },
                        { text: "A quick decision-maker and effective executor.", type: "practical" }
                    ]
                },
                {
                    question: "What do you do when you face a complex problem?",
                    options: [
                        { text: "Break it down into small parts and analyze it step-by-step.", type: "analytic" },
                        { text: "Ask others for help and work with them to find a solution.", type: "social" },
                        { text: "Think about unconventional and unexpected solutions.", type: "creative" },
                        { text: "Start working immediately to find a practical solution.", type: "practical" }
                    ]
                },
                {
                    question: "What kind of tasks make you most enthusiastic?",
                    options: [
                        { text: "Designing complex systems or databases.", type: "analytic" },
                        { text: "Training or advising others.", type: "social" },
                        { text: "Writing stories or advertising copy.", type: "creative" },
                        { text: "Managing a team or project to achieve a specific goal.", type: "practical" }
                    ]
                },
                {
                    question: "How do you handle a change in the work plan?",
                    options: [
                        { text: "I create a new, systematic plan to adapt.", type: "analytic" },
                        { text: "I communicate with the team to make sure everyone is on the same page.", type: "social" },
                        { text: "I take advantage of the change to innovate something new.", type: "creative" },
                        { text: "I adapt quickly and change my work approach.", type: "practical" }
                    ]
                },
                {
                    question: "What is your favorite role in a team?",
                    options: [
                        { text: "The analyst or planner.", type: "analytic" },
                        { text: "The coordinator or mediator.", type: "social" },
                        { text: "The innovator or idea person.", type: "creative" },
                        { text: "The leader or executor.", type: "practical" }
                    ]
                },
                {
                    question: "What motivates you most at work?",
                    options: [
                        { text: "Intellectual challenges and solving complex problems.", type: "analytic" },
                        { text: "Building strong relationships with colleagues and clients.", type: "social" },
                        { text: "The opportunity for self-expression and creativity.", type: "creative" },
                        { text: "Achieving tangible results and clear successes.", type: "practical" }
                    ]
                },
                {
                    question: "How do you prefer to learn something new?",
                    options: [
                        { text: "Through deep reading and research.", type: "analytic" },
                        { text: "Through discussion with experts.", type: "social" },
                        { text: "Through trial and error.", type: "creative" },
                        { text: "Through practical application and training.", type: "practical" }
                    ]
                },
                {
                    question: "What annoys you most at work?",
                    options: [
                        { text: "Disorganized work and chaos.", type: "analytic" },
                        { text: "Working alone and a lack of social interaction.", type: "social" },
                        { text: "Routine and repetitive tasks that don't require creativity.", type: "creative" },
                        { text: "Plans that cannot be implemented in reality.", type: "practical" }
                    ]
                }
            ];
        
            const quizResults = {
                analytic: {
                    description: "You have an analytical and logical mindset. You are great at problem-solving, and you love numbers and details. Careers that suit you are those that require critical thinking and deep analysis.",
                    careers: ["Data Analyst", "Software Developer", "Financial Engineer", "Researcher"]
                },
                social: {
                    description: "You have a social and persuasive personality. You are excellent at communication and building relationships, and you find joy in helping and interacting with others.",
                    careers: ["Human Resources Specialist", "Career Counselor", "Public Relations Manager", "Trainer"]
                },
                creative: {
                    description: "You have a creative and innovative personality. You have a unique artistic perspective and love to think outside the box. Careers that require originality and self-expression are the most suitable for you.",
                    careers: ["Graphic Designer", "Content Writer", "Digital Marketer", "Photographer"]
                },
                practical: {
                    description: "You are a practical and organized person. You prefer action over talk and are great at turning ideas into actionable plans.",
                    careers: ["Project Manager", "Event Organizer", "Operations Manager", "Civil Engineer"]
                }
            };

            const startButton = document.getElementById('start-quiz');
            const nextButton = document.getElementById('next-question');
            const prevButton = document.getElementById('prev-question');
            const restartButton = document.getElementById('restart-quiz');

            const quizIntro = document.getElementById('quiz-intro');
            const quizQuestions = document.getElementById('quiz-questions');
            const quizResultsDiv = document.getElementById('quiz-results');
            const currentQuestionEl = document.getElementById('current-question');
            const optionsContainer = document.getElementById('quiz-options-container');
            const progressBar = document.getElementById('quiz-progress');
            const resultText = document.getElementById('quiz-result-text');
            const suggestionsContainer = document.getElementById('career-suggestions');
            
            let currentQuestion = 0;
            let userAnswers = [];
            
            // Start quiz
            startButton.addEventListener('click', function() {
                quizIntro.style.display = 'none';
                quizQuestions.style.display = 'block';
                showQuestion(0);
            });
            
            // Next question
            nextButton.addEventListener('click', function() {
                if (currentQuestion < quizData.length - 1) {
                    currentQuestion++;
                    showQuestion(currentQuestion);
                    updateNavigation();
                } else {
                    calculateResults();
                }
            });
            
            // Previous question
            prevButton.addEventListener('click', function() {
                if (currentQuestion > 0) {
                    currentQuestion--;
                    showQuestion(currentQuestion);
                    updateNavigation();
                }
            });
            
            // Restart quiz
            restartButton.addEventListener('click', function() {
                quizResultsDiv.style.display = 'none';
                quizIntro.style.display = 'block';
                currentQuestion = 0;
                userAnswers = [];
                progressBar.style.width = '0%';
            });
            
            // Show question
            function showQuestion(index) {
                const question = quizData[index];
                currentQuestionEl.textContent = question.question;
                
                optionsContainer.innerHTML = '';
                
                question.options.forEach((option, i) => {
                    const optionElement = document.createElement('button');
                    optionElement.className = 'quiz-option-button';
                    if (userAnswers[index] === i) {
                        optionElement.classList.add('selected');
                    }
                    optionElement.textContent = option.text;
                    optionElement.addEventListener('click', function() {
                        document.querySelectorAll('.quiz-option-button').forEach(opt => {
                            opt.classList.remove('selected');
                        });
                        this.classList.add('selected');
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
                nextButton.textContent = currentQuestion === quizData.length - 1 ? 'Finish Quiz' : 'Next';
            }
            
            // Calculate results
            function calculateResults() {
                const resultCount = {
                    analytic: 0,
                    social: 0,
                    creative: 0,
                    practical: 0
                };
                
                userAnswers.forEach((answerIndex, questionIndex) => {
                    if (answerIndex !== undefined) {
                        const type = quizData[questionIndex].options[answerIndex].type;
                        resultCount[type]++;
                    }
                });
                
                let maxScore = 0;
                let resultType = 'analytic';
                
                for (const type in resultCount) {
                    if (resultCount[type] > maxScore) {
                        maxScore = resultCount[type];
                        resultType = type;
                    }
                }
                
                const result = quizResults[resultType];
                resultText.textContent = result.description;
                
                suggestionsContainer.innerHTML = '<h4>Careers suitable for you:</h4><ul>';
                
                result.careers.forEach(career => {
                    suggestionsContainer.innerHTML += `<li>${career}</li>`;
                });
                
                suggestionsContainer.innerHTML += '</ul>';
                
                quizQuestions.style.display = 'none';
                quizResultsDiv.style.display = 'block';
            }
        });