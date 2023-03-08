import { useState } from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOption from "./FeedbackOption/FeedbackOption";
import Notification from "./Notification/Notification";


const Feedback  = () => {
  const [rating , setRating] = useState (
     {good: 0, 
      neutral: 0, 
      bad: 0});

  
  const updStatistics = (e) => {
      const { name } = e.currentTarget;

      setRating (prevRating => ({...prevRating, [name]: + prevRating[name]+ 1}));
  };

  const countTotalFeedback = () => {
      const values = Object.values(rating);
      return values.reduce((acc, item)=>{ return acc + item }, 0); 
  }

  const countPositiveFeedbackPercentage = () => {
      const total = countTotalFeedback();
      const good = rating.good;
      const value = Math.round(good/(total/100));
      return total ? value: 0; 
  }

  
  const controls = Object.keys(rating);
  

     return (
        <>
          <Section title = {'Please leave feedback'}>
            <FeedbackOption 
                 options = { controls }   
                 onLeaveFeedback= {updStatistics }
              />
          </Section>
          <Section title = {'Statistics'}>
            { countTotalFeedback > 0 ? 
              <Statistics 
              good = {rating.good } 
              neutral = { rating.neutral }
              bad = { rating.bad }
              total = { countTotalFeedback() }
              positivePercentage = { countPositiveFeedbackPercentage() }
              /> :
              <Notification message='There is no feedback'/> }   
          </Section>
        </>
      );

}
export default Feedback;
