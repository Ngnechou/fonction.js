let bouton = document.querySelector('#btnmontant');

bouton.addEventListener('click', () => {
  let solde ="67000";
   parseFloat(prompt("Entrez le montant :"));
  
 let montant ="";

  

  if (montant<= solde) {
    alert("retrait autoriser");
  } else if(montant> solde) {
    alert("solde insuffisant");
  }
});
