let bouton = document.querySelector('#btnConfirmer');

bouton.addEventListener('click', () => {

  let confirmation = confirm("Voulez-vous vraiment effectuer cette action ?");


  if (confirmation) {
    alert("Action confirmée");
  } else {
    alert("Action annulée");
  }
});
