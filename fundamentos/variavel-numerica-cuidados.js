//Number: alguns cuidados
//Infinity - um valor que tende ao infinito... muito pequeno
console.log(8 / 0)
console.log(8 / 0.001)
//outra coisa interessante
console.log("10" / 2)
console.log("show!" / 2) //Nan = Not A Number
console.log(0.1 + 0.7)
//Cuidado
//console.log(10.ToString()) //não funciona
console.log(Number(10).toString()) //funciona
console.log(10.345.toFixed(2))
/*
Resumindo:
cuidado com tipos String
cuidado com Nan
cuidado com imprecisões
*/