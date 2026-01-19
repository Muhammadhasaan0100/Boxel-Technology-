document.addEventListener('DOMContentLoaded', function() {
    // ========== Mobile Navigation ==========
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // ========== 3D Gears Animation Control ==========
    const gearsContainer = document.querySelector('.gears-container');
    if (gearsContainer) {
        let isHoveringGears = false;
        
        gearsContainer.addEventListener('mouseenter', () => {
            isHoveringGears = true;
            document.querySelectorAll('.gear').forEach(gear => {
                gear.style.animationPlayState = 'paused';
            });
        });
        
        gearsContainer.addEventListener('mouseleave', () => {
            isHoveringGears = false;
            document.querySelectorAll('.gear').forEach(gear => {
                gear.style.animationPlayState = 'running';
            });
        });

        // Add slight rotation on mousemove for interactive effect
        gearsContainer.addEventListener('mousemove', (e) => {
            if (isHoveringGears) {
                const rect = gearsContainer.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const angleX = (y - centerY) / 20;
                const angleY = (centerX - x) / 20;
                
                gearsContainer.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
            }
        });
    }

    // ========== Service Cards Animation ==========
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Add mouseenter/mouseleave effects
        card.addEventListener('mouseenter', () => {
            const floatingShape = card.querySelector('.floating-shape');
            if (floatingShape) {
                floatingShape.style.animation = 'float-shape-hover 2s infinite ease-in-out';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const floatingShape = card.querySelector('.floating-shape');
            if (floatingShape) {
                floatingShape.style.animation = 'float-shape 8s infinite ease-in-out';
            }
        });
        
        // Add tilt effect on mousemove
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `translateY(-10px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(-10px) rotateX(5deg) rotateY(5deg)';
        });
    });

    // ========== Process Cards Animation ==========
    const processCards = document.querySelectorAll('.process-card');
    
    // Animate process cards on scroll
    function animateProcessCards() {
        processCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state
    processCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    
    // Animate on load and scroll
    window.addEventListener('load', animateProcessCards);
    window.addEventListener('scroll', animateProcessCards);

    // ========== CTA Section Animation ==========
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
        // Add pulsing animation to CTA button
        const ctaButton = ctaSection.querySelector('.btn');
        if (ctaButton) {
            setInterval(() => {
                ctaButton.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    ctaButton.style.transform = 'scale(1)';
                }, 1000);
            }, 3000);
        }
    }

    // ========== Scroll Reveal Animations ==========
    const scrollRevealElements = document.querySelectorAll('.section-title, .service-card');
    
    function checkScrollReveal() {
        scrollRevealElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state
    scrollRevealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Check on load and scroll
    window.addEventListener('load', checkScrollReveal);
    window.addEventListener('scroll', checkScrollReveal);

    // ========== Floating Shapes Animation ==========
    // Add animation to all floating shapes
    document.querySelectorAll('.floating-shape').forEach(shape => {
        // Randomize animation duration and delay for more organic feel
        const duration = 8 + Math.random() * 4;
        const delay = Math.random() * 5;
        shape.style.animation = `float-shape ${duration}s infinite ${delay}s ease-in-out`;
    });

    // ========== Add CSS Keyframes Dynamically ==========
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        @keyframes float-shape-hover {
            0%, 100% {
                transform: translateY(0) rotateX(0) rotateY(0);
            }
            50% {
                transform: translateY(-20px) rotateX(20deg) rotateY(20deg);
            }
        }
    `;
    document.head.appendChild(styleElement);
});

// ========== Helper Functions ==========
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}