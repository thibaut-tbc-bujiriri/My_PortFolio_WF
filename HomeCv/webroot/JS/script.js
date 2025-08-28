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

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("bx-x");
});
