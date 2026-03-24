const menuBtns = document.querySelectorAll(".Menu-logo");
const menu = document.querySelector(".Menu");
const links = document.querySelectorAll(".Menu a");

menuBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        "h1, h2, h3, h4, p, a, img:not(.Photos img)"
    );

    elements.forEach(el => el.classList.add("reveal"));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
    });
});