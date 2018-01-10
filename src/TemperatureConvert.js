import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

class TemperatureConvert extends Component {

  state = {
    degreeType: '',
    temperature: '',
  };

  handleChangeForFah = (val) => {
    this.setState({
      degreeType: 'fah',
      temperature: val
    });
  }

  handleChangeForCel = (val) => {
    this.setState({
      degreeType: 'cel',
      temperature: val
    });
  }

  render() {
    const toCel = (t) => (isNaN(t) || t === '') 
        ? '' : Math.round(5/9 * (parseFloat(t) - 32)).toString();

    const toFah = (t) => (isNaN(t) || t === '') 
        ? '' : Math.round((9/5 * parseFloat(t)) + 32).toString();

    return (
      <div>
        <TemperatureInput 
          degreeType="cel" 
          temperature={(this.state.degreeType === 'fah') // change value bc of type
            ? toCel(this.state.temperature) : this.state.temperature} 
          onChangeTemperature={this.handleChangeForCel} />
        <TemperatureInput 
          degreeType="fah"
          temperature={(this.state.degreeType === 'cel') // change value bc of type
            ? toFah(this.state.temperature) : this.state.temperature}
          onChangeTemperature={this.handleChangeForFah} />
      </div>
    );
  }
}

export default TemperatureConvert;
