//passar o caminho do arquivo e retornar o arquivo

const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

function exibirConteudo(caminho) {
  return new Promise((resolve, reject) => {
    fs.readFile(caminho, {}, (err, conteudo) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(conteudo.toString());
    });
  });
}
exibirConteudo(caminho).then(console.log);
