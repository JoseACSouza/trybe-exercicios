// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
 let a = 2;
 let b = 3;
 let operacao = '%';
 switch (operacao){
    case('+'): console.log(a+b);
    break;
    case('-'): console.log(a-b);
    break;
    case('*'): console.log(a*b);
    break;
    case('/'): console.log(a/b);
    break;
    case('%'): console.log(a%b);
    break;
    default: console.log('operação inválida');
 }