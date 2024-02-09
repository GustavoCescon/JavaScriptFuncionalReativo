function primeiroElemento(array) {
  return array[0];
}
function primeiraLetra(string) {
  return string[0];
}

function converterMinuscula(letra) {
  return letra.toLowerCase();
}

new Promise(function (resolve) {
  resolve(["Ana", "Bia", "Carlos"]);
})
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(converterMinuscula)
  .then(console.log);
