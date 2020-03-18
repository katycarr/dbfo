import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import inclusion from '../assets/icons/inclusion.svg';
import wealthTax from '../assets/icons/wealth-tax.svg';
import corruption from '../assets/icons/corruption.svg';
import immigration from '../assets/icons/immigration.svg';
import debt from '../assets/icons/debt.svg';
import disability from '../assets/icons/disability.svg';
import childcare from '../assets/icons/child-care.svg';
import climate from '../assets/icons/climate.svg';


const SkipLinks = () => {
  return (
    <div className="skip-link">
      <div className="skip-link__link">
        <img src={inclusion} alt="" className="skip-link__icon" />
        <Link to="/letter#inclusion" className="link">Inclusion</Link>
      </div>
      <div className="skip-link__link">
        <img src={wealthTax} alt="" className="skip-link__icon" />
        <Link to="/letter#wealthTax" className="link">Wealth Tax</Link>
      </div>
      <div className="skip-link__link">
        <img src={corruption} alt="" className="skip-link__icon" />
        <Link to="/letter#corruption" className="link">Corruption</Link>
      </div>
      <div className="skip-link__link">
        <img src={immigration} alt="" className="skip-link__icon" />
        <Link to="/letter#immigration" className="link">Immigration</Link>
      </div>
      <div className="skip-link__link">
        <img src={debt} alt="" className="skip-link__icon" />
        <Link to="/letter#debt" className="link">Student Loan Debt</Link>
      </div>
      <div className="skip-link__link">
        <img src={disability} alt="" className="skip-link__icon" />
        <Link to="/letter#disability" className="link">Equality for Americans with Disabilities</Link>
      </div>
      <div className="skip-link__link">
        <img src={childcare} alt="" className="skip-link__icon" />
        <Link to="/letter#childcare" className="link">Universal Child Care</Link>
      </div>
      <div className="skip-link__link">
        <img src={climate} alt="" className="skip-link__icon" />
        <Link to="/letter#climate" className="link">Climate Change, Health Care, and Beyond</Link>
      </div>
    </div>
  );
}

export default SkipLinks;
