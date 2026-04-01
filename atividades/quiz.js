// ============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================
//
// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//

let lerTeclado = require('readline-sync');

// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
//   d) Exiba o total: "Você fez X de 5 pontos."
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

// → Seu código aqui:

let jogador = {
    nome: lerTeclado.question("Digite seu nome:"),
}

console.log(`${jogador.nome},SEJA BEM VINDO AO QUIZ!!! | TEMA CARROS"`)

jogador.pontos = 0

console.log("Qual nome da que peça é responsavel pela direção do veiculo?")
console.log("1 - volante, 2 - cambio, 3 - radiador, 4 - bateria")
let resposta1 = lerTeclado.questionInt("Digite a resposta:")

switch(resposta1){
    case 1:
        console.log("Resposta Correta!")
        jogador.pontos += 1
        break;
    case 2:
    case 3:
    case 4:
    console.log("Errado! A resposta certa era a opção 1.")
        break;
    default:
        console.log("Opção inválida, nenhum ponto atribuído.")
}

console.log("Qual peça faz parte do sistema de ignicao dp veiculo?")
console.log("1 -  Manopla do Cambio, 2 - Velas, 3 - Chave de Seta, 4 - Vareta do oleo")
let resposta2 = lerTeclado.questionInt("Digite a resposta:")

switch(resposta2){
    case 2:
        console.log("Resposta Correta!")
        jogador.pontos += 1
        break;
    case 1:
    case 3:
    case 4:
        console.log("Errado! A resposta correta era a opcao 2.")
    default:
        console.log("Opção inválida, nenhum ponto atribuído.")
}

console.log("Qual marca tem um logotipo com quatro anéis entrelaçados? ")
console.log("1 - Volkswagen, 2 - Toyota, 3 - Audi, 4 - Ford")
let resposta3 = lerTeclado.questionInt("Digite a reposta:")

switch(resposta3){
    case 3:
        console.log("Resposta Correta!")
        jogador.pontos += 1
        break;
    case 1:
    case 2:
    case 4:
        console.log("Errado! A resposta correta era a opcao 3.")
    default:
        console.log("Opção inválida, nenhum ponto atribuído.")
}

console.log("Qual carro avisa quando vai chover?")
console.log("1 - Fusca Azul, 2 - Brasilia Amarela, 3 - Mondeo verde, 4 - Celta Preto ")
let resposta4 = lerTeclado.questionInt("Digite a resposta:")

switch(resposta4){
    case 4:
        console.log("Resposta Correta!")
        jogador.pontos += 1
        break;
    case 1:
    case 2:
    case 3:
        console.log("Errado! A resposta correta era a opcao 4.")
    default:
        console.log("Opção inválida, nenhum ponto atribuído.")
}

console.log("Qual marca de carro tem um logotipo com um cavalo empinado?")
console.log("1 - Lamborghini, 2 - Ferrari, 3 - Alfa Romeo, 4 - Porsche ")
let resposta5 = lerTeclado.questionInt("Digite a resposta:")

switch(resposta5){
    case 2:
        console.log("Resposta Correta!")
        jogador.pontos += 1
        break;
    case 1:
    case 3:
    case 4:
        console.log("Errado! A resposta correta era a opcao 2.")
    default:
        console.log("Opção inválida, nenhum ponto atribuído.")
}

console.log(`Voce fez ${jogador.pontos}, de 5 pontos.`)

if(jogador.pontos === 5){
    console.log("Perfeito! Você é um expert!")
}
    else if(jogador.pontos === 4){
        console.log("Muito bem! Quase lá!")
    }
    else if(jogador.pontos === 3){
        console.log("Bom trabalho, mas pode melhorar.")
    }
    else if(jogador.pontos === 1|2){
        console.log( "Nheee!")
    }
    else if(jogador.pontos === 0){
        console.log("VIX, tente novamente!")
    }
    else{}

    let aprovado = (jogador.pontos >= 3)

    console.table(jogador)
    console.table(aprovado)