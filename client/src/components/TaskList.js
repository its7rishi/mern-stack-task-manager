import React, { useState } from "react";
import { TaskItem } from "./TaskItem";
import Modal from "./Modal";

export const TaskList = ({ tasks, deleteTask, completeTask, updateTask }) => {
  const [openModal, setOpenModal] = useState(false);
  const [editTask, setEditTask] = useState({});

  const getEditTask = (id, title, iscompleted) => {
    setEditTask({
      id: id,
      title: title,
      iscompleted: iscompleted,
    });
    setOpenModal(true);
  };

  if (!tasks) {
    return (
      <div className="w-full md:w-1/2 p-3 mt-6">
        <h2 className="text-white text-3xl text-center">Loading...</h2>
      </div>
    );
  } else {
    return (
      <div className="w-full md:w-1/2 p-3 mt-6 rounded-md">
        <ul className="flex flex-col items-center justify-start space-y-3 md:space-y-5">
          {tasks.map((task) => {
            return (
              <TaskItem
                task={task}
                deleteTask={deleteTask}
                completeTask={completeTask}
                getEditTask={getEditTask}
              />
            );
          })}
        </ul>
        {openModal && (
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            task={editTask}
            updateTask={updateTask}
          />
        )}
      </div>
    );
  }
};
