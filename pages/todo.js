import { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addTask = (task) => {
    if (task.trim() !== "") {
      setTasks([...tasks, { name: task, completed: false }]);
    }
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen">
      <h1 className="text-center font-sans font-semibold text-4xl text-white pt-16">Add Your Task</h1>

      <div className="w-1/2 h-80vh mt-7 mx-auto p-4 rounded-lg bg-sky-50">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-indigo-400 absolute mt-2 mr-2 end-0 cursor-text"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <input
            type="text"
            placeholder="Enter a task"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask(e.target.value);
                e.target.value = "";
              }
            }}
            className="border border-gray-300 p-2 mb-2 w-full rounded-lg focus:outline-none"
          />
        </div>

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute mt-2 mr-2 end-0 stroke-indigo-400 cursor-text"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search tasks"
            value={searchQuery}
            onChange={handleSearch}
            className="border border-gray-300 rounded-lg p-2 mb-2 w-full focus:outline-none"
          />
        </div>

        <ul>
          {filteredTasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between border border-gray-300 rounded-lg p-2 mb-2 ${
                task.completed ? "text-gray-500" : ""
              }`}
            >
              <span>{task.name}</span>
              <div>
                <button
                  onClick={() => completeTask(index)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded"
                >
                  Complete
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
