import PropTypes from 'prop-types';

import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return <h2 className={css.notifi}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
