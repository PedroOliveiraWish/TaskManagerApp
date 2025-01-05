import React, { useState } from "react";
import useTasks from "../hooks/taskHooks";

import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

import '../styles/form.css'

const FormTask = () => {
  const [titleTask, setTitleTask] = useState('');

  const { createTask } = useTasks();

  return (
    <Container className="form-container">
      <form className="form-task" onSubmit={() => createTask(titleTask)}>
        <Stack className="task-stack" direction="horizontal" gap={3}>
          <label>Insert title:</label>
          <input
            type="text"
            value={titleTask}
            onChange={(e) => setTitleTask(e.target.value)}
          />
          <input type="submit" value="Create Task"/>
        </Stack>
      </form>
    </Container>
  );
};

export default FormTask;