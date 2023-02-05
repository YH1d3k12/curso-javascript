const Hero = 'Wolverine'
let saudacao ='Olá '+ Hero + '!' 
//Contatetação

saudacao = `
                   !
        ${Hero}
Olá`
//Interpolação

console.log(saudacao) 
console.log('----------')

console.log(`1 + 1 = ${1 + 1}`)
//Expressões

const up = texto => texto.toUpperCase()
//Função arrow '=>' para transforma texto em letras maiusculas
console.log(`Ei...${up('cuidado')}!`)

function Up(texto) {
return texto.toUpperCase()
}
//declaração da função classica (mesma função que o arrow)
console.log(`Ei...${Up('cuidado')}!`)
console.log(`Ei...${up('cuidado')}!`)