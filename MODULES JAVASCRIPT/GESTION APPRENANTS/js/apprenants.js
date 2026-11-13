export const apprenants = [
    {id:1, nom: "amani", note: 85},
    {id:2, nom: "deo", note: 76},
    {id:3, nom: "julien", note: 42},
    {id:4, nom: "pierre", note:65}
]

export function afficherApprenants(){
    const liste = document.querySelector("#liste-apprenants");

    apprenants.forEach(apprenant => {
        const element = document.createElement("li");

        element.textContent = 
            `${apprenant.nom} : ${apprenant.note}/100`

        liste.append(element);
    })
}