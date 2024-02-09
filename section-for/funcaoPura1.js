const PI = 3.141592;

//funcao impura
function areaCirc(raio) {
  return raio * raio * PI;
}
//funcao impura
function areaCircMath(raio) {
  return raio * raio * Math.PI;
}
//funcao pura
function area(raio, pi) {
  return raio * raio * pi;
}

console.log(areaCirc(10));
console.log(area(10, 3.14));
