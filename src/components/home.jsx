import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './navbar';
import SocialLinks from './social-links';
import background from '../assets/liberty.png';
import mobileBg from '../assets/liberty_mobile.png';

const petLink = 'https://sign.moveon.org/petitions/sign-our-letter-to-vice-president-biden-we-have-some-plans-for-that';
class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={background} className="home__bg home__bg--desktop" alt="" />
        <img src={mobileBg} className="home__bg home__bg--mobile" alt="" />
        <Navbar />
        <div className="home__content">
          <div className="home__main">
            We are former Elizabeth Warren volunteer leaders who are
            <span className="home__em"> urging </span>
            Vice President Joe Biden to take up many of Elizabeth's plans.
          </div>
          <div className="home__sub">
            We invite you to join us in signing this open letter to the Democratic
            presidential frontrunner, about progressive issues that we need our next
            leader to prioritize. While our letter was written by volunteers from 
            Elizabeth Warren's campaign, our goal is to provide inclusive solutions 
            that work for everyone in America. 
          </div>
          <Link to="/letter" className="link home__link home__link--first">Read the letter</Link>
          {
            //<Link to="/petition" className="link home__link">Sign the petition</Link>
          }
          <a href={petLink} target="_blank" className="link home__link" rel="noopener noreferrer">Sign the petition</a>
        </div>
        <SocialLinks />
      </div>
    );
  }
}

export default Home;
