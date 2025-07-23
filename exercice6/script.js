

let clickbutton = document.querySelector('#btnparité');

clickbutton.addEventListener('click', () => {
  let nombre = prompt("Entrez un nombre :");
  if (nombre%2 ==0) {
    alert(nombre+",est pair");
    } else {
        alert(nombre+",est inpair");
       
    }
     document.write(nombre);
  }
);
