// TaskItem.js
import React,{useState } from 'react';
import './csscomponents/tasskItem.css';

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const { id, title, description, completed } = task;
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleToggle = () => {
    onToggle(id);
  };

  const handleEdit = () => {
    if (editing) {
      onEdit(task.id, editedTitle, editedDescription);
      setEditing(false);
    } else {
      setEditing(true);
    }
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  return (
    <div className="task-item">
     {editing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={handleDescriptionChange}
          />
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </>
      )}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <div className="task-item-button">
      {editing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
