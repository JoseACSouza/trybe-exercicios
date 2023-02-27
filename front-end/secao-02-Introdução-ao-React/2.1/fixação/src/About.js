import React from 'react';

class About extends React.Component {
  render() {
    return (
      <section>
      <h1 className='name'>José Alexandre Cordeiro</h1>
      <p className='aboutMe'>Engenheiro formado recentemente, apaixonado por números e tecnologias. Atualmente sou estudante de web development pela trybe. Em busca de oportunidade de se ingressar no
mercado de trabalho e por em prática todo o meu conhecimento, sempre prezando pelo
respeito e pelo aprendizado.</p>
      <h2>Minhas Habilidades</h2>
      <ul>
        <li>Comunicativo</li>
        <li>Trabalho bem em equipe</li>
        <li>Ânsia por aprendizado</li>
        <li>Conhecimento técnico em HTML, CSS, JS</li>
      </ul>
      </section>
    );
  }
}

export default About;