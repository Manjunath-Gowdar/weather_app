import React, { Component, Fragment } from "react";
import "./App.css";
import Weather from "./component/Weather";
import Form from "./component/Form";

const API_key = "19bc7c8c16bb27f9c37cb022e0955c26";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: undefined,
      country: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
    };
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`
      );
      const response = await api_call.json();
      this.setState({
        city: `${response.name},${response.sys.country}`,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    return (
      <Fragment>
        <center>
          <Form loadWeather={this.getWeather} error={this.state.error} />
          <Weather
            city={this.state.city}
            country={this.state.country}
            temp_celsius={this.state.celsius}
            temp_max={this.state.temp_max}
            temp_min={this.state.temp_min}
            description={this.state.description}
          />
        </center>
      </Fragment>
    );
  }
}

export default App;
