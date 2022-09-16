import React from "react";

export const AddTask = ({ text, handleChange, addTask }) => {
  return (
    <div className="w-full flex justify-center">
      <form
        className="w-[90%] md:w-1/2 bg-white p-3 rounded-md flex justify-between"
        onSubmit={addTask}
      >
        <input
          value={text}
          type="text"
          name="title"
          placeholder="Enter a task..."
          className="border border-purple-400 rounded mr-2 p-2 w-3/4 md:w-10/12  text-purple-800 placeholder:text-purple-800 outline-none active:outline-none active:border-purple-600"
          onChange={(e) => handleChange(e)}
          required
        />
        <button
          type="submit"
          className=" bg-purple-800 text-white text-center py-2 px-4 rounded cursor-pointer w-1/4"
        >
          Add
        </button>
      </form>
    </div>
  );
};
