const heroi = {};
const { Console } = require('console');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question('Digite o nome do herói: ', (nome) => {
    heroi.nome = nome;

    rl.question('Digite sua experiencia: ', (xp) => {
        heroi.xp = xp;

        console.log('Olá,', heroi.nome);
        heroi.avaliar();
        rl.close();
    })
})


heroi.avaliar = function avaliar(rank){

if(heroi.xp <= 1000){
    heroi.rank = 'Ferro';
}if(heroi.xp > 1000 || heroi.xp <= 2000){
    heroi.rank = 'Bronze';
}if(heroi.xp > 2000 || heroi.xp <= 5000){
    heroi.rank = 'Prata'
}if(heroi.xp > 5000 || heroi.xp <= 7000){
    heroi.rank = 'Ouro'
}if(heroi.xp > 7000 || heroi.xp <= 8000){
    heroi.rank = 'Platina'
}if(heroi.xp > 8000 || heroi.xp <= 9000){
    heroi.rank = 'Ascendente'
}if(heroi.xp > 9000 || heroi.xp <= 10000){
    heroi.rank =  'Imortal'
}if(heroi.xp > 10000){
    heroi.rank = 'Radiante'
}

console.log('O herói de nome', heroi.nome, 'está no nível', heroi.rank);
}