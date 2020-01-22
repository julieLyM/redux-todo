import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList';
import { checkTodo, checkToggle } from '../actions';

const mapStateToProps = state => {
  return {
    tasks: state.filter ? state.tasks.filter(task => !task.done) : state.tasks,
    filtered: state.filter,
  };
};

const mapDispatchToProps = dispatch => ({
  checkTodo: index => dispatch(checkTodo(index)),
  checkToggle: () => dispatch(checkToggle()),
});

const ConnectedTodos = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default ConnectedTodos;
