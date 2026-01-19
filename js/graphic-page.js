document.addEventListener('DOMContentLoaded', function() {
    // Add smooth hover effect to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        item.addEventListener('mouseenter', () => {
            item.style.transition = 'none';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transition = 'all 0.5s ease';
            item.style.transform = 'rotateY(0) rotateX(0)';
        });
    });

    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.portfolio-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.animationPlayState = 'running';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});