// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.


// MAIOR PALAVRA
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maxWidth = Number.NEGATIVE_INFINITY;
let maxPosition = 0;
for(let index = 0; index < array.length; index+=1){
    if (array[index].length > maxWidth){
        maxWidth = array[index].length;
        maxPosition = index;
    }
} 
console.log('Maior palavra: ' + array[maxPosition]);

// MENOR PALAVRA
let minWidth = Number.POSITIVE_INFINITY;
let minPosition = 0;
for(let index = 0; index < array.length; index+=1){
    if (array[index].length < minWidth){
        minWidth = array[index].length;
        minPosition = index;
    }
} 
console.log('Menor palavra: ' + array[minPosition]);