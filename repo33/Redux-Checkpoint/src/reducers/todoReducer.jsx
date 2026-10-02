const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );

    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, description: action.payload.newDescription } : todo
      );

    default:
      return state;
  }
};

export default todosReducer;
