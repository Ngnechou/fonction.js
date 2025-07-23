let bouton = document.querySelector('#btnmoyenne');

bouton.addEventListener('click', () => {
  let nb1 = parseFloat(prompt("Entrez le premier nombre :"));
  let nb2 = parseFloat(prompt("Entrez le deuxième nombre :"));
  let nb3 = parseFloat(prompt("Entrez le troiseime nombre :"));

 

  let moyenne = (nb1 + nb2 + nb3)/3;
  alert("La moyenne est : " + moyenne);

  if (moyenne > 10) {
    document.write("moyenne élevée");
  } else {
    document.write("moyenne faible");
  }
});
