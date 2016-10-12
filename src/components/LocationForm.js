import React, { Component } from 'react';

export default class LocationForm extends Component {

    submit(e) {
        e.preventDefault();

        const city = this.refs.city.value,
              state  = this.refs.state.value;

        this.props.conditions(city, state);

    }

    render() {
        return (
            <form action="/" className="location-form" onSubmit={e => this.submit(e)}>
                <div className="form-field">
                    <input ref="city" name="city" type="text" placeholder="Enter a city" required />
                </div>
                <div className="form-field">
                    <input ref="state" name="state" type="text" placeholder="Enter a state" required />
                </div>
                <button type="submit" className="button">Add Location</button>
            </form>
        );
    }
}
