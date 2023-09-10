import { Option, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(value => {
        return (
          <li key={value}>
            <Option
              type="button"
              onClick={() => onLeaveFeedback(value)}
              value={value}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Option>
          </li>
        );
      })}
    </List>
  );
};
