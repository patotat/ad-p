//função para adicionara os jogadores
function addUser() {
  //variaveis que salvam os dois nomes dos jogadores foram enseridos na caixa de texto
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;
//local storage é armazenamento local. Está setando os nomes dos jogadores em pares de chaves/valor
//no armazenamento local
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
//window-janela, location-localizção. vai levar o jogador para a proxima tela assim que o botão for precionado
    window.location = "game_page.html";
}

