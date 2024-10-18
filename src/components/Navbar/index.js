import React, { useContext, useState } from 'react';
import '../../css/navbar.css';
import menuIcon from '../../assets/images/hamburger-menu.svg';
import menuIconDark from '../../assets/images/hamburger-menu-dark.svg';
import darkMode from '../../assets/images/dark-mode.svg';
import lightMode from '../../assets/images/light-mode.svg';
import logo from '../../assets/images/logo.png';
import NavbarTab from '../NavbarTab';
import { ThemeContext } from '../../App';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const context = useContext(ThemeContext);

  const tabs = [
    { label: 'github', url: 'https://github.com/christiannnc' },
    {
      label: 'linkedin',
      url: 'https://linkedin.com/in/christian-cox-aa8095191',
    },
    {
      label: 'x',
      url: 'https://x.com/christiannnc_',
    },
    {
      label: 'email',
      url: 'mailto:christian@christianmcox.com',
    },
  ];

  return (
    <div className="cc-navbar">
      <div className="cc-navbar-container">
        <div className="site-info-container">
          <img src={logo} className="logo" />
        </div>

        <div className="hamburger-menu">
          <button
            className="theme-btn"
            onClick={() => context.setIsDarkMode(!context.isDarkMode)}
          >
            <img
              className="theme-icon"
              src={context.isDarkMode ? darkMode : lightMode}
            />
          </button>
          <img
            onClick={() => setMenuOpen(!menuOpen)}
            src={context.isDarkMode ? menuIconDark : menuIcon}
            className="hamburger-menu icon"
          />
        </div>
      </div>

      {menuOpen && (
        <div className="tabs-container">
          <div onClick={() => setMenuOpen(false)} className="close-navbar">
            X
          </div>

          {tabs.map(({ label, url }) => (
            <NavbarTab label={label} url={url} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
