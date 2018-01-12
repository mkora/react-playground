import React from 'react';
import PropTypes from 'prop-types';

const ContactThankYou = (props) => {
  if (props.firstName && props.subject) {
    return (
      <div className="contact-thank-you">
        <p>Dear <strong>{props.firstName} {props.lastName}</strong>,</p>
        <p>{(props.country 
          ? `Hope everithing is going well in ${props.country}` 
          : '')}
        </p>
        <p>You said, <em>"{props.subject}"</em>.</p>
        <p>Thank you! I will work hard to make the world a better place!</p>
      </div>
    );
  }
  return null;
}

ContactThankYou.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  country: PropTypes.oneOf(['USA', 'Canada', 'Australia']),
  subject: PropTypes.string.isRequired
};

export default ContactThankYou;
