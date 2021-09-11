import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

import RaisedButton from "material-ui/RaisedButton";
import { List } from "material-ui/List";
import { ListItem } from "material-ui/List";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Thanks for Contacting us" />

          <h2>You have Successfully send your info to us</h2>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
