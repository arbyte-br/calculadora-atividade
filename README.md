# **Atividade Calculadora**

> Agora que tivemos uma introdução sobre o que é React, vamos brincar um pouco com a montagem de componentes.

<br>

## **Objetivo**

Criar uma calculadora básica que oferece as seguintes opções:

- Soma
- Multiplicação
- Divisão
- Subtração

<br>

## **Requisitos**

1. O projeto precisa ser feito em React.js.
2. Faça com que os botões dos números da calculadora sejam componentes, reutilize esse componentes para fazer todos os botões da calculadora.
3. Crie uma interface minimamente responsiva.

<br>
<hr>

## **TO DO**

> Vamos fazer uma calculadora que atenda todos os requisitos, para isso devemos seguir os seguintes passos.

<br>

## **Componentes**

- [ ] Criar o componente **Calculadora**.
- [ ] Criar o componente **Botão**.

<br>

## **Calculadora - Métodos**

- [ ] Criar método que irá mostrar o resultado.
- [ ] Criar método que irá calcular de acordo com o operador.
- [ ] Criar método que verifica se é um operador.
- [ ] Criar método que insere números.
- [ ] Criar método que reseta os cálculos.
- [ ] Criar método que gerencia as ações de acordo com o botão pressionado.

<br>

### **Botão - Métodos**

- [ ] Criar método que gerencia a ação ao pressionar o botão, usando a prop recebida da Calculadora.

<br>

## **Calculadora - Especificação dos Métodos**

### **contructor()**

- [ ] Criar o atributo `this.state` que seja um objeto que contenham os atributos `display`, `calculo`, `ligado` e `erro`.

<br>

### **isOperator()**

- [ ] Deve receber como parâmetro um operador.
- [ ] Deve conter uma variável onde tem todos os operadores possíveis.
- [ ] Retornar `true` se o operador do parâmetro existir na array de operadores, se não retornar `false`.

<br>

### **resultado()**

- [ ] Deve conter um try... catch... para que verifique se o calculo é possível.
- [ ] Caso ocorrer um erro, mostrar no display a mensagem de erro, e após alguns segundos resetar todos os states.

<br>

### **calcular()**

- [ ] Deve receber como parâmetro tanto o símbolo, quanto o operador.
- [ ] Se o calculo tiver algum valor e não incluir algum operador, adicionar o operador no fim do cálculo e do que será exibido no display.
- [ ] Se não, verifica se a última posição é um operador, se realmente for, ai troca o operador pelo novo passado nos parâmetros.

<br>

### **inserirNumero()**

- [ ] Deve receber como parâmetro o número que será disponibilizado no display.
- [ ] Se o valor do parâmetro `número` for uma vírgula, trocar o valor para um ponto e então adicionar tanto no cálculo quanto no display.
- [ ] Se não, adiciona o número no final do cálculo e do display.

<br>

### **resetar()**

- [ ] Esse método simplesmente irá resetar todos os states do componente.

<br>

### **digitarNumero()**

- [ ] Deve receber como parâmetro a `opção` que será o botão que foi pressionado na calculadora.
- [ ] Verifica se a calculadora não deu algum erro e se ela está ligada.
- [ ] Caso passe na condição, deve ser feito um `switch` que vai verificar as principais funções da calculadora, exceto para os botões `ON` e `OFF`.

<br>

### **ligar()**

- [ ] Deve apenas _setar_ o state `ligado` para `true`.

<br>

### **desligar()**

- [ ] Deve _setar_ o state `ligado` para `false`.
- [ ] Deve rodar o método `resetar()`.

<br>

## **Botão - Especificação dos Métodos**

### **acaoBotao()**

- [ ] Deve executar a ação que o botão carrega através da prop `acao`.
