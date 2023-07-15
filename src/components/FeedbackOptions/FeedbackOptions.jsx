import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';



const FeedbackOptions = ({options,handleFeedback}) => {
  

    return (
      <div className={css.feedback}>
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleFeedback(option)}
            className={css.button}
          >
            {option}
          </button>
      ))}
    </div>)

  }


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;