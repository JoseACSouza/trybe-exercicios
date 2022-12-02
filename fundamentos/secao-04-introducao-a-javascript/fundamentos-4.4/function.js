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

// //////////////////////////////////-> ITEM 3 <-///////////////////////////////////
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

const lowestValue = (arrayInteiros) => {
    let minValue = Number.POSITIVE_INFINITY;
    let indexMinValue = 0;
        for (let index = 0; index < arrayInteiros.length; index+=1){
            if (arrayInteiros[index] < minValue){
                minValue = arrayInteiros[index];
                indexMinValue = index;
            }
        }
return indexMinValue;
}
//console.log(lowestValue([2, 4, 6, 7, 10, 0, -3]));

////////////////////////////////////-> ITEM 4 <-///////////////////////////////////
// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

const biggestName = (array) => {
    let biggerName = '';
    for (index = 0; index < array.length; index+=1 ){
        if(array[index].length > biggerName.length){
            biggerName = array[index];
        }
    }
return biggerName;
} 
//console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

////////////////////////////////////-> ITEM 5 <-///////////////////////////////////
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3];.
//Valor esperado no retorno da função: 2.
const repeatNumbers = (repeat) =>{
    let numberOfRepeats = [];
    for(let index = 0; index < repeat.length; index+=1){
    numberOfRepeats[index] = 0;
        for(let count = 0; count < repeat.length; count+=1){
            if (repeat[count]===repeat[index]){
                numberOfRepeats[index] += 1;
        }
    }
}
return repeat[highestValue(numberOfRepeats)];
//Highestvalue é a função pedida no item 2 desta lista 
}
//console.log(repeatNumbers([2, 3, 2, 5, 8, 2, 3]));

////////////////////////////////////-> ITEM 6 <-///////////////////////////////////
// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

const summation = (numberN) => {
    let numberAssistant = 0;
    for (let index = numberN; index > 0; index-=1){
        numberAssistant +=index;          
    }
return numberAssistant;
}
//console.log(summation(5));