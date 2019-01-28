import React from "react";
import { Component } from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

var selectWidth = {
  minWidth: "150px",
  margin: "10px"
};

export class Selector extends Component {
  state = {
    council: "",
    open: false,
    buildingTypes: []
  };

  selectChange = event => {
    // console.log(event.target);
    console.log(event.target.value);
    for (var i = 0; i < event.target.value.length; i++) {
      console.log(event.target.value[i]);
    }
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  selectClose = () => {
    this.setState({ open: false });
  };

  selectOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { data } = this.props;

    const listMaker = data.map(name => {
      // console.log(name.id);
      return <li key={name.id}>{name.council}</li>;
    });

    const selectOption = data.map(name => {
      return (
        <MenuItem key={name.id} value={name.buildingTypes}>
          {name.council}
        </MenuItem>
      );
    });

    // console.log(this.state)

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <FormControl style={selectWidth}>
            <InputLabel htmlFor="demo-controlled-open-select">
              Council
            </InputLabel>
            <Select
              open={this.state.open}
              onClose={this.selectClose}
              onOpen={this.selectOpen}
              value={this.state.council}
              onChange={this.selectChange}
              inputProps={{
                name: "council",
                id: "demo-controlled-open-select"
              }}
            >
              {selectOption}
            </Select>
          </FormControl>
          {listMaker}
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Selector;
