/*
EPS Entrada + Processamento + Saída
*/
var a = 0
let b = 1

var a = 2 //var não dá erro colocando valor diferente em variavel igual.
//let b = 2 let dá erro colocando valor diferente em variavel igual.
//evitar uso de var, let sempre é mais seguro de usar.
//não se pode alterar uma constante.
b = 200
b = "produto"
b = 30.99

console.log (a, b)

let z = 100
let y = 50
let x = (z/y) * 1.5
console.log("x = ", x)

//constante
const c = 30
x = x + c
console.log(c)
console.log("x = ", x)