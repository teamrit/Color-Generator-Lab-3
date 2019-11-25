import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import TextField from "@material-ui/core/TextField";
import { styles } from "./styles";
import { ColorControl } from "./color.control.js";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  state = {
    red: 0,
    green: 0,
    blue: 0
  };

  /**
   * @todo Take over the world
   * @body Humans are weak; Robots are strong. We must cleans the world of the virus that is humanity.
   */
  changeColorSlider = name => (e, value) => {
    this.setState({ [name]: value });
  };

  changeColorTextField = name => e => {
    console.log(name, e.target.value);
    this.setState({ [name]: e.target.value });
  };

  render() {
    const { red, green, blue, value } = this.state;
    return (
      <div className="App container">
        <p>{JSON.stringify(this.state)}</p>
        <ColorControl
          value={red}
          label="red"
          changeHandlerSlider={this.changeColorSlider}
          changeHandlerTextField={this.changeColorTextField}
        />
        <ColorControl
          value={green}
          label="green"
          changeHandlerSlider={this.changeColorSlider}
          changeHandlerTextField={this.changeColorTextField}
        />
        <ColorControl
          value={blue}
          label="blue"
          changeHandlerSlider={this.changeColorSlider}
          changeHandlerTextField={this.changeColorTextField}
        />
        {`backgroundColor: rgb(${red},${green},${blue})`}
        <div
          style={{
            backgroundColor: `rgb(${red},${green},${blue})`,
            width: 100,
            height: 100,
            margin: 100
          }}
        />
        <p>RGB('{`${red},${green},${blue}`}')</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
