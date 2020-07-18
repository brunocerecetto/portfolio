import React from 'react';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
import me from '../../assets/images/me.jpg';
import Badge from './badges';
import Title from '../title';
import ProgressBar from './progress-bar';
import styles from './about-me.module.scss';

const AboutMe = ({ t }) => {
  const badges = [
    { text: 'javascript', icon: 'js-square' },
    { text: 'angular', icon: 'angular' },
    { text: 'react', icon: 'react' },
    { text: 'Node JS', icon: 'node-js' },
  ];

  const skills = [
    { text: 'html', percentage: 90 },
    { text: 'javascript', percentage: 90 },
    { text: 'css', percentage: 65 },
    { text: 'angular', percentage: 80 },
    { text: '.net', percentage: 90 },
    { text: 'sql', percentage: 70 },
    { text: 'react', percentage: 65 },
    { text: 'node.js', percentage: 45 },
    { text: 'docker', percentage: 35 },
  ];

  return (
    <div className="min-h-screen">
      <Title text={t('navbar.about')} fontColor="black" />

      <div className="md:mx-16 flex flex-col lg:flex-row md:justify-between">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center mb-4">
            <div className={styles.badge}>
              <div className={styles.circle}>
                <img className="rounded-full" src={me} alt="" />
                <div className={styles.ribbon}>Who&apos;s this guy?</div>
              </div>
            </div>
          </div>
          <span className="text-center md:text-xl">
            <Trans i18nKey="about.description">
              Bruno is a Full Stack Developer currently working at
              <br />
              <a
                href="https://dominion-cs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-highlight"
              >
                Dominion Capital Strategies
              </a>
              {' '}
              in Montevideo, Uruguay 🇺🇾
              <br />
              His role in Dominion is to make sure that everything
              <br />
              works as it should on the Front-End
              <br />
              but does things on the backend too 😂
              <br />
              Javascript is his passion. ❤️
            </Trans>
          </span>
        </div>
        <div className="hidden lg:block -ml-40">
          <hr className={`border h-ninety ${styles.border_solid} bg-highlight text-highlight`} />
        </div>
        <div className="flex flex-col items-center mt-5 lg:mt-0">
          <h2 className="text-2xl font-black mb-5">{t('about.technologies')}</h2>
          <div className="flex flex-row justify-evenly">
            {badges.map(b => (
              <Badge key={b.text} text={b.text} icon={b.icon} />
            ))}
          </div>
          <h2 className="text-2xl font-black my-5">
            {t('about.skills')}
            :
          </h2>
          <div className="flex flex-col items-center w-full mb-20">
            {skills.map(s => (
              <ProgressBar key={s.text} skill={s.text} percentage={s.percentage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  t: PropTypes.func.isRequired,
};

export default AboutMe;
