                //paramet  
function engracado(echo){
    console.log(echo);
}
//invocando função engracado e passando uma string com argumento para a função
engracado('Olá');

function boo(aFuncao){
    aFuncao('valor vindo do parametro aFunção');
}
//passando uma função como argumento para função boo
boo(engracado);

// passando uma função para dentro da variavel
// variavel          função
let muitoEngracado = engracado;

// foi copiado para dentro da variavel a (função engracado), tornando a variavel uma especie de "função temporaria"
muitoEngracado('Olá de novo');

// retornando a (função engracado) dentro da (função echoMaker)
function echoMaker(){
    return engracado;
};
// a variavel ta recebendo a função echoMaker()
let grandeGraca = echoMaker();
grandeGraca('Há um echo? isso talvez seja um argumento');

//
function addN(n){
    let adder = function(x){
        return n + x;
    }
    return adder
}
/* passando a função addN com argumento 2 para dentro da variavel add2
*/
let add2 = addN(2)
console.log(add2(10))
