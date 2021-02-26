import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <button
      className={styles.feedbackButton}
      key={option}
      name={option}
      type="button"
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
