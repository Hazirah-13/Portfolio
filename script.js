// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document
            .querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Scroll fade animation
const sections = document.querySelectorAll(".fade-in");

const revealOnScroll = () => {
    const trigger = window.innerHeight - 100;
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < trigger) {
            sec.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
