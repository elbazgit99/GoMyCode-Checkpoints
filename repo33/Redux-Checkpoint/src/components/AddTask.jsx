import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const AddTask = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Task description cannot be empty!');
      return;
    }
    dispatch(addTodo(input.trim()));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 p-4 bg-blue-50 rounded-lg shadow-md mb-6">
      <input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={handleChange}
        className="flex-grow p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 text-gray-700 placeholder-gray-400"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md flex items-center justify-center gap-2" // Added flex for icon
      >
        {/* Correct SVG for an "Add" or "Plus" icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
