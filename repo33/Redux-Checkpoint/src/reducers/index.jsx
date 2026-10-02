import { combineReducers } from 'redux';
import todosReducer from './todoReducer.jsx';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: filterReducer,
});

export default rootReducer;
