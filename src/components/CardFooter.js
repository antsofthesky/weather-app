import React, { Component, PropTypes } from 'react';

export default class CardFooter extends Component {

    // define our propTypes

    // constructor and bind our functions

    expand(e) {
        e.preventDefault();

        // this is going to sound totally weird, but there is really no need to modify
        // html directly via the DOM anymore. React excels because of the virtual DOM. Let's use
        // that and their diffing strategy to take advantage of only rendering when we need to.
        // That being said, what we want to do here is have our card footer track state internally
        // and then we just change our markup to what we need when the state changes. Something like:
        this.setState({
            show: !this.state.show,
        });

        // old way
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
        // A neat trick to variable setting is to "deconstruct" your props object. If you are using
        // babel or something else to transpile your js down into es5 syntax then you can do the following:
        const { data, reloadView } = this.props;
        // now you can just use data.humid, or data.windSpd, reloadView(), etc.
        // A note on this, is it will actually compile to:
        var data = this.props.data;
        var reloadView = this.props.reloadView;


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
