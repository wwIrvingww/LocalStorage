import { useState } from 'react';
import PropTypes from 'prop-types';

import './AddTaskForm.css';

/**
 * A form component for adding new tasks.
 * Handles input field state and task submission.
 * @param {function} onAddTask - Callback function to add a new task.
 */
const AddTaskForm = ({ onAddTask }) => {
  // Initialize state for task title and description
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  /**
   * Handles form submission and task creation.
   * @param {object} e - Submit event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) return;

    // Generate a unique ID for the new task
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: title.trim(), // Remove leading/trailing whitespace from title
      description: description.trim(), // Remove leading/trailing whitespace from description
    };

    // Add the new task using the provided callback function
    onAddTask(newTask);

    // Reset form and input fields
    e.target.reset();
    setTitle('');
    setDescription('');
  };

  return (
    <div className='form-group'>
      <form onSubmit={handleSubmit}>
        {/* Title input field */}
        <input
          className='input'
          type="text"
          placeholder="Título de la tarea"
          required
          minLength={3} // Minimum length validation
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Description textarea field */}
        <textarea
          className='textarea'
          placeholder="Descripción de la tarea"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* Submit button */}
        <button className='button' type="submit">Agreg
