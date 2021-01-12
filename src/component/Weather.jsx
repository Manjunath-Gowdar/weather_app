import React, { Fragment } from "react";

const Weather = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="cards">
            <h1>London</h1>
            <h1 className="py-2">25&deg;</h1>
        </div>
        {minMaxTemp(20,25)}
        <h5 className="py-3">Wether Description</h5>
      </div>
    </Fragment>
  );
};

function minMaxTemp(min,max) {
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
        
    )
}

export default Weather;
