import React, { useState } from 'react';
// import styles from './navbar.module.scss';

const home = '#';

function NavbarComponent() {
  const [opened, openMenu] = useState(false);

  return (

    <nav className="bg-background sticky top-0 pb-3 text-lg md:text-2xl md:flex md:items-center border-b-4 border-highlight z-50">
      <button className="text-white absolute right-0 mr-2 md:hidden" onClick={() => openMenu(!opened)} type="button">
        <i className={`fas ${opened ? 'fa-times' : 'fa-bars'}`} />
      </button>
      <a href={home} className="font-bold text-highlight inline-block ml-2 md:mt-3 md:ml-40 hover:text-white">BRUNO CERECETTO</a>
      <ul className={`list-none ${opened ? 'block' : 'hidden'} mt-3 ml-5 md:flex flex-row`}>
        <li className="text-center mt-4 text-white md:m-0">
          <a href={home} className="md:ml-6 hover:text-highlight">About</a>
        </li>
        <li className="text-center m-4 text-white md:m-0">
          <a href={home} className="md:ml-6 hover:text-highlight">Works</a>
        </li>
        <li className="text-center m-4 text-white md:m-0">
          <a href={home} className="md:ml-6 hover:text-highlight">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
