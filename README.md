<h2>Projeto de conclusão do curso Validação com JavaScript e HTML5: boas práticas de UX da Alura</h2>

<p>
  Este projetp foi criado em base a um projeto do curso "Validação com JavaScript e HTML5: boas práticas de UX" da alura, com intuito de por em pratica o que foi aprendido durante o curso.
</p>

<h3>Validação com  HTML5</h3>

<p>
  Validações feitas com HTML5 são diretamente em suas tag`s de input, alguns tipos de validações:
  <ul>
    <li>
      required: compo obrigatorio;
    </li>
    <li>
      type="email": permite apenas emails exemplo@exemplo;
    </li>
    <li>
      minlength: define o minimo de caracteres, geralmente usado para senhas;
    </li>
    <li>
      type="date" com min="XXXX/XX/XX" usa para definir uma data minima para ser preenchido;
    </li>
    <li>
      pattern: usado para defir um formato aceito de caracteres Ex(pattern="[\d]{5}-?[\d]{3}", usado para CEP)
    </li>
  </ul>
</p>

<h3>Validação com JavaScript</h3>

<p>
  Usamos JavaScript para aplicar regras de negocio que o HTML não da suporte, como
  validação de CPF, CEP, idade minima, preço de produtos e etc.
  O JavaScript nos dá acesso a um objeto de validação padrão de cada teg input
  <h5>ValidityState</h5>
  <ul>
    <li>ValidityState.badInput: <p>É um Boolean informando se o usuário inseriu um valor que o navegador é incapaz de converter.</p></li>
    <li>ValidityState.customError: <p>É um Boolean informando se o elemento possui uma mensagem de validação definida por setCustomValidity() para um valor não vázio.</p></li>
    <li>ValidityState.patternMismatch: <p>É um Boolean informando se o valor não combina com o padrão (pattern) especificado</p></li>
    <li>ValidityState.rangeOverflow: <p>É um Boolean informando se o valor é maior do que o máximo especificado pelo atributo max.</p></li>
    <li>ValidityState.rangeUnderflow: <p>É um Boolean informando se o valor é menor do que o mínimo especificado pelo atributo min.</p></li>
    <li>ValidityState.stepMismatch: <p>É um Boolean informando se o valor não segue a regra definida pelo atributo step.</p></li>
    <li>ValidityState.tooLong: <p>É um Boolean informando se o valor ultrapassa o especificado pelo atributo maxlength para HTMLInputElement ou HTMLTextAreaElement. OBS: Isso nunca será true em navegadores como o Firefox, pois a inserção de valores não é permitida ao alcançar o valor definido em maxlength.</p></li>
    <li>ValidityState.tooShort: <p>É um Boolean informando se o valor não corresponde ao especificado no atributo minlength para HTMLInputElement ou HTMLTextAreaElement.</p></li>
    <li>ValidityState.typeMismatch: <p>É um Boolean informando se o valor não corresponde ao tipo de entrada definida. (Um exemplo é quando type é email ou url).</p></li>
    <li>ValidityState.valid : <p>É um Boolean informando se o elemento é completamente válido.</p></li>
    <li>ValidityState.valueMissing: <p>É um Boolean informando que o elemento tem o atributo required, mas não tem value.</p></li>
  </ul>

  Com esse objeto podemos definir mensagens customisadas através de uma função <em>setCustomValidity()</em> que atibui uma mensagem customizada a um determinado tipo de input caso os por padrão não seje sulficiente.
</p>

<h4>Me siga em minhas redes sociais</h4>

<a href="https://www.instagram.com/matteusfrancischini/?hl=pt-br"> <img width="50" height="50" src="./social/instagram.svg"> </a>
<a href="https://www.linkedin.com/in/matteus-henryk-086451196/"> <img width="50" height="50" src="./social/linkedin.svg"> </a>
<a href="https://app.rocketseat.com.br/me/matteus-henryk-1590455615"> <img width="50" height="50" src="./social/rocket.svg"> </a>