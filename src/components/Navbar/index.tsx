import { FC, useContext, useState } from 'react';
import { ThemeContext } from '../../contexts';
import darkMode from '../../assets/dark-mode.svg';
import lightMode from '../../assets/light-mode.svg';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/hamburger-menu.svg';
import menuIconDark from '../../assets/hamburger-menu-dark.svg';
import { NAVBAR_TABS } from '../../constants';
import NavbarTab from '../NavbarTab';
import styles from './index.module.css';
import clsx from 'clsx';

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const context = useContext(ThemeContext);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.siteInfoContainer}>
          <img src={logo} className={styles.logo} />
        </div>

        <div className={styles.hamburgerMenu}>
          <button
            className={styles.themeToggle}
            onClick={() => context?.setIsDarkMode(!context.isDarkMode)}
          >
            <img
              className={styles.themeIcon}
              src={context?.isDarkMode ? darkMode : lightMode}
            />
          </button>
          <img
            onClick={() => setMenuOpen(!menuOpen)}
            src={context?.isDarkMode ? menuIconDark : menuIcon}
            className={clsx(styles.hamburgerMenu, styles.icon)}
          />
        </div>
      </div>

      {menuOpen && (
        <div className={styles.tabsContainer}>
          <div
            onClick={() => setMenuOpen(false)}
            className={styles.closeNavbar}
          >
            X
          </div>

          {NAVBAR_TABS.map(({ label, url }, idx) => (
            <NavbarTab key={idx} label={label} url={url} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
