/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log('Bem-vindo(a) ao jogo Black.Jack!')

    let inicioJogo = confirm('Quer iniciar uma nova rodada?')

    const carta = comprarCarta()

    if (inicioJogo===true) {
   let carta1Usuario = comprarCarta()
    let carta2Usuario = comprarCarta()
    let carta1Maquina = comprarCarta()
    let carta2Maquina = comprarCarta()

    let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
    let pontuacaoMaquina = carta1Maquina.valor + carta2Maquina.valor

    console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
    console.log(`Computador - cartas: ${carta1Maquina.texto} ${carta2Maquina.texto} - ${pontuacaoMaquina}`)

    if (pontuacaoUsuario > pontuacaoMaquina) {
      console.log('O usuário ganhou!')
    } else if (pontuacaoMaquina > pontuacaoUsuario) {
      console.log('O computador ganhou!')
    } else if (pontuacaoUsuario===pontuacaoMaquina) {
      console.log('Empate!')
    } 



    } else {
      console.log('O jogo acabou!')
    }