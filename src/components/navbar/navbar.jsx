import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './navbar.module.scss';

const Navbar = ({ t, scrollPosition, scrollTo }) => {
  const [isChecked, toogleCheck] = useState(false);
  const siteUrl = '#';
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight((window.innerHeight - 10) * -1);
  }, []);

  const navigate = (to) => {
    toogleCheck(false);
    scrollTo(to);
  };

  return (
    <nav className={`${styles.main_header} ${scrollPosition < height ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <a href={siteUrl}>BRUNO CERECETTO</a>
      </div>

      <input
        type="checkbox"
        className={styles.menu_btn}
        id="menu-btn"
        checked={isChecked}
        onChange={() => toogleCheck(!isChecked)}
      />
      <label htmlFor="menu-btn" className={styles.menu_icon}>
        <span className={styles.menu_icon__line} />
      </label>

      <ul className={styles.nav_links}>
        <li className={styles.nav_link}>
          <button type="button" onClick={() => navigate('about')}>
            {t('navbar.about')}
          </button>
        </li>
        <li className={styles.nav_link}>
          <button type="button" onClick={() => navigate('works')}>
            {t('navbar.works')}
          </button>
        </li>
        <li className={styles.nav_link}>
          <button type="button" onClick={() => navigate('contact')}>
            {t('navbar.contact')}
          </button>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
  scrollPosition: PropTypes.number.isRequired,
  scrollTo: PropTypes.func.isRequired,
};

export default Navbar;
