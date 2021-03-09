/* Não podemos olhar um objeto em Javascript 
e determinar que ele é um objeto de um tipo específico,
como cachorro ou carro. Mas podemos ter algumas informações sobre um objeto
se conhecemos o construtor que o criou.

Lembre-se que a cada vez que chamamos um construtor usano
o operador NEW estmos criando uma nova instância de objeto.

Digamos que ao utilizar o construtor Carro para fazer isso,
dizemos informalmente que objeto é di tipo Carro.
Mas formalmente, temos que dizer que o objeto é uma instância de um Carro

Cada instância pode ter seu próprio conjunto único de propriedades.

Dizer que um objeto é uma instãncia de algum construtor é mais do que  apenas conversa
Podemos na verdade, escrever código para inspecionar o construtor que fez um objeto
com o operador INSTANCEOF.

Exeplo
 */
// Construtor
function Carro  (parametros){
    this.montadora = parametros.montadora;
    this.modelo = parametros.modelo;
    this.cor = parametros.cor;
    this.numPassageir = parametros.numPassageir;
    this.kilometrag = parametros.kilometrag;
}
/*  transformando os argumento em objeto literal, 
    para facilitar na hora de passar para o objeto
*/
let limoParams = {
    montadora: 'Webville Motors',
    modelo: 'limo',
    cor: 'blacl',
    numPassageir: 12,
    conversivel: true,
    kilometrag: 21120
};

let limo = new Carro(limoParams);

//Criando uma forma de inspecionar o construtor
if( limo instanceof Carro){
    console.log(`Limo, isto é um Carro`)
}