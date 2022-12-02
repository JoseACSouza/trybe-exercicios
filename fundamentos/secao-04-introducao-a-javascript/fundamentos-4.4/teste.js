let repeat = [2, 3, 2, 5, 8, 2, 3];
let numberOfRepeat = [];
for(let index = 0; index < repeat.length; index+=1){
    numberOfRepeat[index] = 0;
    for(let count = 0; count < repeat.length; count+=1){
        if (repeat[count]===repeat[index]){
            numberOfRepeat[index] += 1;
        }
    }
}
console.log(numberOfRepeat);