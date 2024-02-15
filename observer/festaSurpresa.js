const readline = require("readline");
function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(pergunta, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}
//obterResposta("Esse é um teste?").then((resp) => console.log(resp));

function namorada() {
  console.log("N: Apagar as luzes");
  console.log("N: Pedir silencio");
  console.log("N: Surpresa!!");
}
function sindico(evento) {
  console.log("S: Monitorando o barulho");
  console.log(`S: ${evento.resp}`);
  console.log(`S: ${evento.data}`);
}

async function porteiro(interessados) {
  while (true) {
    const resp = await obterResposta("O namorado chegou? (s/N/q)");
    if (resp.toLowerCase() === "s") {
      //os observadores são notificados
      (interessados || []).forEach((obs) => obs({ resp, data: Date.now() }));
    }
    if (resp.toLowerCase() === "q") {
      break;
    }
  }
}
/**
 * Na chamada da função -> Registra dois observadores
 * Os observadores são: [namorada, sindico]
 * O subject é o porteiro
 */
porteiro([namorada, sindico]);
