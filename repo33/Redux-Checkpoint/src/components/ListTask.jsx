import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.isDone);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.isDone);
    default:
      return todos;
  }
};

const ListTask = () => {
  const todos = useSelector(state => state.todos);
  const visibilityFilter = useSelector(state => state.visibilityFilter);

  const visibleTodos = getVisibleTodos(todos, visibilityFilter);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Your Tasks</h2>
      {visibleTodos.length === 0 ? (
        <p className="text-center text-gray-600 text-lg py-4">No tasks to show for this filter. Add one!</p>
      ) : (
        visibleTodos.map(task => (
          <Task key={task.id} task={task} />
        ))
      )}
    </div>
  );
};

export default ListTask;
