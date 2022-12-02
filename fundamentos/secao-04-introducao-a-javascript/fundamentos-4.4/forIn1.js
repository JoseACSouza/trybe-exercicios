let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
//item 1
console.log(`Bem vinda, ${info.personagem}!`);
//item 2
info['recorrente'] = 'Sim';
//item 3
for (let key in info) {
    console.log(key);
}
// item 4
for (let key in info) {
    console.log(info[key]);
}
//item 4
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell´s Four Color Comics #178',
    nota:'O último MacPatinhas',
    recorrente: 'Sim'
}

for ( let key in info ) {
    if ( key === 'recorrente' && info[key] === info2[key]) {
    console.log('Ambos recorrente');
    } else {console.log(`${info[key]} e ${info2[key]}`);}
}
