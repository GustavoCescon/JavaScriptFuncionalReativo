//const letras = ["o", "l", "a", " ", "m", "u", "n", "d", "o"];

/* const resultado = letras.map((t) => t.toUpperCase()).reduce((a, b) => a + b);
console.log(resultado);
 */

//console.log(letras.flat().flat());
//console.log(letras.flat(2));
//console.log(letras.flat(Infinity));

const letrasAninhadas = [["o", ["l"], "a"], [" "], ["m", ["u", "n"], "d", "o"]];
const letras = letrasAninhadas.flat(Infinity);
const resultado = letras.flatMap((t) => [t, ""]).reduce((a, b) => a + b);
console.log(resultado);
