import PropTypes from 'prop-types';
import s from './feedbackOption.module.css'

const FeedbackOption = ({
    options,
    onLeaveFeedback
}) => {
    return (
        <>
            <ul className={s.list}>
                { options.map((element)=>{
                    return (
                    <li key= { element } >
                        <button 
                            className={s.button}
                            name = { element } 
                            onClick={ onLeaveFeedback }>{ element }
                        </button>
                    </li>)
                })}
            </ul>
        </>
    )
};

FeedbackOption.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOption;