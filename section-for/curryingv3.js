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
function aplicarValidacao(fn) {
  return function (valor) {
    //lazy evaluation
    try {
      fn(valor);
    } catch (error) {
      return { error };
    }
  };
}
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao("Nome produto inválido");
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido);
const p1 = { nome: "A", preco: 14.99, desc: 0.25 };
const p2 = { nome: "AB", preco: 14.99, desc: 0.25 };
console.log(validarNomeProduto(p1.nome));
console.log(validarNomeProduto(p2.nome));
