import { VisibilityFilters } from '../actions';

const filterReducer = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload.filter;
    default:
      return state;
  }
};

export default filterReducer;
