const champTache = document.getElementById("tache");
const boutonajouter = document.getElementById("ajouter");
const listeTaches = document.getElementById("liste-taches");
const message = document.getElementById("message");

boutonajouter.addEventListener("click", function () {
    const texteTache = champTache.value.trim();
    if(texteTache === ""){
        message.textContent = "Veuillez saisir une tache";
        return;
    }

    const nouvelleTache = document.createElement("li")

    const texte = document.createElement("span")
    texte.textContent = texteTache

    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = "Supprimer";
    boutonSupprimer.classList.add("supprimer")

    boutonSupprimer.addEventListener("click", function(){
        nouvelleTache.remove();
    })

    nouvelleTache.append(texte, boutonSupprimer);
    listeTaches.append(nouvelleTache);

    champTache.value = "";
    message.textContent = "";
    champTache.focus();
})
