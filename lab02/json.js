//Criando um objeto JavaScript

let pessoa ={
    nome: "Hudson Castro França",
    idade: 27,
    altura: 1.80,
    cidade: "Salvador",
    hobbies: ["ler" , "Jogar","assistir"]
};
console.log("Nome: ", pessoa.nome);
console.log("Idade: ", pessoa.idade);
console.log("Altura (m) : ", pessoa.altura);
console.log("Cidade: ", pessoa.cidade);
console.log("Hobbies: ", pessoa.hobbies.join(", "));

//Convertendo o objeto JavaScript para uma string
let pessoaStr = JSON.stringify(pessoa);
console.log("String JSON: ", pessoaStr);

//String no formato JSON, com dados de um filme
let filmeStr = '{"titulo": "Inception", "ano": "2010", "diretor": "Christopher Nolan", "generos": ["Ação", "Ficção Cientifica", "Suspense"], "Duração": 148}';
console.log("String JSON:", filmeStr);

//Convertendo a string para um objeto JavaScript
let filme = JSON.parse(filmeStr);

//Acessando e exibindo as propriedades do objeto JavaScript
console.log("Titulo: ", filme.titulo);
console.log("Ano: ", filme.ano);
console.log("Diretor: ", filme.diretor);
console.log("Gêneros: " , filme.generos.join(", "));
console.log("Duração(min): ", filme.duração);