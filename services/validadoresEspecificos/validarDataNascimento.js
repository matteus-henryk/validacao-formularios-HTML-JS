export const validarDataNascimento = (input) => {
  const dataNascimento = new Date(input.value);
  const dataAtual = new Date();

  const dataFaz18 = new Date(
    dataNascimento.getUTCFullYear() + 18,
    dataNascimento.getUTCDate(),
    dataNascimento.getUTCDay()
  );

  if(dataFaz18 > dataAtual) {
    input.setCustomValidity('A idade mínima é 18 anos');
    return;
  }

  input.setCustomValidity('');
  return
};

