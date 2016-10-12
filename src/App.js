import React, { Component } from 'react';
import axios from 'axios';

import Config from './config';

import WeatherCard from './components/WeatherCard';
import LocationForm from './components/LocationForm';

class App extends Component {

    constructor() {
        super();

        this.state = {
            weatherConditions: false
        }
    }

    getWeatherConditions(city, state) {

        const weatherUrl = Config.requestUrl + '/conditions/q/' + state + '/'+ city + '.json';

        axios.get(weatherUrl).then(res => {
            const dataSrc = res.data.current_observation;

            this.setState({
                weatherConditions: {
                    city: dataSrc.display_location.city,
                    temp: dataSrc.temp_f,
                    weather: dataSrc.weather,
                    icon: dataSrc.icon,
                    feelsLike: dataSrc.feelslike_f,
                    humid: dataSrc.relative_humidity,
                    windDir: dataSrc.wind_dir,
                    windSpd: dataSrc.wind_mph,
                    visibility: dataSrc.visibility_mi,
                    observe: dataSrc.observation_time
                }
            });

        });

    }

    componentDidMount() {

        navigator.geolocation.getCurrentPosition(position => {
            const geoUrl = Config.requestUrl + '/geolookup/q/' + position.coords.latitude + ',' + position.coords.longitude + '.json'

            axios.get(geoUrl).then(res => {
                this.getWeatherConditions(res.data.location.city, res.data.location.state);
            });

        });

    }

    render() {
        return (
            <div className="page">
                <div className="enter-location">
                    <div className="outer-container">
                        <LocationForm conditions={this.getWeatherConditions.bind(this)} />
                    </div>
                </div>
                <div className="outer-container">
                    <div className="inner">
                        <WeatherCard data={this.state.weatherConditions} />
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
