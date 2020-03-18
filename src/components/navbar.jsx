import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import logo from '../assets/primary-logo.svg';
import menuIcon from '../assets/icons/menu.svg';
import Menu from './menu';

class Navbar extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      showMenu: false,
    };
  }

  linkClass(pageName) {
    return classnames('nav__link',
      {'nav__link--selected': pageName === this.props.currentPage },
    );
  }

  render() {
    return (
      <div className="nav">
        <Link to='/'>
          <img src={logo} alt="Dream Big Fight On" className="nav__logo" />
        </Link>
        <Link to='/letter' className={this.linkClass('letter')}>
          The Letter
        </Link>
        <Link to='/petition' className={this.linkClass('petition')}>The Petition</Link>
        <img
          src={menuIcon}
          alt="menu"
          onClick={() => this.setState({ showMenu: true })}
          className="nav__menu"
          role="button"
          tabIndex={0}
        />
        {this.state.showMenu && <Menu closeMenu={() => this.setState({ showMenu: false })} />}
      </div>
    );
  }
}

Navbar.propTypes = {
  currentPage: PropTypes.string,
  openMenu: PropTypes.func,
}

Navbar.defaultProps = {
  currentPage: null,
  openMenu: () => {},
}

export default Navbar;
