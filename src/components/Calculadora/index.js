import React, { Component } from 'react';
import './style.css';

import Button from '../Button';

class Calculadora extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      calculo: '0',
      ligado: false,
      erro: false
    };
    this.timeout = undefined;
  }

  resultado = () => {
    try {
      let { calculo } = this.state;

      this.setState({
        // eslint-disable-next-line
        display: eval(calculo).toString(),
        // eslint-disable-next-line
        calculo: eval(calculo).toString()
      })
    } catch (err) {
      this.setState({
        display: 'ERRO',
        calculo: '0',
        erro: true
      });

      this.timeout = setTimeout(() => {
        this.setState({
          display: '0',
          calculo: '0',
          erro: false
        });
      }, 2000);
    }
  }

  calcular = (simbolo, operador) => {
    let { calculo, display } = this.state;

    if (calculo && !calculo.includes('*') && !calculo.includes('/') && !calculo.includes('+') && !calculo.includes('-')) {
      this.setState(prevState => ({
        display: prevState.display + simbolo,
        calculo: prevState.calculo + operador
      }));
    } else {
      this.setState({
        display: display.replace(/[÷×\-+]/, simbolo),
        calculo: calculo.replace(/[/*\-+]/, operador)
      });
    }
  }

  isOperator(operator) {
    let operators = ['+', '-', '*', '/'];

    return operators.includes(operator);
  }

  resetar = () => {
    this.setState({
      display: '0',
      calculo: '0'
    })
  }

  inserirNumero = (numero) => {
    if (numero === ',') {
      numero = '.';

      this.setState(prevState => ({
        display: prevState.display + numero,
        calculo: prevState.calculo + numero
      }));
    } else {

      this.setState(prevState => ({
        display: prevState.display === '0' ? numero : prevState.display + numero,
        calculo: prevState.calculo === '0' ? numero : prevState.calculo + numero
      }));
    }
  }

  digitarOpcao = (opcao) => {

    if (this.state.ligado || !this.state.erro) {
      switch (opcao) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case ',':
          this.inserirNumero(opcao);
          break;
        case '×':
          this.calcular('×', '*')
          break;
        case '÷':
          this.calcular('÷', '/')
          break;
        case '-':
          this.calcular('-', '-')
          break;
        case '+':
          this.calcular('+', '+')
          break;
        case '=':
          this.resultado();
          break;
        case 'CE':
        case 'C':
          this.resetar();
          break;
        default:
      }
    }

    switch(opcao) {
      case 'ON':
        this.ligar();
        break;
      case 'OFF':
        this.desligar()
        break;
      default:
    }
  }

  ligar = () => {
    this.setState({
      ligado: true
    });
  }

  desligar = () => {
    this.setState({
      ligado: false
    });
  }

  render() {
    return (
      <section className="calculadora">
        <div className="row">
          <p className={this.state.ligado ? 'display active' : 'display'}>{this.state.display}</p>
        </div>
        <div className="row">
          <Button buttonText="CE" acao={this.digitarOpcao} />
          <Button buttonText="C" acao={this.digitarOpcao} />
          <Button buttonText="ON" acao={this.digitarOpcao} className="btn-on" />
          <Button buttonText="OFF" acao={this.digitarOpcao} className="btn-danger" />
        </div>
        <div className="row">
          <Button buttonText="7" acao={this.digitarOpcao} />
          <Button buttonText="8" acao={this.digitarOpcao} />
          <Button buttonText="9" acao={this.digitarOpcao} />
          <Button buttonText="÷" acao={this.digitarOpcao} className="btn-primary" />
        </div>
        <div className="row">
          <Button buttonText="4" acao={this.digitarOpcao} />
          <Button buttonText="5" acao={this.digitarOpcao} />
          <Button buttonText="6" acao={this.digitarOpcao} />
          <Button buttonText="×" acao={this.digitarOpcao} className="btn-primary" />
        </div>
        <div className="row">
          <Button buttonText="1" acao={this.digitarOpcao} />
          <Button buttonText="2" acao={this.digitarOpcao} />
          <Button buttonText="3" acao={this.digitarOpcao} />
          <Button buttonText="-" acao={this.digitarOpcao} className="btn-primary" />
        </div>
        <div className="row">
          <Button buttonText="0" acao={this.digitarOpcao} />
          <Button buttonText="," acao={this.digitarOpcao} className="btn-secondary" />
          <Button buttonText="=" acao={this.digitarOpcao} className="btn-primary" />
          <Button buttonText="+" acao={this.digitarOpcao} className="btn-primary" />
        </div>
      </section>
    )
  }

}

export default Calculadora;