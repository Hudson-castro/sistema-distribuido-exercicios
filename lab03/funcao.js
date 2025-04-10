function saudacao (){
    console.log("Função simples que exibe uma mensagem no console");
 
}
//Chamada a função
saudacao();

// Função que recebe dois parâmetro e exibe a soma deles 
function somar (a,b){
    console.log("A soma é: " , a + b);

}
somar (5, 3);

//Função que recebe dois parâmetros e retorna a soma deles 
function somarRetorno(a,b){
    return a + b ;

}
let resultado = somarRetorno(5,3);
console.log("O retorno da soma é: " , resultado);

//Função anônma atribuida a uma variável
let somarAnonimo = function(a,b){
    console.log("A soma da função anônima: " , a + b);
};
somarAnonimo(5,3);

//Arrow Function que recebe dois  parâmetroe retorna a soma deles 
let somarArrow = (a,b) => a + b;
resultado = somarArrow (5,3);
console.log("O retorno da arrow function da soma é:", resultado);

let vetor = [10,20,30,40,50];
function exibirElementos (elemento , indice){
    console.log(`Elemento no indice ${indice}: ${elemento}`);

}function ProcessarCallback(v,callback){
    console.log("Processando callback dentro da função forEach");
    v.forEach(callback) ;
};
ProcessarCallback(vetor, exibirElementos);

//Arrow Function como callback
vetor.forEach((elemento, indice)=>{
    console.log(`Arrow function exibindo elemento no indice ${indice}: ${elemento}`);
});