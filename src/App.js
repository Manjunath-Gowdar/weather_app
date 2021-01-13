import React, { Component, Fragment } from "react";
import "./App.css";
import Weather from "./component/Weather";
import axios from "axios";

// const API_key = "19bc7c8c16bb27f9c37cb022e0955c26";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getUser();
    console.log("1");
  }

  getUser = async () => {
    try {
      const response = await axios.get(
        "api.openweathermap.org/data/2.5/weather?q=London&appid=19bc7c8c16bb27f9c37cb022e0955c26"
      );
      console.log(response, "okay");
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <Fragment>
        <center>
          <Weather />
        </center>
      </Fragment>
    );
  }
}

export default App;
