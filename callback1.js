const somarTerminal = (a, b) => console.log(a + b);

const subtraisTerminal = (a, b) => console.log(a - b);

const subtrair = (a, b) => a - b;

function exec(fn, a, b) {
  return fn(a, b);
}

exec(somarTerminal, 56, 38);
exec(subtraisTerminal, 182, 27);
const r = exec(subtrair, 50, 25);
console.log(r);

const cd = () => console.log("Executando...");

setInterval(cd, 1000);
