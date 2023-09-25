//element.classList.add('myClass');
//element.classList.remove('myClass');
//Dans cette page, il y a déjà quelques petites boîtes,
// et elles ont une classe CSS spécifique box.
//Crée une nouvelle boîte avec createElement,!!!!
//ajoute à cet élément la classe box,
//puis ajoute-la à la div container-boxes.

const thirdBox = document.createElement("div");
thirdBox.classList.add("box");

const containerBox = document.querySelector(".container-boxes");
containerBox.appendChild(thirdBox);
