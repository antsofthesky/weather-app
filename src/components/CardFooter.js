import React, { Component, PropTypes } from 'react';

export default class CardFooter extends Component {

    expand(e) {
        e.preventDefault();

        const trigger = e.target,
              list = trigger.nextSibling;

        if(trigger.classList.contains('show')) {
            trigger.innerHTML = 'More';
            trigger.classList.remove('show');
            list.classList.remove('show');
        } else {
            trigger.innerHTML = 'Less';
            trigger.classList.add('show');
            list.classList.add('show');
        }

    }

    render() {
        return (
            <footer className="more-info">
                <a href="#" className="toggle" onClick={e => this.expand(e)}>More</a>
                <ul className="additional">
                    <li><span className="icon-thermometer-half"></span> Feels like {Math.floor(this.props.data.feelsLike)}&deg;</li>
                    <li><span className="icon-humid"></span> Humidity {this.props.data.humid}</li>
                    <li><span className="icon-wind"></span> Wind {this.props.data.windDir} {this.props.data.windSpd} MPH</li>
                    <li><span className="icon-visibility"></span> Visibility {this.props.data.visibility} Mi.</li>
                    <li className="last-updated">
                        {this.props.data.observe}
                        <button onClick={e => this.props.reloadView()} className="icon-reload reload-trigger"><span>Reload</span></button>
                    </li>
                </ul>
            </footer>
        );
    }
}

React.propTypes = {
    feelsLike: PropTypes.number,
    humid: PropTypes.number,
    windDir: PropTypes.string,
    windSpd: PropTypes.number,
    visibility: PropTypes.number
};
