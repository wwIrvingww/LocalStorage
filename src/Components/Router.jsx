import TaskComponent from '../Views/TaskComponent';
import AddTaskForm from '../Views/AddTaskForm';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

function TaskRouter({ ruta, setRoute }) {
  // Function to navigate to a new route
  const navigate = (newRoute) => {
    setRoute(newRoute);
  };

  // If the current route is not '/list' or '/add', display a welcome message
  if (ruta !== '/list' && ruta !== '/add') {
    return (
      <div>
        <h1>Bienvenidos</h1>
      </div>
    );
  }

  let routeComponent;

  // Switch statement to render the appropriate component based on the current route
  switch (ruta) {
    case '/list':
      routeComponent = (
        <TaskComponent
          key="task-list"
          task={{
            title: '',
            description: '',
          }}
          navigate={navigate}
        />
      );
      break;
    case '/add':
      routeComponent = (
        <AddTaskForm
          key="add-task"
          onAddTask={(task) => {
            // handle adding a task here
            navigate('/list');
          }}
          navigate={navigate}
        />
      );
      break;
    default:
      break;
  }

  // Render the selected component
  return routeComponent;
}

// Type checking for props
TaskRouter.propTypes = {
  ruta: PropTypes.string.isRequired,
  setRoute: PropTypes.func.isRequired,
};

export default TaskRouter;

