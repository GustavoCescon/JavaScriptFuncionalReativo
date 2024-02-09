function funcionarOuNao(valor, chanceError) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceError) {
      reject("Ocorreu um error");
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao("Teste", 0.1)
  .then((v) => console.log(v))
  .catch((error) => console.error("Erro:", error))
  .finally(() => console.log("Finally"));
