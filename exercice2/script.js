
// Création du tableau de noms
let noms = ["lulu", "sado", "lolo", "David", "Emma"];


document.write(noms);

let clickbutton = document.querySelector('#btnChercher');

clickbutton.addEventListener('click', () => {
  let nom = prompt("Entrez un nom :");
  if (nom) {
    if (noms.includes(nom)) {
      alert("Nom trouvé");
    } else {
      alert("Nom non trouvé");
    }
  }
});

