import React, { useEffect } from "react";
import useTasks from "../hooks/taskHooks";

import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

import '../styles/style.css'

const TaskList = () => {
  const { tasks, getTasks, deleteTask, updateTask } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);


  if (!tasks || tasks.length === 0) {
    return <p className="empty-state">No tasks available</p>;
  }

  const tasksUncompleted = () => {
    const uncompletedTasks = tasks.filter((task) => !task.completed);

    if (uncompletedTasks.length === 0) {
      return <p className="empty-state">No uncompleted tasks</p>;
    }

    return (
      <ul className="task-list">
        {uncompletedTasks.map((task) => (
          <li key={task.id} className="uncompleted">
            {task.title}
            <Button className="task-button update" onClick={() => updateTask(task.id)}>
              {task.completed === 0
                ? "Mark as completed"
                : "Mark as uncompleted"}
            </Button>
            <Button className="task-button delete" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    );
  };

  const tasksCompleted = () => {
    const completedTasks = tasks.filter((task) => task.completed);

    return (
      <ul className="task-list">
        {completedTasks.map((task) => (
          <li key={task.id} className="completed">
            {task.title}
            <Button className="task-button delete" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Container className="task-container">
      <Card className="task-card">
        <Card.Header className="task-card-header">Task List uncompleted</Card.Header>
        <Card.Body>
          <Stack direction="vertical" gap={3}>
            {tasksUncompleted()}
          </Stack>
        </Card.Body>
      </Card>
      <Card className="task-card">
        <Card.Header className="task-card-header"> Task List completed</Card.Header>
        <Card.Body>
          <Stack direction="vertical" gap={3}>
            {tasksCompleted()}
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TaskList;
