document.addEventListener('DOMContentLoaded', function() {
    // Menú toggle
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    // Animación para los botones
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
        });

        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animación para el robot (aplicar solo si el .robot-card existe)
    const robotCard = document.querySelector('.robot-card');
    if (robotCard) {
        robotCard.addEventListener('mousemove', function(e) {
            const rect = robotCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `rotate(3deg) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        robotCard.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(3deg)';
        });
    }

    // Animación para las feature cards (con IntersectionObserver)
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        featureCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            observer.observe(card);
        });
    }

    // Inicialización del menú de navegación (añadir clases activas)
    const navLinksList = document.querySelectorAll('.nav-links a');
    navLinksList.forEach(link => {
        link.addEventListener('click', function() {
            navLinksList.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Animación para la bienvenida (IntersectionObserver para activación de secciones)
    const sectionContainers = document.querySelectorAll('.robotics-section-container-1, .robotics-section-container-2, .robotics-section-container-3');
    const welcomeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.5 });

    sectionContainers.forEach(section => {
        welcomeObserver.observe(section);
    });
});

//footer
function createClouds() {
  const cloudTransition = document.querySelector('.cloud-transition');
  setInterval(() => {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.top = Math.random() * 80 + 'px';
    cloud.style.width = Math.random() * 100 + 50 + 'px';
    cloud.style.height = Math.random() * 60 + 30 + 'px';
    cloudTransition.appendChild(cloud);
    
    setTimeout(() => {
      cloud.remove();
    }, 20000);
  }, 3000);
}

function addCircuitEffects() {
  const footer = document.querySelector('.footer');
  setInterval(() => {
    const line = document.createElement('div');
    line.className = 'circuit-line';
    line.style.top = Math.random() * 100 + '%';
    line.style.left = Math.random() * 100 + '%';
    footer.appendChild(line);
    
    setTimeout(() => {
      line.remove();
    }, 3000);
  }, 2000);
}

createClouds();
addCircuitEffects();
