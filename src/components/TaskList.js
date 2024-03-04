// TaskList.js
"use client";
import React from 'react';
import { useTask } from '@/context/ReducerContext/TaskContext';

const TaskList = () => {
  const { tasks, dispatch } = useTask();

  const toggleTask = id => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const deleteTask = id => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
