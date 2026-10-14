const titre = document.getElementById("titre");

titre.style.color = "blue";
titre.style.fontSize = "20px";
titre.style.background= "yellow";
titre.style.textAlign = "center";
titre.style.padding = "20px"

const message = document.querySelector(".message");

const messagew = document.querySelector("p");

const messages = document.querySelectorAll(".message")
messages.forEach(function(messages){
    console.log(messages.textContent)
})

const contenu = document.getElementById("contenu");
contenu.innerHTML = "<h2>DOM LEARNING</h2> <p>Debutons la seance</p>"
console.log(contenu.innerHTML)

let photo = document.getElementById("photo")
// photo.src = "afrix.png";
// photo.alt = "logo"
photo.setAttribute("src", "afrix.png")

const source = photo.getAttribute("src")
console.log(source)

photo.removeAttribute("src")