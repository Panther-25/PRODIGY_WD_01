document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    const scrollThreshold = 50;
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});