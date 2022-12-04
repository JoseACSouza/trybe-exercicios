let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  //item 1
  console.log(`O livro favorito de ${leitor['nome']} se chama: ${leitor['livrosFavoritos'][0]['titulo']}!`);
  //item 2
  leitor['livrosFavoritos'][1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
//item 3
console.log(`${leitor['nome']} tem ${leitor['livrosFavoritos'].length} livros favoritos`);