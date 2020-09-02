export const mensagenDeErroCustomizada = (tipo, validity) => {

  let mensagemDeErro = '';

  const tiposDeErro = [
    'valueMissing', 
    'typeMismatch', 
    'tooShort', 
    'rangeUnderflow',
    'customError',
    'patternMismatch'
  ]

  const mensagensDeErro = {
    email: {
      valueMissing: 'O E-mail é obrigatório!',
      typeMismatch: 'Este E-mail não é válido!'
    },
    senha: {
      valueMissing: 'A senha é obrigatória',
      tooShort: 'A senha dave ter no mínimo 8 caracteres!'
    },
    dataNascimento: {
      valueMissing: 'A data de nascimento é obrigatório!',
      rangeUnderflow: 'A data mínima é 01/01/1901',
      customError: 'A idade mínima é de 18 anos'
    },
    cpf: {
      valueMissing: 'O CPF é obrigatório!',
      customError: 'Este não é um CPF válido'
    },
    rg: {
      valueMissing: 'O RG é nescessário',
    },
    cep: {
      valueMissing: 'O CEP é obrigatório!',
      patternMismatch: 'Este não é um CEP válido',
      customError: 'Este não é um CEP válido'
    },
    logradouro: {
      valueMissing: 'O logradouro é obrigatório!',
    },
    cidade: {
      valueMissing: 'A cidade é obrigatório!',

    },
    estado: {
      valueMissing: 'O estado é obrigatório!',
    },
    preco: {
      valueMissing: 'O preço é obrigatório!',
      customError: 'O valor do produto deve ser maior que R$ 0'
    },
    nomeProduto: {
      valueMissing: 'O nome do produto é obrigatório!'
    }

  }

  tiposDeErro.forEach(erro => {
    if(validity[erro]) {
      mensagemDeErro = mensagensDeErro[tipo][erro];
    }
  });

  return mensagemDeErro;

};