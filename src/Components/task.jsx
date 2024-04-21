
import PropTypes from 'prop-types';
import './task.css';

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button className="button-31" onClick={onEdit}>Editar</button>
      <button className="button-31" onClick={onDelete}>Eliminar</button>
      
      
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskItem;