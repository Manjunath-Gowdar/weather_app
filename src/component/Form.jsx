import React, { Fragment } from "react";
import "./Form.css";

const form = (props) => {
  return (
    <div className="container">
      <div className="">{props.error ? error() : null}</div>
      <form onSubmit={props.loadWeather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              name="city"
              autoComplete="off"
              placeholder="city"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="country"
              autoComplete="off"
              placeholder="country"
            />
          </div>
          <div className="col-md-3 mt-md-0 text-md-left">
            <button className="btn btn-warning">Get weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};
function error() {
  return (
    <Fragment>
      <div className="alert alert-danger mx-5" role="alert">
        please enter correct city and country
      </div>
    </Fragment>
  );
}

export default form;
