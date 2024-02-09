const boaTarde = function (){
	console.log('Boa tarde')
} 

function bomDia(){
	console.log("Bom dia")
}
//passar uma função como parametro para outro função
function executarQualquerCoisa(fn){
	if(typeof fn === 'function') fn()	
}
executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

//retornar uma função a partir de outra função

function potencia(base){
	return function(expoente){
		return Math.pow(base, expoente)
	}
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8)) 
const resultadoPotencia= potencia(3)(4)
console.log(resultadoPotencia)

/**
 * DESAFIO 
 * criar uma função: somar(3)(4)(5)
 * Criar uma função: calcular(3)(7)(fn)
 */

function somar(num1){
	return function(num2){
		return function(num3){
			return num1 + num2 + num3
		}
	}
}
function calcular(num1){
	return function(num2){
		return function(fn){
			return fn(num1, num2);
		}
	}
}

console.log(somar(3)(4)(5))
console.log(calcular(2)(5)((a, b)=>  a + b ))

