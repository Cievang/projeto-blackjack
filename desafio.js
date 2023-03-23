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

    // Verificar se as duas primeras cartas são A
    const carta = comprarCarta()

    let cartasJogador = []
    let cartasMaquina = []

    if(confirm('Bem-vinde ao jogo Blackjack!!' + '\n' + 'Quer iniciar uma nova rodada?')) {

      let cartasDiferentesDeA = false 
      while (!cartasDiferentesDeA) {
         cartasJogador.push(comprarCarta())
         cartasJogador.push(comprarCarta())
         cartasMaquina.push(comprarCarta())
         cartasMaquina.push(comprarCarta())
         if ((cartasJogador[0].valor === 11 && cartasJogador.valor[1] === 11) || (cartasMaquina[0].valor === 11 && cartasMaquina[1].valor === 11)) {
            cartasJogador = []
            cartasMaquina = []
         } else {
            cartasDiferentesDeA = true 
         }
      }

     // Mostrar cartas e perguntar se deseja comprar mais 

     let comprandoCartas = true

     while (comprandoCartas) {
      let pontuacao = 0
      let mostrarCarta = ""
      for (let carta of cartasJogador) {
         mostrarCarta += carta.texto + " "
         pontuacao += carta.valor 
      }
      if (pontuacao > 21) {
         comprandoCartas = false 
      } else {
         let querComprarMais = confirm(`Suas cartas são ${mostrarCarta}. A carta revelada do computador é ${cartasMaquina[0].texto}.` + '\n' + 'Deseja comprar mais uma carta?')
         if (querComprarMais) {
            cartasJogador.push(comprarCarta())
         } else {
            comprandoCartas = false 
         }
      }
     }
     // Calcular pontuação do jogador e da máquina 

     let pontosJogador = 0
     let pontosMaquina = 0
     let mostrarCartaJogador = ""
     let mostrarCartaMaquina = "" 

     for (let carta of cartasJogador) {
      pontosJogador += carta.valor 
      mostrarCartaJogador += carta.texto + " "
     }
     for (let carta of cartasMaquina) {
      pontosMaquina += carta.valor
      mostrarCartaMaquina += carta.texto + " "
     }
     // Compra de cartas do computador 

     if (pontosJogador <= 21 ) {
      while (pontosMaquina < pontosJogador && pontosMaquina <= 21) {
         cartasMaquina.push(comprarCarta())
         pontosMaquina = 0
         mostrarCartaMaquina = ""
         for (let carta of cartasMaquina) {
            pontosMaquina += carta.valor
            mostrarCartaMaquina += carta.texto + " "

         }
      }

     }
     let resultadoFinal = ""
     if (pontosJogador > pontosMaquina && pontosJogador <=21) {
      resultadoFinal = 'O usuário ganhou!'
     } else if (pontosMaquina > pontosJogador && pontosMaquina <= 21) {
     resultadoFinal = 'O computador ganhou!' 
     } else if (pontosJogador > 21 && pontosMaquina <= 21) {
      resultadoFinal = 'O computador ganhou!'
     } else if (pontosMaquina > 21 && pontosJogador <= 21 ) {
      resultadoFinal = 'O usuário ganhou!'
     } else {
      resultadoFinal = 'Empate!'
     }

     alert (
     `Usuário - Cartas: ${mostrarCartaJogador} - Pontuação: ${pontosJogador}` + '\n' + `Computador - Cartas: ${mostrarCartaMaquina} - Pontuação: ${pontosMaquina}` + '\n' + resultadoFinal
     )
    } else {
      alert ('O jogo acabou.')
    }

