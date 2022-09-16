import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ open, onClose, task, updateTask }) => {
  const [text, setText] = useState(task.title);
  const [iscompleted, setIsCompleted] = useState(task.iscompleted);

  const updateDetails = () => {
    updateTask(task.id, text, iscompleted);
    onClose();
  };
  return (
    <div className="fixed w-screen h-screen bg-gray-300 inset-0 opacity-80 z-50">
      <div className="w-3/4 md:w-4/12 h-64 p-4 bg-white opacity-100 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 flex flex-col items-center space-y-4 rounded-md border-4 border-purple-800">
        <button
          className="text-2xl text-red-600 absolute top-2 right-2"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2 className="text-purple-800 text-md text-center mt-2">
          Task ID: {task.id}
        </h2>
        <input
          type="text"
          value={text}
          className="border border-purple-500 active:outeline-none active:border-purple-800 rounded-md p-3 w-3/4"
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-start items-center w-3/4 space-x-4">
          <span className="text-purple-800 text-xl">Is Completed? </span>
          <input
            type="checkbox"
            checked={iscompleted ? true : false}
            className="w-5 h-5 mr-3 rounded-md border border-purple-800 outline-none bg-purple-200 accent-green-700 cursor-pointer"
            onChange={() =>
              iscompleted ? setIsCompleted(false) : setIsCompleted(true)
            }
          />
        </div>
        <div className="flex justify-end items-center w-full mb-2">
          <button
            className="ml-2 bg-purple-800 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="ml-2 bg-purple-800 text-white px-4 py-2 rounded-md"
            type="button"
            onClick={updateDetails}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
