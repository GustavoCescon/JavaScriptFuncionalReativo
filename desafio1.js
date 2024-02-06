const carrinho = [
  {
    nome: "Caneta",
    qtde: 10,
    preco: 7.99,
    fragil: true,
  },
  {
    nome: "Impressora",
    qtde: 1,
    preco: 649.5,
    fragil: true,
  },
  {
    nome: "Caderno",
    qtde: 4,
    preco: 27.1,
    fragil: false,
  },
];

//1. Apenas fragil true
//2.  qtde *  preço
//3. Media dos valores
const pegarFragil = (item) => item.fragil === true;
const pegarTotal = (item) => item.qtde * item.preco;
const pegarMedia = (acc, el) => {
  const novaQtde = acc.qtde + 1;
  const novoTotal = acc.total + el;
  return {
    qtde: novaQtde,
    total: novoTotal,
    media: novoTotal / novaQtde,
  };
};
const obterFragil = carrinho.filter(pegarFragil);
const obterTotalMedia = carrinho
  .map(pegarTotal)
  .reduce(pegarMedia, { qtde: 0, total: 0, media: 0 });

console.log(obterTotalMedia);
