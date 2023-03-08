import PropTypes from 'prop-types';
import s from './statistics.module.css'

const Statistics = ({
    good, 
    neutral, 
    bad, 
    total,
    positivePercentage
}) => {
    return (
        <ul className={s.list}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>PositivePercentage: {positivePercentage + '%'}</li>
         </ul>
    ) 


}
export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}