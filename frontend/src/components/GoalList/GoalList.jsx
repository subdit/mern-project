import './GoalList.css';

const GoalList = () => {
  return (
    <ul className='goal-list'>
      {this.props.GoalList.map(goal => {
        return <li key={goal.id}>{goal.text}</li>;
      })}
    </ul>
  );
};
export default GoalList;
