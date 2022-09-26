



let inputA = document.getElementById('adultos');
let inputC = document.getElementById('criancas');
let inputD = document.getElementById('duracao');

let res = document.getElementById('res');

function calcular(){

    let adultos = inputA.value;
    let criancas = inputC.value;
    let duracao = inputD.value;


    let qtdCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdCerveja = cervejaPP(duracao) * adultos;
    let qtdBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    res.innerHTML = `<p>${qtdCarne / 1000}kg de Carne</p>`
    res.innerHTML += `<p>${Math.ceil(qtdCerveja / 355)} latas de Cerveja</p>`
    res.innerHTML += `<p>${Math.ceil(qtdBebidas / 2000)} Garrafas de Bebidas</p>`

}

function carnePP(duracao){
    if( duracao >= 6 ){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPP(duracao){
    if( duracao >= 6 ){
        return 2000;
    }else{
        return 1200;
    }
}
function bebidasPP(duracao){
    if( duracao >= 6 ){
        return 1500;
    }else{
        return 2000;
    }
}