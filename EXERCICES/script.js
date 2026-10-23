const formulaire = document.getElementById("formulaire");
const nom = document.getElementById("nom");
const formation = document.getElementById("formation");
const resultat = document.getElementById("resultat");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomSaisi = nom.value.trim();
    const formationChoisie = formation.value;

    if (nomSaisi === "" || formationChoisie === "") {
        resultat.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    resultat.textContent =
        `Bienvenue ${nomSaisi} ! Vous suivez maintenant la formation ${formationChoisie}.`;
});