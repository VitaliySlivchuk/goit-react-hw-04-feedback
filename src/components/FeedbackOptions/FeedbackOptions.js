import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onIncrementFeedback }) => {
  return (
    <ul className={css.feedback}>
      {options.map(el => (
        <li key={el}>
          <button className={css.item} onClick={onIncrementFeedback}>
            {el[0].toUpperCase() + el.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onIncrementFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
