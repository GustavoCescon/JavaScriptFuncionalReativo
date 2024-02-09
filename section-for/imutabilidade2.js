/**
 * DADOS MUTAVEIS - IMPERATIVO
 */
const nums = [3, 1, 7, 9, 4, 6];

let total = 0;

for (let index = 0; index < nums.length; index++) {
  total += nums[index];
}

console.log(total);

/**
 * DADOS IMUTAVEIS - DECLARATIVO
 */
//reduce
const numeros = [3, 1, 7, 9, 4, 6];
const totalNumeros = numeros.reduce((a, b) => a + b);
console.log(totalNumeros);

//recursividade
function somarArray(array, total = 0) {
  if (array.length === 0) return total;
  else return somarArray(array.slice(1), total + array[0]);
}

console.log(somarArray(numeros));
