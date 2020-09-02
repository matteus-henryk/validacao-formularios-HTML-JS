export const validarCpf = (input) => {
  const cpfNumeros = input.value.replace(/\D/g, '');

  if(ehComNumerosRepetidos(cpfNumeros)) {
    input.setCustomValidity('Este é um CPF inválido');
    return;
  }

  const primeirosNoveNumerosCpf = cpfNumeros.substr(0, 9).split('');

  const primeiroDigitoCpf = Number(cpfNumeros.charAt(9));

  const primeiroDigitoCalculado = calcularDigito(primeirosNoveNumerosCpf, 10);

  if(primeiroDigitoCpf !== primeiroDigitoCalculado) {
    input.setCustomValidity('Este CPF é inválido!');
    return;
  }

  const primeirosDezNumerosCpf = cpfNumeros.substr(0, 10).split('');

  const segundoDigitoCpf = Number(cpfNumeros.charAt(10));

  const segundoDigitoCalculado = calcularDigito(primeirosDezNumerosCpf, 11);
  
  if(segundoDigitoCpf !== segundoDigitoCalculado) {
    input.setCustomValidity('Este CPF é inválido');
    return;
  }

  input.setCustomValidity('');
  return;
};

const ehComNumerosRepetidos = (cpf) => {

  const cpfsRepetidos = [
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ];

  return cpfsRepetidos.includes(cpf);
};

const calcularTotal = (multiplicador) => (resultado, numeroAtual) => resultado + numeroAtual * multiplicador--;

const calcularDigito = (digitoACalcular, multiplicador) => {

  const total = digitoACalcular.reduce(calcularTotal(multiplicador), 0 );

  const resto = total % 11;

  let digito = 11 - resto;

  if(resto > 9) {
    digito = 0;
  }

  return digito;
};

