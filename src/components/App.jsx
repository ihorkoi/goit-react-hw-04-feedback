import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return good === 0 ? 0 : (good / total) * 100;
  };

  const total = countTotalFeedback();
  return (
    <div
      style={{
        height: '100vh',
        margin: '0 auto',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title={'Please provide feedback'}>
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={addFeedback}
        />
      </Section>

      {total !== 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback yet...'} />
      )}
    </div>
  );
};
