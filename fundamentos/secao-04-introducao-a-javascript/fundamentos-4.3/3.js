// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.


// MAIOR PALAVRA
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maxWidth = 0;
let position = 0;
for(let index = 0; index < array.length; index+=1){
    if (array[index].length > maxWidth){
        maxWidth = array[index].length;
        position = index;
    }
} 
console.log(array[position]);