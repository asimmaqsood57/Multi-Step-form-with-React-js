import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField/TextField";

export class FormUserDetails extends Component {
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
          <AppBar title="Enter User Details" />
          <TextField
            title="Enter Your first Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            title="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            title="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />

          <RaisedButton
            label="Continue"
            primary={true}
            onClick={this.continue}
          />
          <br />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
