import taskHandle from "../handler/taskHandle.js";

const getAllTasksController = async (req, res) => {
  try {
    const tasks = await taskHandle.getAllTasksHandle();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
    console.error(error);
  }
};

const createTaskController = async (req, res) => {
  const {title} = req.body;
  console.log('controller')
  console.log(title)

  try {
    const newTask = await taskHandle.createTaskHandle(title);

    console.log(newTask)

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
    console.error(error);
  }
};

const updateTaskController = async (req, res) => {
  const taskId = req.params.id;
  const task = req.body;
  try {
    await taskHandle.updateTaskHandle(taskId);
    res.status(200).json({message: "Task updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
    console.error(error);
  }
};

const deleteTaskController = async (req, res) => {
  const taskId = req.params.id;
  try {
    await taskHandle.deleteTaskHandle(taskId);
    res.status(200).json({message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error });
    console.error(error);
  }
};

export default {
  getAllTasksController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
};
