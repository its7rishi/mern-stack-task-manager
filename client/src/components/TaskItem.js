import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const TaskItem = ({ task, deleteTask, completeTask, getEditTask }) => {
  return (
    <>
      <li
        className={
          task.iscompleted
            ? " w-[92%] md:w-full bg-green-400 text-purple-800 p-3 flex justify-start items-center shadow-lg rounded-md line-through opacity-60"
            : " w-[92%] md:w-full bg-white text-purple-800 p-3 flex justify-start items-center shadow-lg rounded-md"
        }
        key={task._id}
      >
        <input
          type="checkbox"
          className="w-5 h-5 mr-3 rounded-md border border-purple-800 outline-none bg-purple-200 accent-green-700 cursor-pointer"
          onChange={(event) => completeTask(task._id, event)}
          checked={task.iscompleted ? true : false}
        />
        <span className="w-[85%] font-semibold">{task.title}</span>
        <button
          className="text-purple-800 text-xl py-1 rounded mr-6"
          onClick={() => getEditTask(task._id, task.title, task.iscompleted)}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          className=" text-red-800 text-xl py-1 rounded"
          onClick={() => deleteTask(task._id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    </>
  );
};
