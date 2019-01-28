import React from "react";
import { Component } from "react";

import HomePage from "./HomePage";

import data from "../../data/database.json";

export class FormBase extends Component {
  state = {
    step: 1,
    council: "",
    buildingType: "",
    corner: false,
    heightOfBuilding: "",
    minFront: "",
    frontSetback: "",
    sideSetback: "",
    rearSetback: ""
  };

  // Proceed to next step

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { council, lastName, email } = this.state;
    const values = { council, lastName, email };

    switch (step) {
      case 1:
        return (
          <HomePage
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            data={data}
          />
        );
      case 2:
        return <h1>Step 2</h1>;
      case 3:
        return <h1>Step 3</h1>;
      case 4:
        return <h1>Step 4</h1>;
      default:
        return <h1>Default Page</h1>;
    }
  }
}

export default FormBase;
