import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-800 text-white leading-tight py-4">
      <div>
        <ul className="flex justify-center items-center pt-5">
          <li className="m-2 text-base">
            <a
              href="https://www.linkedin.com/in/brunocerecetto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="hover:text-highlight"
                icon={['fab', 'linkedin']}
                size="2x"
              />
            </a>
          </li>
          <li className="m-2 text-base">
            <a href="https://twitter.com/brunocerecetto" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                className="hover:text-highlight"
                icon={['fab', 'twitter']}
                size="2x"
              />
            </a>
          </li>
          <li className="m-2 text-base">
            <a href="https://github.com/brunocerecetto" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                className="hover:text-highlight"
                icon={['fab', 'github']}
                size="2x"
              />
            </a>
          </li>
          <li className="m-2 text-base">
            <a
              href="https://stackoverflow.com/users/6039818/bruno-cerecetto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="hover:text-highlight"
                icon={['fab', 'stack-overflow']}
                size="2x"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full flex flex-wrap justify-center pb-4">
        <ul className="flex flex-col items-center">
          <li className="text-sm md:text-base">
            &copy;
            {' '}
            {year}
            {' '}
            - Made with
            {' '}
            <span role="img" aria-label="mate">
              🧉
            </span>
            {' '}
            &
            {' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>
            {' '}
            by Bruno Cerecetto
          </li>
          <li className="text-xs md:text-sm">
            (also with some
            {' '}
            <span role="img" aria-label="beer">
              🍺
            </span>
            )
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
