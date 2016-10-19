import React, { Component, PropTypes } from 'react';

import CardSummary from './CardSummary';
import CardFooter from './CardFooter';

// This is awesome that you're seeing how components can be sliced.
// I'm going to take this one step further and say what we want to
// do here is make this a "functional" component. Meaning, it's a pure
// function that accepts parameters. A functional component differs from
// a normal stateful component in 1 major way, it does not contain state.
// React has some big performance boosts planned around functional components
// so it's wise to use them when you just have pure render components (like this one)


const WeatherCard = ({ data, reloadView }) => (
  <div className="tile" ref="tile">
    {data.loaded ? (
      <div className="tile-inner">
        <header className="city">
          <h1>{data.city}</h1>
        </header>
        <CardSummary data={data}/>
        <CardFooter data={data} reloadView={reloadView} />
      </div>
    ) : (
      <div className="tile-inner-loading"><p>Fetching weather data</p></div>
    )}
  </div>
);

WeatherCard.displayName = 'components/WeatherCard';

WeatherCard.propTypes = {
  reloadView: PropTypes.func.isRequired,
  data: PropTypes.object
};

export default WeatherCard;
