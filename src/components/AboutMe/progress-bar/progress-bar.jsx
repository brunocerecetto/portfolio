import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated, config } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

const ProgressBar = ({ skill, percentage }) => {
  const [showBar, setIsInView] = React.useState(false);
  const onVisibilityChange = isInView => setIsInView(isInView);

  const progress = useSpring({
    width: showBar ? `${percentage}%` : '0%',
    config: config.molasses,
  });

  return (
    <VisibilitySensor onChange={onVisibilityChange}>
      <div className="flex w-10/12 md:w-full bg-gray-500 rounded-lg my-2 h-6 text-white">
        <animated.div className="bg-highlight rounded-l-inherit" style={progress}>
          <span className="mx-2 items-center text-xs">{skill}</span>
        </animated.div>
      </div>
    </VisibilitySensor>
  );
};

ProgressBar.propTypes = {
  skill: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
