//////////////////////////ITEM 1///////////////////////////////////
// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false

const verificaPalindrome = (word) => {
let splitedWord = word.split('');
let stringWord = splitedWord.join('');
    if (word === stringWord){
        return `A palavra: ${word} é um palindromo`;
    } else {return `A palavra: ${word} não é um palindromo`}
}
console.log(verificaPalindrome('arara'));

//////////////////////////ITEM 2///////////////////////////////////