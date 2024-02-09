const pessoa = {
  nome: "João",
  altura: 1.8,
  cidade: "Rio de Janeiro",
};
//atribuicao de referencia
const novaPessoa = pessoa;
novaPessoa.nome = "Carlos";
function alteraPessoa(novaPessoa) {
  novaPessoa.nome = "Maria";
}
alteraPessoa(novaPessoa);

//passagem pro referencia
function alterarNome(pessoa) {
  const novaPessoa = { ...pessoa };
  novaPessoa.nome = "Joãozinho";
  return novaPessoa;
}
const pessoaNova = alterarNome(pessoa);
console.log(pessoa, novaPessoa, pessoaNova);
