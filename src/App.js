import React, { Component } from 'react';
import axios from 'axios';

import Config from './config';

import WeatherCard from './components/WeatherCard';
import LocationForm from './components/LocationForm';

class App extends Component {

    state = {
        loaded: false,
        data: {},
    };

    constructor(props) {
        super(props);

        // @rfinni you can define your state here, you can also do it like on line 11 above
        this.state = {
            weatherConditions: { loaded: false }
        }

        // ideally, you want to handle function binding here so when you use or pass functions down
        // as properties, they are bound to this components/objects scope.
        this.getWeatherConditions = this.getWeatherConditions.bind(this);
        this.reloadView = this.reloadView.bind(this);
    }

    getWeatherConditions(city, state) {

        const weatherUrl = Config.requestUrl + '/conditions/q/' + state + '/'+ city + '.json';

        axios.get(weatherUrl).then(res => {
            const dataSrc = res.data.current_observation;

            this.setState({
                weatherConditions: {
                    loaded: true,
                    city: dataSrc.display_location.city,
                    state: dataSrc.display_location.state,
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

    reloadView() {
        const condition = this.state.weatherConditions;
        this.getWeatherConditions(condition.city, condition.state);
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
                        <LocationForm conditions={this.getWeatherConditions} />
                    </div>
                </div>
                <div className="outer-container">
                    <div className="inner">
                        <WeatherCard data={this.state.weatherConditions} reloadView={this.reloadView}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
