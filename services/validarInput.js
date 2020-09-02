import { mensagenDeErroCustomizada } from "./mensagenDeErroCustomizada.js";
import { validarDataNascimento } from './validadoresEspecificos/validarDataNascimento.js';
import { validarCpf } from './validadoresEspecificos/validarCpf.js';
import { validarCep } from "./validadoresEspecificos/validarCep.js";


export const validarInput = (input, adcionarErro = true) => {
  const elementoEhValido = input.validity.valid;

  const classeElementoErro = 'erro-validacao';
  const classeInputErro = 'possui-erro-validacao';

  const elementoPaiInput = input.parentNode;
  
  const ElementoErroExiste = elementoPaiInput.querySelector(`.${classeElementoErro}`);

  const elementoErro = ElementoErroExiste || document.createElement('div');

  const tipo = input.dataset.tipo;

  const validadoresEspecificos = {
    dataNascimento: input => validarDataNascimento(input),
    cpf: input => validarCpf(input),
    cep: input => validarCep(input)
  }

  if(validadoresEspecificos[tipo]) {
    validadoresEspecificos[tipo](input);
  }

  if(!elementoEhValido) {
    elementoErro.className = classeElementoErro;
    elementoErro.textContent = mensagenDeErroCustomizada(tipo, input.validity);
    
    if(adcionarErro) {
      input.after(elementoErro);
      input.classList.add(classeInputErro);
    }
  } else {
    elementoErro.remove();
    input.classList.remove(classeInputErro);

    const botaoSubmit = document.getElementById('botaoSubmit');

    botaoSubmit.addEventListener('click', modal);
  }
}; 


const modal = (evento) => {
  evento.preventDefault();
  const modal = document.querySelector('.modal');
  const container = document.querySelector('.container');

  container.classList.add('hide');
      
  modal.classList.remove('hide');

  setTimeout(() => {
    modal.classList.add('hide');
    container.classList.remove('hide');
    window.location.href = './cadastro-sucesso.html';
  }, 3000);
};