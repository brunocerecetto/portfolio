import React from 'react';
import styles from './footer.module.scss';

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <section className={styles.ft_main}>
        <div className={styles.ft_main_item}>
          <h2 className={styles.ft_title}>About</h2>
          <ul>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Customers</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className={styles.ft_main_item}>
          <h2 className={styles.ft_title}>Resources</h2>
          <ul>
            <li>
              <a href="/">Docs</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">eBooks</a>
            </li>
            <li>
              <a href="/">Webinars</a>
            </li>
          </ul>
        </div>
        <div className={styles.ft_main_item}>
          <h2 className={styles.ft_title}>Contact</h2>
          <ul>
            <li>
              <a href="/">Help</a>
            </li>
            <li>
              <a href="/">Sales</a>
            </li>
            <li>
              <a href="/">Advertise</a>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.ft_social}>
        <ul className={styles.ft_social_list}>
          <li>
            <a
              href="https://www.linkedin.com/in/brunocerecetto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/brunocerecetto" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x" />
            </a>
          </li>
          <li>
            <a href="https://github.com/brunocerecetto" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x" />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/6039818/bruno-cerecetto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-stack-overflow fa-2x" />
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.ft_legal}>
        <ul className={styles.ft_legal_list}>
          <li>&copy; 2019 Copyright Bruno Cerecetto</li>
        </ul>
      </section>
    </footer>
  );
}

export default FooterComponent;
