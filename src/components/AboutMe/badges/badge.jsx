import React from 'react';
import PropTypes from 'prop-types';
import styles from './badge.module.scss';

const Badge = ({ icon, text }) => (
  <div className="text-center">
    <div className={styles.badge}>
      <div className={styles.circle}>
        <i className={`${icon}`} />
      </div>
      <div className={styles.ribbon}>{ text }</div>
    </div>
  </div>
);

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Badge;
