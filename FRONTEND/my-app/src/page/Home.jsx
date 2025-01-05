import React from "react";
import TaskList from "../component/taskList";
import TaskForm from "../component/FormTask";

import Container from "react-bootstrap/esm/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <Container>
            <TaskForm />
            <TaskList />
        </Container>
    )
}

export default Home;