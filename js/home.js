
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    
        // Smooth Scrolling for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Portfolio Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        // Animate Skills on Scroll
        const skillBars = document.querySelectorAll('.skill-progress');
        const skillsSection = document.querySelector('.skills');

        function animateSkills() {
            const skillsPosition = skillsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (skillsPosition < screenPosition) {
                skillBars.forEach(bar => {
                    const width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
                    bar.style.width = width;
                });
            }
        }

        window.addEventListener('scroll', animateSkills);

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

        // 3D Cube Animation Control on Hover
        const cube = document.querySelector('.cube');
        
        cube.addEventListener('mouseenter', () => {
            cube.style.animationPlayState = 'paused';
        });
        
        cube.addEventListener('mouseleave', () => {
            cube.style.animationPlayState = 'running';
        });

        // Initialize skills animation on page load
        window.addEventListener('load', () => {
            skillBars.forEach(bar => {
                bar.style.width = '0';
            });
        });
        // fll screen open pic

        document.querySelectorAll('.portfolio-grid').forEach(item => {
    item.addEventListener('click', () => {
      // Extract the URL from the background image style
      const bgImage = item.style.backgroundImage.slice(5, -2); // Removes `url("...")`
      
      // Create a temporary image element
      const img = document.createElement('img');
      img.src = bgImage;
      img.style.maxWidth = '100%';
      img.style.maxHeight = '100%';

      // Wrapper div to hold the image in fullscreen
      const fullscreenWrapper = document.createElement('div');
      fullscreenWrapper.style.display = 'flex';
      fullscreenWrapper.style.justifyContent = 'center';
      fullscreenWrapper.style.alignItems = 'center';
      fullscreenWrapper.style.backgroundColor = 'black';
      fullscreenWrapper.style.width = '100%';
      fullscreenWrapper.style.height = '100%';
      fullscreenWrapper.appendChild(img);

      document.body.appendChild(fullscreenWrapper);

      // Request fullscreen
      if (fullscreenWrapper.requestFullscreen) {
        fullscreenWrapper.requestFullscreen();
      } else if (fullscreenWrapper.webkitRequestFullscreen) {
        fullscreenWrapper.webkitRequestFullscreen();
      } else if (fullscreenWrapper.msRequestFullscreen) {
        fullscreenWrapper.msRequestFullscreen();
      }

      // Exit cleanup
      document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
          fullscreenWrapper.remove();
        }
      });
    });
  });
