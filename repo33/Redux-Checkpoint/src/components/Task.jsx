import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo } from '../actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleToggle = () => {
    dispatch(toggleTodo(task.id));
  };

  const handleEditSave = () => {
    if (newDescription.trim() !== '') {
      dispatch(editTodo(task.id, newDescription.trim()));
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEditSave();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setNewDescription(task.description);
    }
  };

  return (
    <div className={`flex items-center justify-between p-4 my-2 rounded-lg shadow-md transition-all duration-300 ${task.isDone ? 'bg-green-100 border-l-4 border-green-500' : 'bg-white border-l-4 border-blue-500'}`}>
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          onBlur={handleEditSave}
          onKeyDown={handleKeyPress}
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
          autoFocus
        />
      ) : (
        <span
          className={`flex-grow text-lg cursor-pointer ${task.isDone ? 'line-through text-gray-500' : 'text-gray-800'}`}
          onClick={handleToggle}
        >
          {task.description}
        </span>
      )}

      <div className="flex space-x-2 ml-auto">
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200 text-sm flex items-center justify-center"
            title="Edit Task"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712L8.58 15.322H5.75v2.838l7.439-7.439 1.157-1.157 3.712 3.712-1.157 1.157Z" />
            </svg>
          </button>
        )}
        {isEditing && (
          <button
            onClick={handleEditSave}
            className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200 text-sm flex items-center justify-center"
            title="Save Changes"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9.5 13.5a.75.75 0 0 1-1.172.036L3.1 11.26a.75.75 0 1 1 1.02-1.104l4.16 3.858 9.017-12.871a.75.75 0 0 1 1.04-.208Z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
