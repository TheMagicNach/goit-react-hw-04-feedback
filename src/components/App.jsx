import React ,{ useState } from "react"
import FeedbackOptions  from "./FeedbackOptions/FeedbackOptions";
import Title  from "./Title/Title";
import Statistic  from "./Statistic/Statistic"
import Notification  from "./Notifications/Notification";
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }

    // if (option === 'good') {
    //   setGood(prevGood => prevGood + 1);
    // }
    // if (option === 'neutral') {
    //   setNeutral(prevNeutral => prevNeutral + 1);
    // }
    // if (option === 'bad') {
    //   setBad(prevBad => prevBad + 1);
    // }


  };

  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();


  const renderContent = () => {
    if (total > 0) {
      return (
        <>
          <Title title="Statistics">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Title>
          <Notification message="Thank you for your feedback!" />
        </>
      );
    } else {
      return <Notification message="There is no feedback" />;
    }
  };

  return (
    <div>
      <Title title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          handleFeedback={handleFeedback}
        />
      </Title>
      {renderContent()}
      
    </div>
  );
};