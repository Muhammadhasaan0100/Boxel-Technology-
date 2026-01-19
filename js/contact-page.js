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

    // ========== Form Validation ==========
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');

    // Validate email format
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Validate phone format (optional)
    function isValidPhone(phone) {
        if (phone === '') return true;
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(phone);
    }

    // Show error message
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        input.style.borderColor = 'var(--accent)';
    }

    // Hide error message
    function hideError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.style.display = 'none';
        input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }

    // Validate inputs on blur
    nameInput.addEventListener('blur', () => {
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
        } else {
            hideError(nameInput);
        }
    });

    emailInput.addEventListener('blur', () => {
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required');
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email');
        } else {
            hideError(emailInput);
        }
    });

    phoneInput.addEventListener('blur', () => {
        if (phoneInput.value.trim() !== '' && !isValidPhone(phoneInput.value.trim())) {
            showError(phoneInput, 'Please enter a valid phone number');
        } else {
            hideError(phoneInput);
        }
    });

    messageInput.addEventListener('blur', () => {
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required');
        } else {
            hideError(messageInput);
        }
    });

    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate all fields
        let isValid = true;
        
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        }
        
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email');
            isValid = false;
        }
        
        if (phoneInput.value.trim() !== '' && !isValidPhone(phoneInput.value.trim())) {
            showError(phoneInput, 'Please enter a valid phone number');
            isValid = false;
        }
        
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required');
            isValid = false;
        }
        
        // If form is valid, show success modal
        if (isValid) {
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show the success modal
            successModal.classList.add('active');
            contactForm.reset();
        }
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        successModal.classList.remove('active');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.remove('active');
        }
    });

    // ========== 3D Communication Sphere ==========
    const communicationSphere = document.querySelector('.communication-sphere');
    if (communicationSphere) {
        communicationSphere.addEventListener('mouseenter', () => {
            document.querySelectorAll('.communication-sphere .ring').forEach(ring => {
                ring.style.animationPlayState = 'paused';
            });
            document.querySelectorAll('.dot').forEach(dot => {
                dot.style.animationPlayState = 'paused';
            });
        });
        
        communicationSphere.addEventListener('mouseleave', () => {
            document.querySelectorAll('.communication-sphere .ring').forEach(ring => {
                ring.style.animationPlayState = 'running';
            });
            document.querySelectorAll('.dot').forEach(dot => {
                dot.style.animationPlayState = 'running';
            });
        });
    }

    // ========== Map Marker Animation ==========
    const mapMarker = document.querySelector('.map-marker');
    if (mapMarker) {
        mapMarker.addEventListener('mouseenter', () => {
            document.querySelector('.marker-pulse').style.animationPlayState = 'paused';
        });
        
        mapMarker.addEventListener('mouseleave', () => {
            document.querySelector('.marker-pulse').style.animationPlayState = 'running';
        });
    }

    // ========== Smooth Scrolling ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Helper function for debouncing
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