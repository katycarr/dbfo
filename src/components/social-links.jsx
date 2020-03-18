import React, { Component } from 'react';

import email from '../assets/icons/email.svg';
import insta from '../assets/icons/insta.svg';
import fb from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';

class SocialLinks extends Component {
  render() {
    return (
      <div className="social-links">
        <a href="mailto:info@dreambigfighton.org" className="social-links__link">
          <img src={email} alt="email" className="social-links__icon"/>
        </a>
        <a href="https://www.instagram.com/dreambigfighton/" className="social-links__link">
          <img src={insta} alt="instagram" className="social-links__icon"/>
        </a>
        <a href="https://www.facebook.com/DreamBigFightOn/" className="social-links__link">
          <img src={fb} alt="facebook" className="social-links__icon"/>
        </a>
        <a href="https://twitter.com/dreambigfighton" className="social-links__link">
          <img src={twitter} alt="twitter" className="social-links__icon"/>
        </a>
      </div>
    );
  }
}


export default SocialLinks;
