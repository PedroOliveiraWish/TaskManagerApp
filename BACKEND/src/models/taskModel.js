import { connection_create } from "../database.js";

const getAllTasks = () => {
    const query = "SELECT * FROM tasks";

    return new Promise((resolve, reject) => {
        connection_create.query(query, (err, results) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }

            resolve(results);
        });
    });
};

const createTask = (task) => {
    const query = "INSERT INTO tasks (title) VALUES (?)";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [task], (err, results) => {
            if (err) {
                console.error(err);
                reject(err);
                return; 
            }

            resolve(results);
        });
    });
};

const updateTask = (id) => {
    const query = "UPDATE tasks SET completed = ? WHERE id = ?";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [true, id], (err, results) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }

            resolve(results);
        });
    });
};

const deleteTask = (id) => {
    const query = "DELETE FROM tasks WHERE id = ?";

    return new Promise((resolve, reject) => {
        connection_create.query(query, [id], (err, results) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }

            resolve(results);
        });
    });
};

export default { getAllTasks, createTask, updateTask, deleteTask };
