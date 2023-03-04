import React from "react";

class Button extends React.Component{
  constructor(){
    super();
    this.state={
      input: '',
      output:'',
    }
  }
handlerButton = ()=> this.setState({
  output:this.state.input,
});  
setInput = (event)=> this.setState({
  input:event.target.value,
});

render(){
  return(
    <>
    <input type="text" placeholder="input de texto" value= { this.state.input } onChange={ this.setInput } ></input>
    <button onClick={ this.handlerButton }>Botão Clicável</button>
    <h1>{this.state.output}</h1>
    </>
    );
}

}

export default Button;