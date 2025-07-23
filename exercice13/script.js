
// Création du tableau de noms
let noms = ["banane", "safou", "patate"];


document.write(noms);

let clickbutton = document.querySelector('#btnChercher');

clickbutton.addEventListener('click', () => {
  let nom = prompt("entrer un article");
  if (nom) {
    if (noms.includes(nom)) {
      alert("article ajoutée");
    } else {
      alert("ajouter un article");
    }
  }
});

