// // Exercicios: Um código para saber qual sabor de sorvete tem pedação do ciclete

var sabores = ['choo choo Chocolate', 'ice mint', 'Cake better','Bubblegum'];
var temChiclete = [false,false, false, true];
var contador = 0;


while(contador < sabores.length){

    if(temChiclete[contador]){
        console.log(`${sabores[contador]} tem pedaçõs de chiclete`);
        
    }
    contador = contador + 1;
}

// Debugando o cógido
/* 1º Cria-se os dois vetores (array) sabores[] temChiclete[]
   
   2º Cria um contador iniciado em 0
   
   3º while (enquanto), que faz o teste enquanto o contador icinicado em 0 for menor que o
   tamanho do array sabores que é 4, ele continua realizando o loop equanto contador continua sendo menor que o tamanho do array sabores[]
   
   4º Condição que só vai realizar seu bloco quando percorrer o array temChiclete[] e encontrar true como resposta
   e ultiliza o valor atual de contador para percorrer o array.
   
   5º Array temChiclete recebe valor atual do contador, esse numero recebido é o indice(posição) 
   em que ele vai usar para buscar a informação dentro do Array temChiclete.
   
   6º Como a condição if realiza um teste booleano que tem que dar true, passa direto pelo if
   e executa o incremento de +1 no contador, e ele mesmo contador recebe e atualiza com o novo valor
   e volta para o loop while testa se teste for igual a verdadeiro(true) ele repete os processos anteriores e de novo e de novo até
   que o teste de falso(false).
*/

// Como interar um Array

var pontos = [60,50,60,58,54,54,58,50,
52,54,48,69,34,55,51,52,44,51,69,64,66,55,52,61,46,31,57,52,44];
var saida;
var contador = 0;
while(contador < pontos.length){
    saida = `Bubble solution # ${contador} Pontos: ${pontos[contador]}`  
    contador = contador +1;
    console.log(saida);
}

// Melhorando esse código utilizando laço loop for
for(contador = 0; contador < pontos.length; contador = contador + 1){
    saida = `Bubble solution # ${contador} Pontos: ${pontos[contador]}`
    console.log(saida);
}


