// TaskManager.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import tasks from './Task.js';
import './csscomponents/taskManager.css';

function TaskManager() {
  const [taskList, setTaskList] = useState(tasks);

  const handleDelete = (taskId) => {
    const updatedTasks = taskList.filter(task => task.id !== taskId);
    setTaskList(updatedTasks);
  };

  const handleToggle = (taskId) => {
    const updatedTasks = taskList.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
  };

  const handleAdd = (newTask) => {
    setTaskList([...taskList, { id: Date.now(), ...newTask }]);
  };

  const handleEdit = (taskId, editedTitle, editedDescription) => {
    const updatedTasks = taskList.map(task =>
      task.id === taskId ? { ...task, title: editedTitle, description: editedDescription } : task
    );
    setTaskList(updatedTasks);
  };

  return (
    <Router>
    <div className="task-manager">
    <TaskList tasks={taskList} onDelete={handleDelete} onToggle={handleToggle} onEdit={handleEdit} />
      <Routes>
      <Route path="/" exact render={() => (
          <TaskList tasks={tasks} />
        )} />
        <Route path="/add" element={<TaskForm  onAdd={handleAdd} />}>
        </Route>
      </Routes>
      </div>
    </Router>
  );
}

export default TaskManager;
