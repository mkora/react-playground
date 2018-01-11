import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactThankYou extends Component {

  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    country: PropTypes.oneOf(['USA', 'Canada', 'Australia']),
    subject: PropTypes.string.isRequired
  };

  render() {
    if (this.props.firstName && this.props.subject) {
      return (
        <div className="contact-thank-you">
          <p>Dear <strong>{this.props.firstName} {this.props.lastName}</strong>,</p>
          <p>{(this.props.country 
            ? `Hope everithing is going well in ${this.props.country}` 
            : '')}
          </p>
          <p>You said, <em>"{this.props.subject}"</em>.</p>
          <p>Thank you! I will work hard to make world the better place!</p>
        </div>
      );
    }
    return null;
  }
}

export default ContactThankYou;
