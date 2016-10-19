import React, { Component, PropTypes } from 'react';

// Same note here about the "functional" component. Also, I didn't mention this in
// the last note but if you want to define your prop types, then we need to do that
// on the object and before we export it. See below
const CardSummary = (props) => (
  <div className="summary">
    <div className="left short-info">
      <span className="temp">{Math.floor(props.data.temp)}&deg;</span>
      <p className="weather-text">{props.data.weather}</p>
    </div>
    <div className={"icon-" + props.data.icon + " right weather-block"}></div>
  </div>
);

CardSummary.displayName = 'components/CardSummary';

CardSummary.propTypes = {
  temp: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default CardSummary;
