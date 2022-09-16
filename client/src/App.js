import { useEffect, useState } from "react";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState();
  const [text, setText] = useState("");

  // FETCH TASKS FROM DB

  const fetchTasks = () => {
    axios
      .get("http://localhost:8080/api/v1/tasks")
      .then((response) => setTasks(response.data.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {
    let typedTxt = e.target.value;
    setText(typedTxt);
  };

  //ADD TASK

  const addTask = (e) => {
    e.preventDefault();
    const data = {
      title: text,
      iscompleted: false,
    };
    if (text) {
      axios
        .post("http://localhost:8080/api/v1/tasks", data)
        .then((response) => console.log(response.data))
        .catch((err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Task Added");
          }
        });
    }
    setText("");
    fetchTasks();
  };

  // COMPLETE TASK
  const completeTask = (id, event) => {
    let data;
    if (event.target.checked) {
      data = {
        iscompleted: true,
      };
      event.target.parentNode.classList.add("line-through");
    } else {
      data = {
        iscompleted: false,
      };
      event.target.parentNode.classList.remove("line-through");
    }
    axios
      .put(`http://localhost:8080/api/v1/tasks/${id}`, data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  // UPDATE TASK
  const updateTask = (id, text, iscompleted) => {
    let data = {
      title: text,
      iscompleted: iscompleted,
    };

    axios
      .put(`http://localhost:8080/api/v1/tasks/${id}`, data)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  // DELETE TASK

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:8080/api/v1/tasks/${id}`)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTasks();
  }, [deleteTask, completeTask]);

  return (
    <div className="App h-screen w-screen bg-purple-800 flex flex-col justify-start items-center">
      <h1 className="text-white mt-2 font-semibold text-3xl mb-8">
        Task Manager
      </h1>

      <AddTask addTask={addTask} text={text} handleChange={handleChange} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
        updateTask={updateTask}
      />
      <footer className=" absolute position-fixed bottom-3 mx-auto">
        <h3 className="text-white text-xl text-center">
          Created by Saptarshi Majumdar &copy;
        </h3>
      </footer>
    </div>
  );
}

export default App;
// npm run start
