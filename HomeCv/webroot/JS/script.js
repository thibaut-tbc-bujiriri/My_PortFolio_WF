let TexDefil = new Typed('.text',{
    strings:["FullStack Developer","Etudiant","Web Developer"],
    loop:1,
    startDelay: 100,
    backSpeed: 100,
    typeSpeed: 50,
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let form = this;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert("Votre message a bien été envoyé ✅");
            form.reset();
        } else {
            alert("Erreur lors de l’envoi ❌");
        }
    }).catch(error => {
        alert("Erreur réseau ❌");
    });
});


const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const hamburgerIcon = hamburger.querySelector("i");
const navLinks = navbar.querySelectorAll("a");

hamburger.setAttribute("aria-expanded", "false");

const setMenuState = (shouldOpen) => {
    const isOpen = typeof shouldOpen === "boolean" ? shouldOpen : !navbar.classList.contains("active");
    navbar.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        hamburgerIcon.classList.remove("bx-menu");
        hamburgerIcon.classList.add("bx-x");
    } else {
        hamburgerIcon.classList.add("bx-menu");
        hamburgerIcon.classList.remove("bx-x");
    }
};

hamburger.addEventListener("click", (event) => {
    event.stopPropagation();
    setMenuState();
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        setMenuState(false);
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        setMenuState(false);
    }
});
