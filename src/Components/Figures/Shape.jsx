import React from "react";

class Shape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alto: 0,
      ancho: 0,
      altoAct: false,
      anchoAnc: false
    };
    this.actAlto = this.actAlto.bind(this);
    this.actAncho = this.actAncho.bind(this);
  }
  actAlto() {
    this.setState({
      alto: parseInt(document.getElementById("alt").value),
      altoAct: true
    });
  }
  actAncho() {
    this.setState({
      ancho: parseInt(document.getElementById("anc").value),
      altoAnc: true
    });
  }
  renderSwitch(param) {
    switch (param) {
      case "square":
      case "rhomboid":
        return this.state.alto * this.state.ancho;
      case "triangle":
      case "diamond":
        return (this.state.alto * this.state.ancho) / 2;
    }
  }
  renderArea() {
    const area = this.renderSwitch(this.props.shape);
    if (area == 0) return "";
    else if (area > 100) return `Area: ${area / 100} m²`;
    else return `Area: ${area} cm²`;
  }
  renderPer() {
    const per = this.state.alto * 2 + this.state.ancho * 2;
    if (per == 0 
        || !this.state.altoAct 
        || !this.state.altoAnc 
        || this.props.shape == "triangle") 
          return null;
    else return `Perímetro: ${per} cm`;
  }
  render() {
    return (
      <>
        <input
          type="number"
          placeholder="Altura en cetímetros"
          id="alt"
          onChange={this.actAlto}
          min="1"
        />
        <input
          type="number"
          placeholder="Ancho en cetímetros"
          id="anc"
          onChange={this.actAncho}
          min="1"
        />
        <br />
        <h3>{this.renderArea()}</h3>
        <h3>{this.renderPer()}</h3>
      </>
    );
  }
}

export default Shape;
