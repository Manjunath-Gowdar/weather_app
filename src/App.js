import axios from "axios";
import React, { Component, Fragment } from "react";

import "./App.css";

import Weather from "./component/Weather";

// const API_key = "19bc7c8c16bb27f9c37cb022e0955c26";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    
    this.getUser();
    console.log('1')
  }
  
  

  // getWeather = async () => {
    
  //   };

   getUser = async()  => {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=2');
      console.log(response,'okay');
    } catch (error) {
      console.error(error);
    }
  }

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
