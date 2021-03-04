// Escrever um código que raalize buscas na lista de passageiro e garanta que certas condições seja atendidas
//Verificar para que não haja passeiros de um lista de proibição.
// Garantir que todos tenham pago

//Lista de Passageiros

let  passageiros = [{nome: 'Jane Doloop', pagou: true, passagem:'Econômica'},
{nome: 'Dr. Evil', pagou: true, passagem:'Primeira-Classe'},{nome: 'Sue Property', pagou: false, passagem:'Primeira-Classe'},
{nome: 'John Funcall', pagou: true, passagem:'Econômica'},{nome: 'Maria joaquina', pagou: true, passagem:'Premium'}];

//Proibições

function proibidosDeVoar(passageiro){
    if(passageiro.nome === 'Dr. Evil'){
        return false;
    }
    return true;
};

function passagemPaga(passageiro){
    return(!passageiro.pagou)
    /*checa a propriedade pagou do array passageiros e retorna VERDADEIRO,
     se o passegeiro NÃO PAGOU, no casos que estiver False
    */ 
};

function imprimirPassagem(passageiro){
    let passagem = passageiro.nome
    if(passageiro.pagou){ // se for igual a true
        passagem = `${passagem} Pagou sua passagem!`
    }else{ // se for igual a false
        passagem = `${passagem} Não pagou sua passagem!`
    }
    console.log(passagem)

    return false;
};
function criarPedidoDeDrink(passageiro){
    let ordemFuncao;
    if(passageiro.passagem === 'Primeira-Classe'){
        //expressao de função
        ordemFuncao = function(){
            console.log('Você gostaria de coquetel ou vinho? para beber')
        };
    } else if(passageiro.passagem === 'Premium'){
        ordemFuncao = function(){
            console.log('Você gostaria de vinho, coca-cola ou água? para beber')
            }
       }else{
           ordemFuncao = function(){
               console.log('Você gostaria de coca-cola ou água? para beber')
           }
       }
       return ordemFuncao;
    };

    function criarPedidoDeJantar(passageiro){
        let ordemFuncao
        if(passageiro.passagem === 'Primeira-Classe'){
            ordemFuncao = function(){
                console.log('Você gostaria de frango ou pasta? Para o jantar')
            }
        } else if(passageiro.passagem === 'Premium'){
            ordemFuncao = function(){
                console.log('Você gostaria de sanduiche ou aperitivos de queijos? Para o jantar')
            }
        } else{
            ordemFuncao = function(){
                console.log('Você gostaria de amendoim ou pretzels?')
            }
        }
        return ordemFuncao;
    }

function servicoDeBordo(passageiro){
let pegarPedidoDrink = criarPedidoDeDrink(passageiro);
let pegarPedidoJantar = criarPedidoDeJantar(passageiro);

//Simulando Pedido do passageiro
//pedido
pegarPedidoJantar();
pegarPedidoDrink();
//pedido
pegarPedidoJantar();
pegarPedidoDrink();
console.log('Exibir filme');
//pedido
pegarPedidoJantar();
pegarPedidoDrink();
console.log('Recolher o lixo')
};

//criar função para servir o passageiros um de cada vez
function servirPassageiros(passageiros){
    for(let cont = 0; cont < passageiros.length; cont ++){
        servicoDeBordo(passageiros[cont]);
    }
};


// Função que testa as demais condições, Função principal
function processarPassageiros(passageiros, testFuncao){
    for(let cont = 0; cont < passageiros.length; cont++){
        if(testFuncao(passageiros[cont])){
            return false;
        }
    }
  return true;
}

/*
Agora a função processarPassageiros
está pronta para receber as demais funções  como argumentos
*/
                      //função            argum array  argum função                      
let todosPodemVoar = processarPassageiros(passageiros,proibidosDeVoar);
    if (!todosPodemVoar) // diferente de True, igual a falso
    {
        console.log('O avião não pode decolar, existem passegeiros na lista de proibidos de voar ')
    }

let todosPagaram = processarPassageiros(passageiros,passagemPaga);
    if(!todosPagaram) // mesma coisa que igual a falso
    {
        console.log('O avião não pode decolar, existem passegeiros que não pagaram')
    };

//invocando as funções
servirPassageiros(passageiros);
processarPassageiros(passageiros,imprimirPassagem);