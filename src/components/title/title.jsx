import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, fontColor }) => (
  <div className="py-8">
    <div className="flex flex-col items-center">
      <h1 className={`font-black text-2xl md:text-4xl uppercase text-${fontColor}`}>{text}</h1>
      <div className="border-highlight border-b-2 w-1/12" />
    </div>
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
};

export default Title;
