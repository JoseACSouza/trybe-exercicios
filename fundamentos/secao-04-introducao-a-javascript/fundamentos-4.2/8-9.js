//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = [];
let result = [];
for (let index = 1; index < 26; index+=1){
    numbers.push(index);
}
for (let index =0; index < numbers.length; index+=1){
    result.push(numbers[index]/2);
}
console.log(numbers);
console.log(result);
