
/* Função criada para aplicar a mascara ao campo CPF, assim aplicando os pontos e o hifen no final */

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



/*Função criada para criar a mascar do campo celular, colocando as aspas no código de area, os espaços necessarios e o hifen*/

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
