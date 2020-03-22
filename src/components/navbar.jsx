import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import logo from '../assets/primary-logo.svg';
import menuIcon from '../assets/icons/menu.svg';
import Menu from './menu';

const petLink = 'https://sign.moveon.org/petitions/sign-our-letter-to-vice-president-biden-we-have-some-plans-for-that';

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
        {
          //<Link to='/petition' className={this.linkClass('petition')}>The Petition</Link>
        }
        <a href="https://medium.com/@dreambigfighton" target="_blank" className={this.linkClass('medium')} rel="noopener noreferrer">Updates</a>
        <a href={petLink} target="_blank" className={this.linkClass('petition')} rel="noopener noreferrer">The Petition</a>
        {!this.state.showMenu &&
          <img
            src={menuIcon}
            alt="menu"
            onClick={() => this.setState({ showMenu: true })}
            className="nav__menu"
            role="button"
            tabIndex={0}
          />
        }
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
