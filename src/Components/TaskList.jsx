import PropTypes from 'prop-types';

import TaskItem from './task';

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
    return (
      <div className='cotainer'>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={() => onDeleteTask(task.id)} onEdit={() => onEditTask(task.id)} />
        ))}
      </div>
    );
};
  

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;