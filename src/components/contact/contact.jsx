import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Title from '../title';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '0.75rem',
    width: '80%',
    [theme.breakpoints.up('md')]: {
      width: '25%',
    },
  },

  cssLabel: {
    color: 'white',
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#d5174e !important',
    },
  },

  cssFocused: {
    color: 'white !important',
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important',
  },

  button: {
    color: 'white',
    float: 'right',
  },
}));

const Contact = ({ t }) => {
  const classes = useStyles();
  return (
    <div className="min-h-screen bg-gray-800">
      <Title text={t('navbar.contact')} fontColor="white" />
      <div className="flex flex-col justify-between text-white">
        <div className="flex justify-center w-full ">
          <span className="text-xl">{t('contact.amazingthings')}</span>
        </div>

        <div className="flex justify-center my-10">
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="name"
                label={t('contact.name')}
                variant="outlined"
                classes={classes.textfield}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </div>
            <div>
              <TextField
                id="email"
                label={t('contact.email')}
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </div>
            <div>
              <TextField
                id="message"
                label={t('contact.message')}
                multiline
                rows={7}
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </div>
            <div>
              <Button
                variant="outlined"
                classes={{ root: classes.button, outlined: classes.notchedOutline }}
              >
                Send
              </Button>
            </div>
          </form>
        </div>

        <div>
          <div className="flex justify-center w-full ">
            <span className="text-xl">{t('contact.findMe')}</span>
          </div>
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
      </div>
    </div>
  );
};

Contact.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Contact;
