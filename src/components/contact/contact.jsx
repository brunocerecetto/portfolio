import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Title from '../title';

const useStyles = makeStyles((theme) => ({
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
    color: 'white',
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Contact = ({ t }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [snack, setSnack] = React.useState({
    message: t('contact.snack.success'),
    severity: 'success',
  });
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-800">
      <Title text={t('navbar.contact')} fontColor="white" />
      <div className="flex flex-col justify-between text-white">
        <div className="flex justify-center w-full ">
          <span className="text-xl">{t('contact.amazingthings')}</span>
        </div>

        <div className="flex justify-center my-10">
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              axios
                .post(`https://getform.io/f/${process.env.REACT_APP_GETFORM_KEY}`, values, {
                  headers: { Accept: 'application/json' },
                })
                .then((response) => {
                  resetForm({ name: '', email: '', message: '' });
                  setSnack({
                    message: t('contact.snack.success'),
                    severity: 'success',
                  });
                })
                .catch((error) => {
                  setSnack({
                    message: t('contact.snack.error'),
                    severity: 'error',
                  });
                })
                .finally(() => {
                  setSubmitting(false);
                  setOpen(true);
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
                <div>
                  <TextField
                    id="name"
                    name="name"
                    label={t('contact.name')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
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
                    name="email"
                    label={t('contact.email')}
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
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
                  {errors.email && touched.email && errors.email}
                </div>
                <div>
                  <TextField
                    id="message"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
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
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Send
                  </Button>
                </div>
              </form>
            )}
          </Formik>
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

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snack.severity}>
          {snack.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

Contact.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Contact;
