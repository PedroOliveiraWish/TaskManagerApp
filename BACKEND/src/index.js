import express from "express";
import cors from "cors";

import taskRouter from "../src/routes/taskRoutes.js";
import { connection_database } from "./database.js";

connection_database()

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRouter);

app.listen(port, () => {
  console.log(" Server is running on port", port);
});
