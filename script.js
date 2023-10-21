//inicio do codigo em java, que faz o movimento do carrosel
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides[currentSlide].style.display = 'none';
    slides[slideIndex].style.display = 'block';
    currentSlide = slideIndex;
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

showSlide(currentSlide);

document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);