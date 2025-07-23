let bouton = document.querySelector('#btnSaison');

bouton.addEventListener('click', () => {
  let mois = prompt("Entrez un mois (ex : janvier) :");
  if (!mois) return;

  let moisMin = mois.toLowerCase();
  let saison = "";

  if (["novembre", "décembre", "janvier", "février"].includes(moisMin)) {
    saison = "Saison sèche";
  }
  
  else if (["mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre"].includes(moisMin)) {
    saison = "Saison des pluies";
  } else {
    alert("Mois invalide");
    return;
  }

  alert("Au Cameroun, c’est la " + saison);
  document.write("<h3>Vous avez saisi : " + mois + "</h3>");
});
