import { useState } from 'react';
import PropTypes from 'prop-types';

import './AddTaskForm.css';


const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 1000), // Simulando un ID único
      title,
      description,
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <div className='form-group'>
      <form onSubmit={handleSubmit} >
        <input className='input'
          type="text"
          placeholder="Título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <textarea className='textarea'
          placeholder="Descripción de la tarea"
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