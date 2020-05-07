import React from 'react';

function FooterComponent() {
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
              <i className="fab fa-linkedin md:fa-2x hover:text-highlight" />
            </a>
          </li>
          <li className="m-2 text-base">
            <a href="https://twitter.com/brunocerecetto" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter md:fa-2x hover:text-highlight" />
            </a>
          </li>
          <li className="m-2 text-base">
            <a href="https://github.com/brunocerecetto" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github md:fa-2x hover:text-highlight" />
            </a>
          </li>
          <li className="m-2 text-base">
            <a
              href="https://stackoverflow.com/users/6039818/bruno-cerecetto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-stack-overflow md:fa-2x hover:text-highlight" />
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
            - Made with 🧉 & ❤️ by Bruno Cerecetto
          </li>
          <li className="text-xs md:text-sm">(also with some 🍺)</li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterComponent;
