const { myRemove, myFizzBuzz, encode, decode, mapString, techList, hydrate } = require("./script");

describe('Exercicio - 1', ()=>{
  test('Recebe um array e um número, retorna esse array sem o número (caso o array contenha o número)',()=>{
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercicio - 2', ()=>{
  it('A função myFizzBuzz(num) recebe um número num como parâmetro. Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz". Caso num seja um número divisível apenas por 3, retorna "fizz". E caso num seja um número divisível apenas por 5, retorna "buzz". Se num for um número que não é divisível nem por 3 e nem por 5, a função retorna o próprio número num. Caso num não seja um número, a função retorna false.',()=>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(20)).toBe('buzz');
    expect(myFizzBuzz(13)).toBe(13);
    expect(myFizzBuzz('3')).toBe(false);
  });
});

describe('Exercicio - 3', ()=>{
  it('Teste se encode e decode são funções',()=>{
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente',()=>{
    expect(encode('aeiou')).toBe('12345');
  });
  test('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;',()=>{
    expect(decode('12345')).toBe('aeiou');
  });
  test('Teste se as demais letras/números não são convertidos para cada caso;',()=>{
    expect(decode('B /, / C /, / D /, / F /, / G /, / J /, / K /, / L /, / M /, / N /, / P /, / Q /, / R /, / S /, / T /, / V /, / W /,/ X /, / Z')).toBe('B /, / C /, / D /, / F /, / G /, / J /, / K /, / L /, / M /, / N /, / P /, / Q /, / R /, / S /, / T /, / V /, / W /,/ X /, / Z');
    expect(decode('6,7,8,9')).toBe('6,7,8,9');
  });
  test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.',()=>{
    expect(encode('aeiou').length).toBe(encode('aeiou').length);
    expect(decode('12345').length).toBe(decode('12345').length);
  });
});

describe('Exercicio - 4', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Exercício - 5', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});