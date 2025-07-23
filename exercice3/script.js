let bouton = document.querySelector('#btnSomme');

bouton.addEventListener('click', () => {
  let nb1 = parseFloat(prompt("Entrez le premier nombre :"));
  let nb2 = parseFloat(prompt("Entrez le deuxième nombre :"));

 

  let somme = nb1 + nb2;
  alert("La somme est : " + somme);

  if (somme > 100) {
    document.write("Somme élevée");
  } else {
    document.write("Somme normale");
  }
});
