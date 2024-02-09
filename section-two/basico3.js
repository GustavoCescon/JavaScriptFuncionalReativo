//arrow function
const boaNoite = () => console.log('Boa noite')
boaNoite()

const saudacao = (nome) => "Fala " + nome + "!!"
console.log(saudacao("João"))

const somar =  (...numeros) => {
	let total = 0
	for (const n of numeros) {
		total +=n
	}
	return total
}

console.log(somar(1,2,3,4,5))
console.log(somar(1,2,3,5))

//uso do this
Array.prototype.log = function(){
	console.log(this)
}
Array.prototype.ultimo = function(){
	console.log(this[this.length - 1])
}
Array.prototype.primeiro = function () {
	console.log(this[0])
}

const numeros = [1,2,3]
numeros.log()
numeros.ultimo()
numeros.primeiro()