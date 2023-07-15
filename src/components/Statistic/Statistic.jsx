
import PropTypes from 'prop-types';
import css from './Statistic.module.css';


const Statistic =({good, neutral, bad, total, positivePercentage})=> {
  

    return (
      <div className={css.statistic}>
        <p className={css.item}>Good: {good}</p>
        <p className={css.item}>Neutral: {neutral}</p>
        <p className={css.item}>Bad: {bad}</p>
        <p className={css.item}>Total: {total}</p>
        <p className={css.item}>Positive Feedback: {positivePercentage}%</p>
      </div>
    )
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;