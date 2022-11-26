//Calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmetica = 0;
for (let index = 0; index < numbers.length; index+=1){
    soma = soma + numbers[index];
}
mediaAritmetica = soma/numbers.length;
console.log(mediaAritmetica);
//resultado esperado 27.8
if (mediaAritmetica > 20){
    console.log('Valor maior que 20');
}
else if (mediaAritmetica < 20){
    console.log('Valor menor que 20');
}else{console.log('Valor menor que 20')}
//resultado esperado 'Valor maior que 20'