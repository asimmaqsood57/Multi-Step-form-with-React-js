import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

import RaisedButton from "material-ui/RaisedButton";
import { List } from "material-ui/List";
import { ListItem } from "material-ui/List";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.preStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm" />

          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="email" secondaryText={email} />
            <ListItem primaryText="occupation" secondaryText={occupation} />
            <ListItem primaryText="city" secondaryText={city} />
            <ListItem primaryText="bio" secondaryText={bio} />
          </List>

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

export default Confirm;
