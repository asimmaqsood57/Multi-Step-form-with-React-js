import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField/TextField";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.preStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Personal Details" />
          <TextField
            title="Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            title="city"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            title="Enter Your bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />

          <RaisedButton
            label="Continue"
            primary={true}
            onClick={this.continue}
          />

          <RaisedButton
            label="Back"
            primary={true}
            style={{ margin: "25px" }}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
