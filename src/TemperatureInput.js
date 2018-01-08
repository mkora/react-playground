import React, { Component } from 'react';

class TemperatureInput extends Component {

  degreeTypes = {
    cel: 'Celsius',
    fah: 'Fahrenheit'
  };

  // Left in sake of example
  // state = {
  //   temperature: 0,
  // };
  // /**
  //  * This is controlled component 
  //  *  <input type="text" value={this.state.temperature} onChange={this.handleChange} />
  //  * where is handleState is:
  //  */
  // handleChange = (event) => {
  //   this.setState({
  //     temperature: event.target.value
  //   });
  // }


  /**
   * This is controlled component 
   * (don't forget of event.target.value)
   */
  handleChange = (event) => {
    this.props.onChangeTemperature(event.target.value);
  }

  render() {
    const type = this.degreeTypes[this.props.degreeType];
    return (
      <div>
        <label htmlFor={`temperature-${type}`}>Enter temperature in {type}: </label>
        <input type="text" id={`temperature-${type}`} 
          value={this.props.temperature}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default TemperatureInput;
