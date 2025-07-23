
let motDePasseCorrect = "LAURENNE123";


let bouton = document.querySelector('#btnMotDePasse');

bouton.addEventListener('click', () => {
  let mot = prompt("Entrez le mot de passe :");

  if (mot === motDePasseCorrect) {
    alert("Accès autorisé");
  } else {
    alert("Accès refusé");
  }
});
