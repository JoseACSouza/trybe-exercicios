///////////////////////////////// ITEM 1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.
// Crie uma função que ligue e desligue um motor de um carro.

let status = 'ligado';
const onOff = () => status ==='ligado' ? 'desligado' : 'ligado';
//console.log(onOff());

///////////////////////////////// ITEM 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Crie uma função que calcule a área de um círculo.

const pi = 3.14159265359;
const circleArea = (radius) => {
    return ` A área desse circulo é: ${(radius**2)*pi}`
}
// console.log(circleArea(3)); //retorno esperado: 28.27433388231...
// console.log(circleArea(5)); //retorno esperado: 78.53981633975...

///////////////////////////////// ITEM 3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const word = 'Antonio foi no banheiro e não sabemos o que aconteceu'; // retorna 'aconteceu'
const longgestWord = (word) => {
const splitedWord = word.split(' ');
let hoistWord = '';     
    for(let index = 0; index < splitedWord.length; index+=1){
        if(splitedWord[index].length >= hoistWord.length){
            hoistWord = splitedWord[index];
        }
    }
return `A maior palavra desta frase é ${hoistWord}!`
}
//console.log(longgestWord(word));
