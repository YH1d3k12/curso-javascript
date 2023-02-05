const escola = "Programmer Hero"
const titulo = 'Programmer Hero'
const subtitulo = `Escola de programação`
console.log(escola)
console.log(titulo)
console.log(subtitulo)

const texto = 'Texto com aspas duplas: "Texto"'
console.log(texto)
console.log('--------------')

console.log('charAt (4):',escola.charAt(4))
console.log(escola.charCodeAt(3)) 
//tabela unicode

console.log(escola.indexOf('H'))
//exibe o indice da letra entre '' na variavel

console.log(escola.substring(10))
//exibe o conteúdo a partir do indice 10

console.log(escola.substring(0, 10))
//a partir do indice 0, retornar 10 letras
//exibe da 1° letra até a 10° letra, menos a 10° letra

console.log('--------------')
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
//concatenação de strings

console.log(escola.replace('m', 'M'))
console.log(escola.replace('mm', 'MM'))
console.log(escola.replace(/\P/, '*'))
//substitui o caracter 'P' por *
console.log(escola.replace(/\w/g, '*'))
//substitui todos os caracteres por *

//é possivel gerar arrays através de strings:
console.log('Marlo, Djalma, Geraldo')
console.log('Marlo, Djalma, Geraldo'.split(','))
console.log('--------------')

//operações com string:
console.log('3'-2)
console.log('3'*2)
console.log('3'/2)
console.log('3'+2)
//em somas a string sempre ganha