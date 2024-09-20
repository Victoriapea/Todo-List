import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Task = mongoose.model("Task", TaskSchema);

mongoose
  .connect("mongodb://localhost:27017/todo-list")
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.error("Erreur de connexion à MongoDB:", err));

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.status(201).json(newTask);
});

app.delete("/tasks/:id", async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).send("Tâche non trouvée");
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
