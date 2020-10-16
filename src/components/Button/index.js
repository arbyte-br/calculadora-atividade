import React, { Component } from 'react';
import './style.css';

class Button extends Component {

  acaoBotao = () => {
    let { buttonText, acao } = this.props;
    acao(buttonText);
  }

  render() {
    let { buttonText, className = "" } = this.props;

    return (
      <button onClick={this.acaoBotao} className={`btn ${className}`}>{buttonText}</button>
    )
  }
}

export default Button;