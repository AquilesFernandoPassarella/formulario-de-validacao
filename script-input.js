const Cpf = document.querySelector("#cpf");

Cpf.addEventListener("keypress", () => {
  let Cpflength = Cpf.value.length;

  if (Cpflength === 3 || Cpflength === 7) {
    Cpf.value += ".";
  }

  if (Cpflength === 11) {
    Cpf.value += "-";
  }
});

const tel = document.querySelector("#tel");

tel.addEventListener("keypress", function (e) {
  let tellenght = tel.value.length;

  if (tellenght === 0) {
    tel.value += "(";
  }

  if (tellenght === 3) {
    tel.value += ")";
  }

  if (tellenght === 3 || tellenght === 6) {
    tel.value += " ";
  }
  
  if (tellenght === 11) {
    tel.value += "-";
  }
});
