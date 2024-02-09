function composicao(...fns) {
  return function (valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, valor);
  };
}
function gritar(text) {
  return text.toUpperCase();
}
function enfatizar(text) {
  return `${text} !!!`;
}
function tornarLento(text) {
  return text.split("").join(" ");
}
const exagerado = composicao(gritar, enfatizar, tornarLento);
const resultado = exagerado("PARA");
const resultado2 = exagerado("Cuidado com o cachorro");
console.log(resultado);
console.log(resultado2);
