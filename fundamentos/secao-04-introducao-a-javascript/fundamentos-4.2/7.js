//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let verify = numbers.length;
for (let index = 0; index < numbers.length; index+=1){
    if(numbers[index] < verify){
    verify = numbers[index];
    }
}
console.log(verify);
//resultado esperado 2