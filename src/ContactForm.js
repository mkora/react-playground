import React, { Component } from 'react';
import ContactThankYou from './ContactThankYou';

class ContactForm extends Component {
 
  state = {
    firstName: '',
    lastName: '',
    country: 'USA',
    subject: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      country: this.country.value,
      subject: this.subject.value
    });
  }

  render() {
    return (
      <div>
        <ContactThankYou {...this.state} />

        <div className="contact-form">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="contact-first-name">First Name</label>
            <input type="text" 
              id="contact-first-name" 
              name="firstname" 
              placeholder="Enter your name" 
              ref={(input) => this.firstName = input} />

            <label htmlFor="contact-last-name">Last Name</label>
            <input 
              type="text" 
              id="lname" 
              name="lastname" 
              placeholder="Enter your last name" 
              ref={(input) => this.lastName = input} />

            <label htmlFor="contact-country">Country</label>
            <select 
              id="contact-country" 
              name="country"
              ref={(input) => this.country = input}>
              <option>USA</option>
              <option>Canada</option>          
              <option>Australia</option>          
            </select>

            <label htmlFor="contact-subject">Subject</label>
            <textarea 
              id="contact-subject" 
              name="subject" 
              placeholder="Write what you want to tell me"
              ref={(input) => this.subject = input}></textarea>

            <input 
              type="submit" 
              value="Submit" />
          </form>
        </div>
      </div>
    );
  };
}

export default ContactForm;
