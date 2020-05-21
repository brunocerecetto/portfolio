import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import i18n from '../../libraries/i18n';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'white',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.75rem',
  },
  iconOutlined: {
    color: 'white',
  },
}));

const Footer = ({ t }) => {
  const year = new Date().getFullYear();
  const classes = useStyles();
  const [lang, setLanguage] = React.useState('en');

  const handleChange = (event) => {
    const lng = event.target.value;
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="w-full min-h-48 bg-gray-800 text-white leading-tight py-2">
      <div className="h-full flex flex-col justify-between">
        <div>
          <ul className="flex justify-center items-center pt-5 mb-4 md:mb-0">
            <li className="m-2 text-base">
              <a
                href="https://www.linkedin.com/in/brunocerecetto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="hover:text-highlight"
                  icon={['fab', 'linkedin']}
                  size="2x"
                />
              </a>
            </li>
            <li className="m-2 text-base">
              <a
                href="https://twitter.com/brunocerecetto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="hover:text-highlight"
                  icon={['fab', 'twitter']}
                  size="2x"
                />
              </a>
            </li>
            <li className="m-2 text-base">
              <a href="https://github.com/brunocerecetto" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  className="hover:text-highlight"
                  icon={['fab', 'github']}
                  size="2x"
                />
              </a>
            </li>
            <li className="m-2 text-base">
              <a
                href="https://stackoverflow.com/users/6039818/bruno-cerecetto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="hover:text-highlight"
                  icon={['fab', 'stack-overflow']}
                  size="3x"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center pb-4">
          <div className="ml-4 w-full md:w-1/3 flex justify-center md:justify-start items-center text-xs mb-4 md:mb-0">
            <span className="mr-2s">{t('footer.viewThisSite')}</span>
            <Select
              id="select-outlined"
              value={lang}
              onChange={handleChange}
              variant="outlined"
              inputProps={{
                classes: {
                  root: classes.root,
                  iconOutlined: classes.iconOutlined,
                },
              }}
            >
              <MenuItem value="en">{t('footer.english')}</MenuItem>
              <MenuItem value="es">{t('footer.spanish')}</MenuItem>
            </Select>
          </div>

          <div className="w-full md:w-1/3">
            <ul className="flex flex-col items-center">
              <li className="text-sm md:text-base">
                {t('footer.madeBy', { year, mate: '🧉', heart: '❤️' })}
              </li>
              <li className="text-xs md:text-sm">{t('footer.also', { beer: '🍺' })}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Footer;
