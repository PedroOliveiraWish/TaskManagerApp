import { useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }

      const data = await response.json(); // Converte para JSON
      setTasks(data); // Atualiza o estado corretamente
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const createTask = async (task) => {
    console.log(task)

    try {
      const response = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title: task}),
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      const data = await response.json();
      setTasks([...tasks, data]); // Adiciona nova tarefa no estado
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const updateTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      await getTasks(); // Atualiza lista após a tarefa ser alterada
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      await getTasks(); // Atualiza lista após exclusão
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return { tasks, getTasks, createTask, updateTask, deleteTask };
};

export default useTasks;
