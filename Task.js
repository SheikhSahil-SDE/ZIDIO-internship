import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-2"
        />
        <span className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
