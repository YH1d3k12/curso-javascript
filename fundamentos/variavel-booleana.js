let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
//exibe o valor inteiro 1... pois agora o conteudo  não é mais 
//"boolean" mas "number"

isAtivo = 1
console.log(isAtivo)
console.log(!!isAtivo)
//para ver se o conteudo de "isAtivo" é "true" ou "false"
//se usa o operador de dupla negação

console.log('...Valores inteiros...')

console.log(!!3)
console.log(!!-1)
//numeros inteiros (positivos e negativos), menos o zero!
console.log(!!' ')
console.log(!!'Texto')
//strings com no mínimo um espaço em branco

console.log(!![])
console.log(!!["arroz", "feijão", "café"])
//listas vazias ou com valor

console.log(!!{})
console.log(!!{nome: 'Fulano', sobrenome: 'da Silva'})
//objetos (vazios ou com valor)

console.log(!!Infinity)
//tipo infinity

console.log(!!(isAtivo = true))
//valores verdadeiros atribuidos a variaveis
//não confundir com o 'resultado' da operação,  mas sim
//se o valor atribuído é verdadeiro

console.log('...Valores Falsos...')

console.log(!!0)
//zero

console.log(!!'')
//strings vazias

console.log(!!null)
//valores nulos

console.log(!!NaN)
//valores não numéricos

console.log(!!undefined)
//valores indefinidos

console.log(!!(isAtivo = false))
//valores falsos atribuidos a variaveis
//não confundir com o resultado da operação
//mas sim se o valor atribuído é falso

console.log('...Expressões Booleanas...')
console.log('...Operador Or...')
console.log(!!('' || null || 0 || 'Teste'))
//Operador Or (Ou)
//A expressão ou, sempre retorna o primeiro valor verdadeiro
//Avaliando sempre da esquerda para direita

console.log('' || null || 0 || 'Teste')
//retorna teste

console.log('' || null || 0 || !'Teste' || 123)
//retorna 123 pois o ! nega o 'Teste'

let campo_nome = 'Djalma'
let nome = campo_nome || 'Desconhecido'
console.log(nome)
//O operador 'OR' é muito utilizado para retornar 
//valores padrões para variáveis
//Exemplo:
//Retornar 'Desconhecido' caso a variável 'nome' esteja em branco
if (campo_nome.length > 0) {nome = campo_nome} else {nome = 'Desconhecido'}
//Exemplo com instrução 'if' e 'else'

console.log('conteudo=', nome)

console.log('...Operador AND...')
//Operador AND (E)
//Se todos os valores forem verdadeiros o resultado é verdadeiro
console.log(!!('Teste' && [] && {} && -1 & Infinity))

//Expressão And retorna sempre o 'último valor' como verdadeiro
console.log('Teste' && [] && {} && -1 && Infinity)
console.log('Teste' && [] && {} && -1)
//Operador 'AND' é utilizado para executar comandos se uma variável tiver valor
//Exemplo:
//Imprmir no console 'Executar' caso a variavel 'nome' possua valor

nome = ''
nome && console.log('Executar')
//mesma coisa que:
if (nome) {console.log('Executar')}