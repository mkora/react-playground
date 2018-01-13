import React, { Component } from 'react';

class ContactInput extends Component {
  // INFO: Stateless function components cannot have refs
  render() {
    return (
      <div>
        <label htmlFor="contact-country">Country</label>
        <select 
          id="contact-country" 
          name="country"
          ref="contactSelect">
          <option>USA</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>
      </div>
    );
  }
}

export default ContactInput;
