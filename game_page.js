
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";


document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML =  "turno de pergunta -" + player1_name;
document.getElementById("player_answer").innerHTML =  "turno de respostas -" + player2_name ;

function send() {
    // Obtém o valor do campo de entrada de texto com o ID "word" e atribui-o à variável "get_word".
    get_word = document.getElementById("word").value;
  
    // Converte o valor de "get_word" para minúsculas e atribui-o à variável "word".
    word = get_word.toLowerCase();
  
    // Loga o valor de "word" para a console.
    console.log("palavra em letras minúsculas = " + word);
  
    // Obtém o caractere no índice 1 da string "word" e atribui-o à variável "charAt1".
    charAt1 = word.charAt(1);
  
    // Loga o valor de "charAt1" para a console.
    console.log(charAt1);
  
    // Calcula o piso do comprimento da string "word" dividido por 2 e atribui-o à variável "lenght_divide_2".
    lenght_divide_2 = Math.floor(word.length / 2);
  
    // Obtém o caractere no índice "lenght_divide_2" da string "word" e atribui-o à variável "charAt2".
    charAt2 = word.charAt(lenght_divide_2);
  
    // Loga o valor de "charAt2" para a console.
    console.log(charAt2);
  
    // Calcula o comprimento da string "word" menos 1 e atribui-o à variável "lenght_minus_1".
    lenght_minus_1 = word.length - 1;
  
    // Obtém o caractere no índice "lenght_minus_1" da string "word" e atribui-o à variável "charAt3".
    charAt3 = word.charAt(lenght_minus_1);
  
    // Loga o valor de "charAt3" para a console.
    console.log(charAt3);
  
    // Substitui o caractere "charAt1" na string "word" pelo caractere sublinhado ("_") e atribui o resultado à variável "remove_charAt1".
    remove_charAt1 = word.replace(charAt1, "_");
  
    // Substitui o caractere "charAt2" na string "remove_charAt1" pelo caractere sublinhado ("_") e atribui o resultado à variável "remove_charAt2".
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
  
    // Substitui o caractere "charAt3" na string "remove_charAt2" pelo caractere sublinhado ("_") e atribui o resultado à variável "remove_charAt3".
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
  
    // Loga o valor de "remove_charAt3" para a console.
    console.log(remove_charAt3);
  
    // Cria uma string contendo o seguinte código HTML:
  
    // ```html
    // <h4 id="word_display"> P. {{remove_charAt3}}</h4>
    // <br>Resposta : <input type="text" id="input_check_box">
    // <br><br><button class="btn btn-info" onclick="check()">Verificar</button>
    // 
  
    // O espaço reservado "{{remove_charAt3}}" será substituído pelo valor da variável "remove_charAt3".
  
    question_word = "<h4 id='word_display'> P. " + remove_charAt3 + "</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
    row = question_word + input_box + check_button;
  
    // Atribui a string criada na etapa 16 à variável "row".
  
    document.getElementById("output").innerHTML = row;
  
    // Limpa o valor do campo de entrada de texto com o ID "word".
  
    document.getElementById("word").value = "";
  }
  
  
  