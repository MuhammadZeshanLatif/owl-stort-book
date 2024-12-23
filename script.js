let index = 0;
const images = document.querySelectorAll('.slides img');

function changeSlide(step) {
    images[index].classList.remove('active');
    index = (index + step + images.length) % images.length;
    images[index].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => changeSlide(1), 5000);
});
