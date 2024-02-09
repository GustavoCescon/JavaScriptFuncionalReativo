//sem currying
function soma(a, b, c) {
  return a + b + c;
}
console.log(soma(1, 2, 3));
//com currying
function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(somar(1)(2)(3));
function textoComTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        //lazy evaluation
        const tamanho = (texto || "").trim().length;
        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao("Nome produto inválido");
const p1 = { nome: "A", preco: 14.99, desc: 0.25 };
forcarNomeProdutoValido(p1.nome);
