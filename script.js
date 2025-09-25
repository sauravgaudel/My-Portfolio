
        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            // Update theme toggle icon
            if (body.classList.contains('light-mode')) {
                themeToggle.textContent = '☀️';
            } else {
                themeToggle.textContent = '🌙';
            }
        });

        // Download resume functionality
        document.getElementById('downloadResume').addEventListener('click', (e) => {
            e.preventDefault();
            
            // You can replace this with your actual resume file
            const resumeUrl = 'Saurav-cv.pdf';
            
            // Create download link
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = 'Saurav-CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show success message
            alert('CV download started!');
        });

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
     let msg= "Sorry!! Demo not available for some days";
        // Active navigation link
        const sections = document.querySelectorAll('section');
        const navLinksAll = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'all 0.8s ease-out';
            observer.observe(section);
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            alert('Thank you for your message! I\'ll get back to you soon.');
            e.target.reset();
        });

        // Skill cards animation
        document.querySelectorAll('.skill-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
        });

        // Portfolio items hover effect
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';

            });
        });

        // Typing effect for hero title
        const heroTitle = document.querySelector('.hero-title');
        const text = "Hello, I'm Saurav";
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
                i++;
                setTimeout(typeWriter, 100);
            } else {
                heroTitle.innerHTML = text;
            }
        }
        
        // Start typing effect after page load
        setTimeout(typeWriter, 1000);

        
        

    const subtitleElement = document.querySelector('.typing-subtitle');
    const subtitlePhrases = ["Web Developer", "Programmer","Learner", "Tech Explorer"];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isErasing = false;

    function animateSubtitleTyping() {
        const currentPhrase = subtitlePhrases[currentPhraseIndex];

        if (!isErasing) {
            subtitleElement.innerHTML = currentPhrase.substring(0, currentCharIndex + 1) + '<span class="cursor">|</span>';
            currentCharIndex++;

            if (currentCharIndex <= currentPhrase.length) {
                setTimeout(animateSubtitleTyping, 100);
            } else {
                isErasing = true;
                setTimeout(animateSubtitleTyping, 2000); // Pause after full word
            }
        } else {
            subtitleElement.innerHTML = currentPhrase.substring(0, currentCharIndex - 1) + '<span class="cursor">|</span>';
            currentCharIndex--;

            if (currentCharIndex >= 0) {
                setTimeout(animateSubtitleTyping, 50);
            } else {
                isErasing = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % subtitlePhrases.length;
                setTimeout(animateSubtitleTyping, 500); // Pause before next word
            }
        }
    }

    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(animateSubtitleTyping, 1000);
    });

    




        
   const typingSpan = document.querySelector('.typing');
const nameText = "Saurav Gaudel";
let j = 0;
let isDeleting = false;

function typeName() {
    if (!typingSpan) return;

    if (!isDeleting) {
        typingSpan.innerHTML = nameText.substring(0, j + 1) + '<span class="cursor">|</span>';
        j++;
        if (j <= nameText.length) {
            setTimeout(typeName, 100);
        } else {
            isDeleting = true;
            setTimeout(typeName, 2000); // pause after full text
        }
    } else {
        typingSpan.innerHTML = nameText.substring(0, j - 1) + '<span class="cursor">|</span>';
        j--;
        if (j >= 0) {
            setTimeout(typeName, 50);
        } else {
            isDeleting = false;
            setTimeout(typeName, 500); // pause before typing again
        }
    }
}

// Start typing after page loads
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeName, 1000);
});


