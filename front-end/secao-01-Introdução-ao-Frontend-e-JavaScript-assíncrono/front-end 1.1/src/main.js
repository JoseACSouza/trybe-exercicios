import validator from 'validator';

import './style.css';

const button = document.getElementsByTagName('button')[0];
const input = document.getElementById('text');
const output = document.getElementsByTagName('p')[0];
const select = document.getElementsByTagName('select')[0];

button.addEventListener('click', (target) => {
    target.preventDefault();
    if (select.value === 'cpf') {
        output.innerHTML = `Validação: ${validator.isTaxID(input.value, 'pt-BR')}`;
    } else if (select.value === 'url') {
        output.innerHTML = `Validação: ${validator.isURL(input.value)}`;
    } else if (select.value === 'email') {
        output.innerHTML = `Validação: ${validator.isEmail(input.value)}`;
    } else if (select.value === 'minusculo') {
        output.innerHTML = `Validação: ${validator.isLowercase(input.value)}`;
    } else if (select.value === 'nInteiro') {
        output.innerHTML = `Validação: ${validator.isInt(input.value)}`;
    }
});
