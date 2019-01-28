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
  minWidth: "120px"
};

export class HomePage extends Component {
  state = {
    council: "",
    open: false
  };

  selectChange = event => {
    console.log(event.target);
    this.setState({ [event.target.name]: event.target.value });
  };

  selectClose = () => {
    this.setState({ open: false });
  };

  selectOpen = () => {
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

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Home Page" />
          <TextField
            hintText={"Enter council"}
            floatingLabelText=" Council"
            onChange={handleChange("council")}
            defaultValue={values.council}
          />
          <br />
          <RaisedButton label="Continue" primary={true} style={styles.button} />
          <hr />
          <ul>{councilList}</ul>
          <hr />
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

export default HomePage;
