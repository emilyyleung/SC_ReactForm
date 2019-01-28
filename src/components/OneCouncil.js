import React from "react";
import { Component } from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

var selectWidth = {
  minWidth: "150px",
  margin: "10px"
};

var buildings = [];

export class Council extends Component {
  state = {
    council: "",
    open: false,
    buildingTypes: []
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  selectChange = event => {
    // console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
    // for (var property in event.target.value) {
    //   buildings.push(property)
    //   this.setState({
    //     buildingTypes: buildings
    //   })
    // }
    this.setState({ council: event.target.value }, () => {
      console.log("hello");
    });
  };

  selectClose = event => {
    this.setState({ open: false });
  };

  selectOpen = event => {
    this.setState({ open: true });
  };

  render() {
    const { values, handleChange, data } = this.props;

    const councilList = data.map(name => {
      // console.log(name.id);
      return <li key={name.id}>{name.council}</li>;
    });

    const selectCouncil = data.map(name => {
      return (
        <MenuItem key={name.id} value={name.council}>
          {name.council}
        </MenuItem>
      );
    });

    console.log(this.props);

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Council" />
          <TextField
            hintText={"Enter council"}
            floatingLabelText=" Council"
            onChange={handleChange("council")}
            defaultValue={values.council}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <hr />
          <ul>{councilList}</ul>
          <hr />
          <FormControl style={selectWidth} required>
            <InputLabel htmlFor="demo-controlled-open-select">
              Council
            </InputLabel>
            <Select
              open={this.state.open}
              onClose={this.selectClose}
              onOpen={this.selectOpen}
              onChange={this.selectChange}
              value={this.state.council}
              inputProps={{
                name: "council",
                id: "age-native-required"
              }}
            >
              {selectCouncil}
            </Select>
          </FormControl>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 5
  }
};

export default Council;
