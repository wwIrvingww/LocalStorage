// Import PropTypes library to ensure proper data types for props
import PropTypes from 'prop-types';

// Import the task.css file for styling
import './task.css';

// Define the TaskItem component that receives task, onDelete, and onEdit props
const TaskItem = ({ task, onDelete, onEdit }) => {
  // Return a div containing the task information and buttons to edit and delete the task
  return (
    <div>
      {/* Display the task title */}
      <h3>{task.title}</h3>
      {/* Display the task description */}
      <p>{task.description}</p>
      {/* Render an edit button that calls the onEdit function when clicked */}
      <button className="button-31" onClick={onEdit}>Editar</button>
      {/* Render a delete button that calls the onDelete function when clicked */}
      <button className="button-31" onClick={onDelete}>Eliminar</button>
    </div>
  );
};

// Define the PropTypes for the TaskItem component's props
TaskItem.propTypes = {
  // task prop should be an object with id, title, and description properties
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  // onDelete prop should be a function
  onDelete: PropTypes.func.isRequired,
};

// Export the TaskItem component for use in other files
export default TaskItem;
