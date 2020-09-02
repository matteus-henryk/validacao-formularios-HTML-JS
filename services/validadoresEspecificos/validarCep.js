export const validarCep = (input) => {
  const cep = input.value.replace(/\D/g, '');
  console.log(cep);

  if(input.validity.valid) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        "content-type": "application/json;charset=utf-8"
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        if(data.erro) {
          input.setCustomValidity('Este CEP não é valdo!');
          return;
        }

        preencherCampos(data);
        input.setCustomValidity('');
        return;
      })
  }

};

const preencherCampos = (data) => {
  console.log(data);
  const logradouro = document.getElementById('logradouro');
  const cidade = document.getElementById('cidade');
  const estado = document.getElementById('estado');

  logradouro.value = data.logradouro;
  cidade.value = data.localidade;
  estado.value = data.uf;
};

