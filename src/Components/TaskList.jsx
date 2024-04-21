// Import PropTypes library for typechecking the component's props
import PropTypes from 'prop-types';

// Import TaskItem component to render individual tasks
import TaskItem from './task';

/*
TaskList component receives an array of tasks and two functions to handle
task deletion and edition. It maps through the tasks array and renders
a TaskItem component for each task.
*/
const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
    return (
      <div>
        {/* Map through the tasks array and render a TaskItem component for each task */}
        {tasks.map(task => (
          <TaskItem
            key={task.id} // Assign a unique key to each TaskItem component
            task={task} // Pass the task object as a prop
            onDelete={() => onDeleteTask(task.id)} // Pass the onDeleteTask function as a prop, pre-bound to the task's id
            onEdit={() => onEditTask(task.id)} // Pass the onEditTask function as a prop, pre-bound to the task's id
          />
        ))}
      </div>
    );
};

/*
Define the expected prop types for the TaskList component.
tasks: An array of task objects with required id, title, and description properties.
onDeleteTask: A required function to handle task deletion.
*/
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

// Export the TaskList component for use in other modules
export default TaskList;
