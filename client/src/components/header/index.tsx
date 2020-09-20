import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoWeeberFull } from '../../assets';

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container max-width-1200">
        <div className="navbar__brand">
          <Link to="/">
            <LogoWeeberFull />
          </Link>
        </div>
        <ul className="navbar__lists">
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="active"
              to="/works"
            >
              Our Works
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="active"
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link navbar__link--cta"
              activeClassName="active"
              to="/hire-us"
            >
              Let's Talk
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
