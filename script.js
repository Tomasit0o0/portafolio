// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto de revelado al hacer scroll (Scroll Reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Aplicar a todas las tarjetas y títulos
    document.querySelectorAll('.card, .section-title, .hero').forEach(el => {
        el.classList.add('reveal'); // Añadimos clase inicial
        observer.observe(el);
    });

    // 2. Efecto de Typed (Escritura automática) en el Hero
    const heroSubtitle = document.querySelector('.hero p');
    const text = heroSubtitle.innerText;
    heroSubtitle.innerText = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroSubtitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    typeWriter();
});