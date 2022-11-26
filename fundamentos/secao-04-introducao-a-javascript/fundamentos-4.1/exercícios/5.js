// 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.
const numberA = 60;
const numberB = 60;
const numberC = 60;
if (numberA < 0 || numberB < 0 || numberC < 0){
    console.log('ângulo inválido');
} else if ((numberA + numberB + numberC)===180){
    console.log('true')

} else {console.log('false')}
