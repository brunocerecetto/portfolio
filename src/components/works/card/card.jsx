/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import styles from './card.module.scss';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card = ({ work }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <animated.div
      className={styles.card}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
      key={work.name}
    >
      <div
        className="bg-center bg-cover h-eighty w-full"
        style={{
          backgroundImage: `url(${work.img})`,
        }}
      />
      <div className="flex flex-col text-center bg-white">
        <a
          href={work.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-highlight"
        >
          {work.name}
        </a>
        <span className="text-sm text-gray-700">{work.employer}</span>
        <span className="text-highlight">{work.languages.join(' - ')}</span>
      </div>
    </animated.div>
  );
};

Card.propTypes = {
  work: PropTypes.object.isRequired,
};

export default Card;
