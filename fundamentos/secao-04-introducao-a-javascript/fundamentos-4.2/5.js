//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let verify = 0;
for (let index = 0; index < numbers.length; index+=1){
    if(numbers[index] > verify){
    verify = numbers[index];
    }
}
console.log(verify);
//resultado esperado 100