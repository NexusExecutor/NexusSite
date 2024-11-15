document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.fade-in').forEach(element => {
        element.style.opacity = 0;
        element.style.animation = "fadeIn 2s ease-in-out forwards";
    });
});
