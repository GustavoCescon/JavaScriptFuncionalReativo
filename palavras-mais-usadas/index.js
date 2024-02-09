const path = require("path");
const fn = require("./funcoes");

const caminho = path.join(__dirname, "dados", "legendas");

const simbolos = [
  ".",
  "?",
  "-",
  ",",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
  "\n",
];

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom(".srt"))
  .then((arquivosSTR) => fn.lerArquivos(arquivosSTR))
  .then(fn.mesclarElemento)
  .then(fn.separarLinhas)
  .then(fn.removerSeVazio)
  .then(fn.removerSeIncluir("-->"))
  .then(fn.removerSeApenasNumero)
  .then(fn.removerSimbolos(simbolos))
  .then(fn.mesclarElemento)
  .then(fn.separarPalavras)
  .then(fn.removerSeVazio)
  .then(fn.removerSeApenasNumero)
  .then(fn.agruparElementos)
  .then(fn.ordernar("qtde", "desc"))
  .then(console.log);
