import { useState } from 'react';
import PropTypes from 'prop-types';

import './AddTaskForm.css';

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) return;

    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: title.trim(),
      description: description.trim(),
    };
    onAddTask(newTask);
    e.target.reset();
    setTitle('');
    setDescription('');
  };

  return (
    <div className='form-group'>
      <form onSubmit={handleSubmit} >
        <input className='input'
          type="text"
          placeholder="Título de la tarea"
          required
          minLength={3}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <textarea className='textarea'
          placeholder="Descripción de la tarea"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className='button'type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};

AddTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
