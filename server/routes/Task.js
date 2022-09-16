const router = require("express").Router();
const Task = require("../model/TaskSchema");

// GET Tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({
    success: true,
    data: tasks,
  });
});

//CREATE Task
router.post("/", async (req, res) => {
  const { title, iscompleted } = req.body;
  const newTask = await Task.create({ title, iscompleted });
  res.status(200).json({
    success: true,
    data: newTask,
  });
});

// UPDATE Task
router.put("/:id", async (req, res) => {
  let task = await Task.findById(req.params.id);
  task = await Task.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true, runValidators: false }
  );
  res.status(200).json({
    success: true,
    data: task,
  });
});

// DELETE Task
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    data: "Task deleted",
  });
});

module.exports = router;
