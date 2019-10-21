import React, { useState } from 'react';

import styles from './navbar.module.scss';

const home = '#';

function NavbarComponent() {
  const [opened, openMenu] = useState(false);

  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.menu}>
        <li className={styles.logo}>
          <a href={home}>BRUNO CERECETTO</a>
        </li>
        <li className={`${styles.item} ${opened ? styles.active : ''}`}>
          <a href={home}>About</a>
        </li>
        <li className={`${styles.item} ${opened ? styles.active : ''}`}>
          <a href={home}>Works</a>
        </li>
        <li className={`${styles.item} ${opened ? styles.active : ''}`}>
          <a href={home}>Contact</a>
        </li>
        <li className={styles.toggle}>
          <button onClick={() => openMenu(!opened)} type="button">
            <i className={`fas ${opened ? 'fa-times' : 'fa-bars'} fa-2x`} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavbarComponent;
