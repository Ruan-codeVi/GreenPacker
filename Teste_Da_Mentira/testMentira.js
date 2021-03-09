//Teste de detecção de mentira.
// Descubra quantas vezes o marginal conta se ele é culpado determinando que valores são truthy e quais são falsey.

function detectorMentiras(){
    let mentiras = 0;

    let roubaDiamante = {};

    if(roubaDiamante){
        console.log('Voce roubou o Diamante');
        mentiras++;
    }
    let carro = {
        chavesBolso: null
    };
    if(this.chavesBolso){
        console.log('Uh oh, Acho que você roubou o carro');
        mentiras++;
    };
    if(carro.semCombust){
        console.log('Você dirigiu o carro depois de roubá-lo');
        mentiras++
    }
    
    let teEncontrei = [];
    if(teEncontrei){
        console.log('Um sinal claro de culpa');
        mentiras++;
    }
    if(teEncontrei[0]){
        console.log('Pego com item roubado');
        mentiras++
    };
    let seuNome = ' ';
    if(seuNome){
        console.log('Vocẽ tentou mentir sobre seu nome');
        mentiras++;
    }
    return mentiras;
}
let numeroMetiras = detectorMentiras();
    console.log(`Você disse ${numeroMetiras} mentiras`);
    if(numeroMetiras >= 3){
        console.log('Você é culpado')
    }


    