// A simple counter for generating unique IDs for new todos.
let nextTodoId = 0;

export const addTodo = (description) => ({
  type: 'ADD_TODO',
  payload: {
    id: nextTodoId++,
    description,
    isDone: false,
  },
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: { id },
});

export const editTodo = (id, newDescription) => ({
  type: 'EDIT_TODO',
  payload: { id, newDescription },
});

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: { filter },
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
