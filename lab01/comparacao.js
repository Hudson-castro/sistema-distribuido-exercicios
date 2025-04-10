//Alguns conceitos de falsy e truthy
console.log(" Testanto valores falsy e truthy");
console.log(false, `é "${Boolean(false)}" .` );
console.log(0, `é "${Boolean(0)}". `);
console.log("", `é"${Boolean("")}".`);
console.log(null, `é"${Boolean(null)}". `);
console.log(undefined,`é "${Boolean (undefined)}". `);
console.log(NaN, Boolean(NaN));
console.log(true, `é"${Boolean (true)}". `);
console.log(1, Boolean(1) );
console.log("Olá", Boolean ("Olá"));
console.log([], Boolean ([]));
console.log({}, Boolean ({}));

//Comparações

console.log("Testando comparações");
console.log( 1 == 1 );
console.log(1 == "1");
console.log(1 === 1);
console.log(1 === "1");
console.log(true == 1);
console.log(1 == [1]);
console.log(null == null );
console.log(null == undefined);
console.log([] ==false);
console.log([] == []);

console.log("Testando operadores de comparação");
let num1 = 10 ;
let num2 = 5 ;
 
if (num1 > num2){
    console.log(`${num1} é maior que ${num2}.`);

}else if( num1 < num2){
    console.log(`${num1} é menor que ${num2} .`);
}else{
    console.log("Você não pode dirigi.");


}
console.log("Testando operador lógicos AND (&&)");

let idade = 25 ;
let possuinCNH = true ;

if (idade >= 18 && possuinCNH){
    console.log("Você pode dirigir.");

}else{
    console.log("Você não pode dirigir.");

}
console.log("Testando operador  OR ||");
let temDinheiro = false ;
let temCartaoDeCredito = true ;

if (temDinheiro || temCartaoDeCredito){
    console.log("Você pode fazer a compra. ");
}else{
    console.log("Você não pode fazer a compra.");
}

console.log("Testando a combinação  dos operadores lógicos AND e OR ");

let estaChovendo = true ;
let temGuardaChuva = false ;
let temCapaDeChuva = false ;

//Verifica se a pessoa pode sair de casa 

if((estaChovendo && (temGuardaChuva || temCapaDeChuva)) || !estaChovendo) {
    console.log("Você pode sair de casa.");

}else{
    console.log("Você não pode sair de casa.");
}






















