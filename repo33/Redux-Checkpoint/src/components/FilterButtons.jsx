import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, VisibilityFilters } from '../actions';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(state => state.visibilityFilter);

  return (
    <div className="flex justify-center space-x-4 mb-6 p-4 bg-gray-100 rounded-lg shadow-inner">
      <button
        onClick={() => dispatch(setFilter(VisibilityFilters.SHOW_ALL))}
        className={`px-5 py-2 rounded-md font-medium transition duration-200 ${activeFilter === VisibilityFilters.SHOW_ALL ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter(VisibilityFilters.SHOW_ACTIVE))}
        className={`px-5 py-2 rounded-md font-medium transition duration-200 ${activeFilter === VisibilityFilters.SHOW_ACTIVE ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        Active
      </button>
      <button
        onClick={() => dispatch(setFilter(VisibilityFilters.SHOW_COMPLETED))}
        className={`px-5 py-2 rounded-md font-medium transition duration-200 ${activeFilter === VisibilityFilters.SHOW_COMPLETED ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
