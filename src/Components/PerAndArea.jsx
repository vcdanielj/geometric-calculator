import React from 'react';

import Option from './Option';
import Circle from './Figures/Circle';
import Shape from './Figures/Shape';

class PerAndArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      figure: '',
    };
    this.changeState = this.changeState.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
  }

  changeState(e) {
    this.setState({
      figure: e.target.value,
    });
  }

  renderSwitch(param) {
    switch (param) {
      case 'Cuadrado':
        return <Shape shape="square" />;
      case 'Triángulo':
        return <Shape shape="triangle" />;
      case 'Rombo':
        return <Shape shape="diamond" />;
      case 'Romboide':
        return <Shape shape="rhomboid" />;
      default:
        return <Circle />;
    }
  }

  render() {
    return (
      <>
        <h1>Calculadora de Perímetro y Area</h1>
        <form>
          <label>Introducir Figura</label>
          <br />
          <select onChange={this.changeState}>
            {figures.map((figure) => (
              <Option figure={figure} key={figure} />
            ))}
          </select>
        </form>
        <div>{this.renderSwitch(this.state.figure)}</div>
      </>
    );
  }
}

const figures = ['Círculo', 'Rectángulo', 'Triángulo', 'Rombo', 'Romboide'];

export default PerAndArea;
