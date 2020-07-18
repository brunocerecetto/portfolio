/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import Title from '../title';
import Card from './card';

const wokrsImages = [
  {
    name: 'AccountLink',
    employer: 'Dominion Capital Strategies',
    img: require('./../../assets/images/work1.jpg'),
    languages: ['angular', '.net core', 'sql server'],
    link: 'https://app.dominion-cs.com',
  },
  {
    name: "Fabio's Pharmacy",
    employer: 'Sixth Element',
    img: require('./../../assets/images/work3.jpg'),
    languages: ['react'],
    link: 'https://www.fabiospharmacy.com',
  },
  {
    name: 'Sixth Element',
    employer: 'Sixth Element',
    img: require('./../../assets/images/work2.jpg'),
    languages: ['html', 'javascript', 'css'],
    link: 'https://www.6element.io',
  },
  {
    name: 'Lynkos',
    employer: 'Lynkos',
    img: require('./../../assets/images/work4.jpg'),
    languages: ['jquery', '.net framework', 'sql server'],
    link: 'https://www.lynkos.com',
  },
];

const Works = ({ t }) => (
  <div className="bg-gray-200">
    <Title text={t('navbar.works')} fontColor="black" />
    <div className="flex justify-around flex-wrap pb-16">
      {wokrsImages.map(work => (
        <div key={work.name}>
          <Card work={work} key={work.name} />
        </div>
      ))}
    </div>
  </div>
);

Works.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Works;
