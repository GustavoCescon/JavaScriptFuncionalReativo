const nums = [1, 2, 3, 4, 5, 6, 7];
const dobro = (n) => n * 2;
console.log(nums.map(dobro));

const nomes = ["Ana", "Bia", "Gui"];
const primeiraLetra = (texto) => texto[0];
const letras = nomes.map(primeiraLetra);
console.log(nomes, letras);

const carrinho = [
  {
    nome: "Caneta",
    qtde: 10,
    preco: 7.99,
  },
  {
    nome: "Impressora",
    qtde: 0,
    preco: 649.5,
  },
  {
    nome: "Caderno",
    qtde: 4,
    preco: 27.1,
  },
];

const getName = (item) => item.nome;
const qtdeVezesPreco = (item) => item.qtde * item.preco;
console.log(carrinho.map(qtdeVezesPreco));
console.log(carrinho.map(getName));

Array.prototype.meuMap = function (fn) {
  const mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this));
  }
  return mapped;
};

console.log(carrinho.meuMap(qtdeVezesPreco));
console.log(carrinho.meuMap(getName));
