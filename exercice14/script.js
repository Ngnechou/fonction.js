let clickbutton = document.querySelector('#btnparité');

clickbutton.addEventListener('click', () => {
  let temp = prompt("Entrez la temperature :");
  if (temp>30) {
    alert("chaud");
    } else {
        alert("froid");
       
    }
     document.write(temp);
  }
);