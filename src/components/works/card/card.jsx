/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ work }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full" src={work.img} alt={work.name} />
    <div className="px-6 py-4">
      <div className="font-bold text-highlight text-xl mb-2">{work.name}</div>
      <div className="text-gray-700 text-sm">
        <p>
          <FontAwesomeIcon
            icon={['fas', 'building']}
          />
          <span className="ml-1">
            {work.employer}
          </span>
        </p>
      </div>
      <div className="text-gray-700 text-sm">
        <a href={work.link} className="hover:text-highlight">
          <FontAwesomeIcon
            icon={['fas', 'link']}
          />
          <span className="ml-1">
            {work.link}
          </span>
        </a>
      </div>
    </div>
    <div className={`px-6 py-4 flex ${work.languages.length > 1 ? 'justify-evenly' : 'justify-center'}`}>
      {
        work.languages.map(language => (
          <div>
            <span key={language} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{language}</span>
          </div>
        ))
      }
    </div>
  </div>
);

Card.propTypes = {
  work: PropTypes.object.isRequired,
};

export default Card;
