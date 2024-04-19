import { useState } from 'react';
import PropTypes from 'prop-types';

const EditTaskForm = ({ task, onSave }) => {
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...task, title: editedTitle, description: editedDescription });
  };

  return (
    <div className='form-group'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        ></textarea>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

EditTaskForm.propTypes = {
  task: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditTaskForm;
