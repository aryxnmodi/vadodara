import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
    setTaskInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    // Add logout logic (e.g., clear auth state)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      {/* Header */}
      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div>
          <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">
            Profile
          </button>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </div>

      {/* Task Input */}
      <div className="mt-5 w-full max-w-lg bg-white p-4 rounded-lg shadow">
        <div className="flex">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Add a new task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button onClick={addTask} className="ml-2 bg-green-500 text-white px-4 py-2 rounded">
            Add Task
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="mt-5 w-full max-w-lg">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`flex justify-between items-center p-4 bg-white rounded-lg shadow mb-2 ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
                {task.text}
              </span>
              <button key={task.id} onClick={() => deleteTask(task.id)} className="text-red-500">
                ❌
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
