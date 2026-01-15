const typingElement = document.querySelector('.typing-text');
const text = typingElement.getAttribute('data-text');

let index = 0;
const speed = 35;
let started = false;

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            started = true;
            typeEffect();
        }
    });
}, {
    threshold: 0.5
});

observer.observe(typingElement);

const revealElements = document.querySelectorAll('.scroll-reveal');

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.2
});

revealElements.forEach(el => revealObserver.observe(el));