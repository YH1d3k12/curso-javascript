//Tipos de JavaScript Number
const peso1 = 1.0
const peso2 = Number("2.0")
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.532132
const avaliacao2 = 6.539421
const resultado = avaliacao1 * peso1 + avaliacao2 * peso2
const media = resultado / (peso1 + peso2)
console.log("media = ", media)
/*exibir apenas duas casas decimais*/ console.log("media = ", media.toFixed(2))
//retornar valor como string 
console.log(media.toString())
console.log(typeof media.toString())
//retorna valor para codigo binario
console.log(media.toString(2))