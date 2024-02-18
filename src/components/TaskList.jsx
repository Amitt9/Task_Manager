import React from 'react';
import { Link } from 'react-router-dom';
import TaskItem from './TaskItem';
import tasks from './Task';
import './csscomponents/taskList.css';

function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-list">
       <h2>Task List</h2>
      <Link to="/add">
        <button>Add Task</button>
      </Link>
      {incompleteTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onToggle={() => onToggle(task.id)}
          onEdit={onEdit}
        />
      ))}
      <h2>Completed tasks</h2>
      {completedTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onToggle={() => onToggle(task.id)}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;
