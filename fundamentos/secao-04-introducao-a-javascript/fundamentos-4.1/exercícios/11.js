// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

const salarioBruto = 3000;
let impostoInss = 0;
let impostoIR = 0;
let salarioLiquido = 0;
if (salarioBruto < 1556.94 && salarioBruto >= 0){
    impostoInss = salarioBruto*0.08;
} else if (salarioBruto >= 5189.82){
    impostoInss = salarioBruto+570.88;
} else if (salarioBruto >= 2594.93){
    impostoInss = salarioBruto*0.11;
} else if (salarioBruto >= 1556.95){
    impostoInss = salarioBruto*0.09;
}
console.log(impostoInss);
salarioLiquido = salarioBruto - impostoInss
console.log(salarioLiquido);
if (salarioLiquido < 1903.98){
    impostoIR = 0;
} else if (salarioLiquido >= 4664.68){
    impostoIR = (salarioLiquido*0.275) - 869.36;
} else if (salarioLiquido >= 3751.06){
    impostoIR = (salarioLiquido*0.225) - 636.13;
} else if (salarioLiquido >= 2826.66){
    impostoIR = (salarioLiquido*0.15) - 354.80;
} else if (salarioLiquido >= 1903.99){
    impostoIR = (salarioLiquido*0.075) - 142.80;
}
salarioLiquido = salarioLiquido - impostoIR;
const salarioAReceber = salarioLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
if (salarioLiquido <= 0 ){
    console.log('verifique os valores inseridos')
} else {console.log('Seu salário liquido é: '+salarioAReceber)}
