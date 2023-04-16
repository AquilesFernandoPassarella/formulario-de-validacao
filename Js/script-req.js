import ehUmCPF from "./valida-cpf.js";
const camposDoFormulario = document.querySelectorAll('[required]')


camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }

}



   



const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing:  "O campo de nome não pode estar vazio. ",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    tel: {
        valueMissing: 'O campo do número de celular não pode estar vazio.',
        tooShort: 'O campo do número de celular não tem caractéres suficientes.'
    }
}