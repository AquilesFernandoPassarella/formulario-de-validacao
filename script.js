//Função criada para utilizar somente letras dentro do campo nome

const inputName = document.querySelector("#name");

inputName.addEventListener("keypress", function (e) {
  const keyCode = e.keyCode ? e.keyCode : e.wich;

  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});





// Função criada para utilizar somente números dentro do campo Celular

const telInput = document.querySelector("#tel");

telInput.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
  }
});

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);

  const pattern = "[0-9]";

  if (char.match(pattern)) {
    return true;
  }
}



// Função criada para utilizar somente números dentro do campo CPF

const cpf = document.querySelector("#cpf");

cpf.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
  }
});

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);

  const pattern = "[0-9]";

  if (char.match(pattern)) {
    return true;
  }
}


