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
const getTotal = (item) => item.qtde * item.preco;
const somar = (acc, el) => {
  return acc + el;
};
const totalGeral = carrinho.map(getTotal).reduce(somar, 0);

console.log(totalGeral);

Array.prototype.meuReduce = function (fn, valorInicial) {
  let acc = valorInicial;
  for (let index = 0; index < this.length; index++) {
    if (!acc && index === 0) {
      acc = this[index];
      //continue;
    } else {
      acc = fn(acc, this[index], index, this);
    }
  }

  return acc;
};

const totalGeralMeuReduce = carrinho.map(getTotal).meuReduce(somar, 0);

console.log(totalGeralMeuReduce);
