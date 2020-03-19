import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import close from '../assets/icons/close.svg';

const petLink = 'https://sign.moveon.org/petitions/sign-our-letter-to-vice-president-biden-we-have-some-plans-for-that';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu__bg" />
        <img
          src={close}
          role="button"
          className="menu__close"
          alt="close"
          onClick={this.props.closeMenu}
          tabIndex={0}
        />
        <div className="menu__links">
          <Link to="/" className="menu__link">Home</Link>
          <Link to="/letter" className="menu__link">The Letter</Link>
          {
            //<Link to="/petition" className="menu__link menu__link--last">The Petition</Link>
          }
          <a href={petLink} target="_blank" className="menu__link menu__link--last" rel="noopener noreferrer">The Petition</a>
        </div>
      </div>
    );
  }
};

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
