
        document.addEventListener("DOMContentLoaded", function() {
            // Title Animation
            const titleElement = document.getElementById('animated-title');
            if (titleElement) {
                const titleText = titleElement.textContent;
                titleElement.innerHTML = '';
                
                titleText.split('').forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.animationDelay = `${index * 0.05}s`;
                    titleElement.appendChild(span);
                });
            }
            
            // Text Animations for all p tags
            const textParagraphs = document.querySelectorAll('.about-text p, .mission p, .vision p');
            textParagraphs.forEach((p, index) => {
                p.style.animationDelay = `${0.5 + index * 0.15}s`; /* adjusted delay */
            });

            // Team Member Animations
            const teamMembers = document.querySelectorAll('.team-member');
            teamMembers.forEach((member, index) => {
                member.style.animationDelay = `${1.5 + index * 0.2}s`;
                // Animate the member's name and title after their card appears
                const nameElement = member.querySelector('h3');
                const roleElement = member.querySelector('p');
                if (nameElement) {
                    nameElement.style.animationDelay = `${1.8 + index * 0.2}s`;
                }
                if (roleElement) {
                    roleElement.style.animationDelay = `${2.0 + index * 0.2}s`;
                }
            });
        });
   