import React from "react";

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: 0
    };
    this.actRadio = this.actRadio.bind(this);
  }
  actRadio() {
    this.setState({
      radio: parseInt(document.getElementById("rad").value)
    });
  }
  renderArea() {
    const area = (Math.PI * this.state.radio ** 2).toFixed(2);
    if (area == 0.0) return "";
    else if (area > 100) return "Area: " + (area / 100).toFixed(2) + " m²";
    else return `Area: ${area} cm²`;
  }
  renderPer() {
    const per = (Math.PI * this.state.radio).toFixed(2);
    return per == 0.0 ? "" : `Perímetro: ${per} cm`;
  }
  render() {
    return (
      <>
        <input
          type="number"
          placeholder="Radio del círculo"
          id="rad"
          onChange={this.actRadio}
          min="1"
        />
        <br />

        <h3>{this.renderArea()}</h3>
        <h3>{this.renderPer()}</h3>
      </>
    );
  }
}
export default Circle;
