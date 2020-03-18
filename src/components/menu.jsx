import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import close from '../assets/icons/close.svg';

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
          <Link to="/petition" className="menu__link menu__link--last">The Petition</Link>
        </div>
      </div>
    );
  }
};

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
