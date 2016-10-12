import React, { Component, PropTypes } from 'react';

export default class CardSummary extends Component {
    render() {
        return (
            <div className="summary">
                <div className="left short-info">
                    <span className="temp">{Math.floor(this.props.data.temp)}&deg;</span>
                    <p className="weather-text">{this.props.data.weather}</p>
                </div>
                <div className={"icon-" + this.props.data.icon + " right weather-block"}></div>
            </div>
        );
    }
}

React.propTypes = {
    temp: PropTypes.number,
    weather: PropTypes.string,
    icon: PropTypes.string
};
