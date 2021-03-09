//Contruto Cachoro    parametr
function Cachorro (nome, raca, peso){
    this.nome = nome,
    this.raca = raca,
    this.peso = peso

};
//construto carro paramet
function Carro  (parametros){
    this.montadora = parametros.montadora;
    this.modelo = parametros.modelo;
    this.cor = parametros.cor;
    this.numPassageir = parametros.numPassageir;
    this.kilometrag = parametros.kilometrag;
}
//Refatorando, transformando os argumento em objeto literal, para facilitar na hora de passar para o objeto
let limoParams = {
    montadora: 'Webville Motors',
    modelo: 'limo',
    cor: 'blacl',
    numPassageir: 12,
    conversivel: true,
    kilometrag: 21120
};
//invocando os objeto pasando os argumento
let limo = new Carro(limoParams)
let limoCachorro = new Cachorro ('Rhapsody in Blue', 'Poodle',40)

console.log(`${limo.montadora} ${limo.modelo} é um ${typeof limo}`);
console.log(`${limoCachorro.nome} é um ${typeof limoCachorro}`)
