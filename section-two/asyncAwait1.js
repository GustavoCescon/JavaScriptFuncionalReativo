function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      //console.log("Executando promise..");
      resolve();
    }, tempo);
  });
}
// esperarPor().then(esperarPor).then(esperarPor);

function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}
async function executar() {
  let valor = await retornarValor();
  await esperarPor(1500);
  console.log(`Async/await ${valor + 1}`);
  await esperarPor(1500);
  console.log(`Async/await ${valor + 2}`);
  await esperarPor(1500);
  console.log(`Async/await ${valor + 3}`);
  return valor + 4;
}
executar().then(console.log);
