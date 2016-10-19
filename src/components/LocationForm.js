import React, { Component, PropTypes } from 'react';

// This looks good. A couple of notes
//  1. React is deprecating the use of refs as a string, so instead, use their function callback
//  2. bind submit in the constructor
//  3. always declare any props so any engineer knows what a component needs in order to work
export default class LocationForm extends Component {

  static defaultProps = {
    conditions: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();

    const city = this.cityRef.value;
    const state = this.stateRef.value;

    this.props.conditions(city, state);
  }

  render() {
    return (
      <form action="/" className="location-form" onSubmit={this.submit}>
        <div className="form-field">
          <input
            ref={(ref) => this.cityRef = ref }
            name="city"
            type="text"
            placeholder="Enter a city"
            required
          />
        </div>
        <div className="form-field">
          <input
            ref={(ref) => this.stateRef = ref }
            name="state"
            type="text"
            placeholder="Enter a state"
            required
          />
        </div>
        <button type="submit" className="button">View Weather</button>
      </form>
    );
  }
}
