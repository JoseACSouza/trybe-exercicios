// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
const numberA = 1;
const numberB = 2;
const numberC = 3;
if (numberA >= numberB && numberA >= numberC) {
    console.log('O maior número é', numberA);
} else if (numberB >= numberA && numberB >= numberC) {
    console.log('O maior número é:', numberB);
} else if (numberC >= numberA && numberC >= numberB) {
    console.log('O maior número é:', numberC);
}