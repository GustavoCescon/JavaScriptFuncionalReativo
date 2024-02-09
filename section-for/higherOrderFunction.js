function executar(fn, ...params) {
  return function (textoInicial) {
    return `${textoInicial} ${fn(...params)}`;
  };
}

const somar = (a, b, c) => a + b + c;
const multi = (a, b) => a * b;

const r1 = executar(somar, 4, 5, 6)("O resultado da soma: ");
const r2 = executar(multi, 30, 40)("O resultado da multiplicação: ");
console.log(r1);
console.log(r2);
