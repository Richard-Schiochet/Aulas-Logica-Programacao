
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:

const nome = "Richard"
let idade = 23
let hobby ="carros"
let frase = `Meu nome é ${nome}, tenho ${idade}, e meu hobby é coisas relacionadas a ${hobby}.`

console.log (frase)


// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:

const cidade = "Jaraguá do Sul"
let temperatura = 31
let frase1 = `Hoje em ${cidade}, a temperatura é de ${temperatura}°C, perfeito para tomar banho de cachoeira.`

console.log (frase1)


// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:

let carro = "Ford Focus"
const ano = 2009
let verdadeiro = true
let nada = null
let undefined 
console.log (`a variavel carro consta o valor  ${carro}. e o tipo dela ${typeof carro}`)
console.log (`a variavel ano consta o valor ${ano}. e o tipo dela é ${typeof ano}`)
console.log (`É ${verdadeiro} minha idade de 23 anos. O tipo dela é ${typeof verdadeiro}`)
console.log (`nesta variavel nao tem nada. tipo dela é ${typeof nada}`)
console.log (`isto está ${undefined}.tipo dela é ${undefined}`)



// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:

let personagem = "Jack"
let idade04 = 15
let cidade04 = "interior"
let missão = "jogador de futebol"
let frase04 = `A história é de um garoto chamado ${personagem}, que tem apenas ${idade04} anos de idade, ele nasceu e cresceu em uma cidade do ${cidade04} do Paraná,e desde pequeno tem um grande sonho de ser conhecido mundialmente como um ${missão}.`

console.log(frase04)


// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:

const meuNome = "Richard"
let meuObjetivo = "concluir mais um curso técnico"
let frase05 = `Meu nome é ${meuNome}, e tenho como objetivo para este ano ${meuObjetivo}.`

console.log(frase05)

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:


console.log("==============================================")
console.log("        SISTEMA DO USUARIO                    ")
console.log("==============================================")
console.log("1  - Ver Perfil")
console.log("2  - Editar Perfil")
console.log("3  - Configurações")
console.log("4  - Notificações")
console.log("5  - Relatórios")
console.log("6  - Ajuda")
console.log("7  - Sobre o Sistema")
console.log("0  - Sair")
console.log("==============================================")
console.log("      Digite o número da opção desejada       ")
console.log("==============================================")