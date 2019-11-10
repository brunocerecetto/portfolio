import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ skill, width }) => (
  <div className="flex flex-row justify-between w-10/12 md:w-full bg-highlight rounded-lg my-2 h-6">
    <div className="text-white">
      <span className="mx-2 items-center text-xs">
        {skill}
      </span>
    </div>
    <div className={`bg-gray-500 flex justify-end w-${width} rounded-r-lg h-6`}>
      <span className="mr-3 items-center items-center text-xs">
        {' '}
      </span>
    </div>
  </div>
);

ProgressBar.propTypes = {
  skill: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default ProgressBar;
