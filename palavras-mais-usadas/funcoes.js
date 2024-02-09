const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo));
      resolve(arquivos);
    } catch (error) {
      reject(error);
    }
  });
}
function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (error) {
      reject(error);
    }
  });
}
function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}
function elementosTerminadosCom(padraoTextual) {
  return function (array) {
    return array.filter((el) => el.endsWith(padraoTextual));
  };
}
function removerSeVazio(array) {
  return array.filter((el) => el.trim());
}

function removerSeIncluir(padraoTextual) {
  return function (array) {
    return array.filter((el) => !el.includes(padraoTextual));
  };
}

function removerSeApenasNumero(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map((el) => {
      let textoSemSimbolos = el;
      simbolos.forEach((simbolo) => {
        textoSemSimbolos = textoSemSimbolos.split(simbolo).join("");
      });
      return textoSemSimbolos;
    });
  };
}
const mesclarElemento = (array) => array.join(" ");
const separarLinhas = (todoConteudo) => todoConteudo.split("\n");
const separarPalavras = (todoConteudo) => todoConteudo.split(" ");

function agruparElementos(palavras) {
  return Object.values(
    palavras.reduce((acc, palavra) => {
      const p = palavra.toLowerCase();
      const qtde = acc[p] ? acc[p].qtde + 1 : 1;
      acc[p] = { elemento: p, qtde };
      return acc;
    }, {})
  );
}

function ordernar(attr, ordem = "asc") {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr];
    const desc = (o1, o2) => o2[attr] - o1[attr];
    return array.sort(ordem === "asc" ? asc : desc);
  };
}
module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivos,
  removerSeVazio,
  removerSeIncluir,
  removerSeApenasNumero,
  removerSimbolos,
  mesclarElemento,
  separarLinhas,
  separarPalavras,
  agruparElementos,
  ordernar,
};
