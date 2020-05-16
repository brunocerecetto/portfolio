import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full h-48 bg-gray-800 text-white leading-tight py-2">
      <div className="h-full flex flex-col justify-between">
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
              <a
                href="https://twitter.com/brunocerecetto"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                  size="3x"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-wrap items-center pb-4">
          <div className="ml-4 w-full md:w-1/3">
            <span className="mr-2">view this site in</span>
            <select>
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
          </div>

          <div className="w-full md:w-1/3">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
