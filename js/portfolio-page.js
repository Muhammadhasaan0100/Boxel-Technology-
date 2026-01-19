document.addEventListener('DOMContentLoaded', function() {
    // ========== Mobile Navigation ==========
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // ========== Portfolio Filtering ==========
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const searchInput = document.querySelector('.search-input');

   // Filter by category
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// 🔥 Default active filter on page load (3D)
const defaultFilter = "3d";
document.querySelector(`.filter-btn[data-filter="${defaultFilter}"]`).classList.add('active');

// Show only 3D items on page load
portfolioItems.forEach(item => {
    if (item.getAttribute('data-category') === defaultFilter) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
});


    // ========== 3D Item Hover Effects ==========
    portfolioItems.forEach(item => {
        // Add tilt effect on mousemove
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            item.style.transform = `translateY(-10px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(-10px) rotateX(0) rotateY(0)';
        });
    });

    // ========== Video Play Button Effect ==========
    const videoPreviews = document.querySelectorAll('.item-video-preview');
    
    videoPreviews.forEach(preview => {
        const playButton = preview.querySelector('.play-button');
        
        preview.addEventListener('mouseenter', () => {
            playButton.style.transform = 'translate(-50%, -50%) scale(1.1)';
        });
        
        preview.addEventListener('mouseleave', () => {
            playButton.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    // ========== Scroll Reveal Animation ==========
    const scrollRevealItems = document.querySelectorAll('.portfolio-item');
    
    function checkScrollReveal() {
        scrollRevealItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state
    scrollRevealItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    
    // Check on load and scroll
    window.addEventListener('load', checkScrollReveal);
    window.addEventListener('scroll', checkScrollReveal);

    // ========== Floating Cubes Animation ==========
    const floatingCubes = document.querySelector('.floating-cubes');
    if (floatingCubes) {
        floatingCubes.addEventListener('mouseenter', () => {
            document.querySelectorAll('.floating-cubes .cube').forEach(cube => {
                cube.style.animationPlayState = 'paused';
            });
        });
        
        floatingCubes.addEventListener('mouseleave', () => {
            document.querySelectorAll('.floating-cubes .cube').forEach(cube => {
                cube.style.animationPlayState = 'running';
            });
        });
    }

    // ========== CTA Floating Shapes ==========
    const ctaShapes = document.querySelector('.floating-shapes');
    if (ctaShapes) {
        ctaShapes.addEventListener('mouseenter', () => {
            document.querySelectorAll('.floating-shapes .shape').forEach(shape => {
                shape.style.animationPlayState = 'paused';
            });
        });
        
        ctaShapes.addEventListener('mouseleave', () => {
            document.querySelectorAll('.floating-shapes .shape').forEach(shape => {
                shape.style.animationPlayState = 'running';
            });
        });
    }
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

// // ===== 🔐 Show Private Button & Section via Secret Link =====
//   document.addEventListener("DOMContentLoaded", function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     const accessCode = urlParams.get("access");

//     const privateBtn = document.getElementById("private-btn");
//     const privateProjects = document.querySelectorAll('[data-category="private"]');

//     if (accessCode === "private@boxeltech123") {
//       // Show Private Filter Button
//       privateBtn.style.display = "inline-block";

//       // Show Private Projects
//       privateProjects.forEach(item => {
//         item.style.display = "block";
//       });
//     } else {
//       // Hide Private Button & Projects
//       privateBtn.style.display = "none";
//       privateProjects.forEach(item => {
//         item.style.display = "none";
//       });
//     }
//   });