///////////////////////////////////-> ITEM 1 <-///////////////////////////////////
// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false

const verificaPalindrome = (word) => {
const stringWord = ((word.split('')).reverse()).join('');
    if (word === stringWord){
        return `A palavra: ${word} é um palindromo`;
    } else {return `A palavra: ${word} não é um palindromo`}
}
//console.log(verificaPalindrome('arara'));
//console.log(verificaPalindrome('alemão'));

///////////////////////////////////-> ITEM 2 <-///////////////////////////////////
// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.
const highestValue = (arrayInteiros) => {
    let maxValue = Number.NEGATIVE_INFINITY;
    let indexMaxValue = 0;
        for (let index = 0; index < arrayInteiros.length; index+=1){
            if (arrayInteiros[index] > maxValue){
                maxValue = arrayInteiros[index];
                indexMaxValue = index;
            }
        }
return indexMaxValue;
}
//console.log(highestValue([2, 3, 6, 7, 10, 1]));