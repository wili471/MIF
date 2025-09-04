document.addEventListener('DOMContentLoaded', function() {
    // Animar elementos cuando aparezcan en pantalla
    const elementsToAnimate = document.querySelectorAll('.service-item, .project-card, .footer-content p, .footer-content .social-icons');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Animación extra del logo al refrescar
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.animation = 'fadeInLeft 1s ease forwards';
    }

    // Animación de la barra de navegación al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollPosition > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});