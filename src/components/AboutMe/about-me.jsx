import React from 'react';
import me from '../../assets/images/me.jpg';
import Badge from './badges';
import Header from '../header/header';
import ProgressBar from './progress-bar';
import styles from './about-me.module.scss';

const AboutMeComponent = () => {
  const badges = [
    { text: 'javascript', icon: 'fab fa-js-square' },
    { text: 'angular', icon: 'fab fa-angular' },
    { text: 'react', icon: 'fab fa-react' },
    { text: 'Node JS', icon: 'fab fa-node-js' },
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
      <Header text="about" />

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
          </span>
          <span className="text-center md:text-xl">
            His role in Dominion is to make sure that everything
            <br />
            works as it should on the Front-End
            <br />
            but does things on the backend too 😂
            <br />
            Javascript is his passion. ❤️
          </span>
        </div>
        <div className="hidden lg:block -ml-40">
          <hr className={`border h-ninety ${styles.border_solid} bg-highlight text-highlight`} />
        </div>
        <div className="flex flex-col items-center mt-5 lg:mt-0">
          <h2 className="text-2xl font-black mb-5">Technologies I enjoy:</h2>
          <div className="flex flex-row justify-between">
            {badges.map(b => (
              <Badge key={b.text} text={b.text} icon={b.icon} />
            ))}
          </div>
          <h2 className="text-2xl font-black my-5">Skills:</h2>
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

export default AboutMeComponent;
