import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoWeeberFull, LogoWeeberDark } from '../../assets';

const Header: React.FC = () => {
  const [collapse, setCollapse] = useState<boolean>(true);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__container max-width-1200">
          <div className="navbar__brand">
            <Link to="/">
              <LogoWeeberFull />
            </Link>
          </div>
          <div
            className={`navbar__brand-mobile ${!collapse ? 'collapse' : ''}`}
          >
            <Link to="/">
              <LogoWeeberDark />
            </Link>
          </div>
          <div
            onClick={() => setCollapse(!collapse)}
            className="navbar__hamburger-container"
          >
            <div
              className={`navbar__hamburger ${!collapse ? 'collapse' : ''}`}
            />
          </div>
          <ul className={`navbar__lists-mobile ${!collapse ? 'collapse' : ''}`}>
            <li className="navbar__item-mobile">
              <Link to="/" className="navbar__link-mobile">
                Home
              </Link>
            </li>
            <li className="navbar__item-mobile">
              <Link to="/works" className="navbar__link-mobile">
                Our Works
              </Link>
            </li>
            <li className="navbar__item-mobile">
              <Link to="/about" className="navbar__link-mobile">
                About us
              </Link>
            </li>
            <li className="navbar__item-mobile">
              <Link to="/hire-us" className="navbar__link-mobile">
                Hire Us
              </Link>
            </li>
          </ul>
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
    </header>
  );
};

export default Header;
