import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text }) => (
  <div className="my-8">
    <div className="flex flex-col items-center">
      <h1 className="font-black text-2xl md:text-4xl uppercase">{text}</h1>
      <div className="border-highlight border-b-2 w-1/12" />
    </div>
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
