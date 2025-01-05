import taskModel from "../models/taskModel.js";

const getAllTasksHandle = async () => {
  try {
    const tasks = await taskModel.getAllTasks();

    return tasks;
  } catch (error) {
    console.error(error);
  }
};

const createTaskHandle = async (task) => {
  console.log('handle')
  console.log(task)
  try {
    const newTask = await taskModel.createTask(task);

    return newTask;
  } catch (error) {
    console.error(error);
  }
};

const updateTaskHandle = async (id) => {
  try {
    const updatedTask = await taskModel.updateTask(id);

    return updatedTask;
  } catch (error) {
    console.error(error);
  }
};

const deleteTaskHandle = async (id) => {
  try {
    const deletedTask = await taskModel.deleteTask(id);

    return deletedTask;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getAllTasksHandle,
  createTaskHandle,
  updateTaskHandle,
  deleteTaskHandle,
};
