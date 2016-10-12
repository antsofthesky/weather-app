import React, { Component, PropTypes } from 'react';

import CardSummary from './CardSummary';
import CardFooter from './CardFooter';

export default class WeatherCard extends Component {

    render() {
        return (
            <div className="tile" ref="tile">

                {this.props.data ?
                    <div className="tile-inner">
                        <header className="city">
                            <h1>{this.props.data.city}</h1>
                        </header>
                        <CardSummary data={this.props.data} />
                        <CardFooter data={this.props.data} />
                    </div>
                    : <div className="tile-inner-loading"><p>Fetching weather data</p></div> }

            </div>
        );
    }
}

WeatherCard.propTypes = {
    city: PropTypes.string
};
