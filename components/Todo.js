import { useState, useEffect, useRef } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const inputRef = useRef(null);
  const inputRefs = useRef(null);
  const handleIconTick = () => {
    inputRef.current.focus();
  };

  const handleIconDelete = () => {
    inputRefs.current.focus();
  }

  useEffect(() => {
    function handleWindowResize() {
      setIsSmallScreen(window.innerWidth <= 693);
    }

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen scrollbar-hide">
      <h1 className="text-center font-sans font-semibold text-4xl text-white pt-16">
        Add Your Task
      </h1>

      <div className="w-1/2 h-80vh mt-7 mx-auto p-4 rounded-lg bg-sky-50 shadow-xl">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-indigo-400 absolute mt-2 mr-2 end-0 cursor-text"
            onClick={handleIconTick}
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
            ref={inputRef}
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
            onClick={handleIconDelete}
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
            ref={inputRefs}
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
              <div className="flex flex-wrap">
                <button
                  onClick={() => completeTask(index)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded"
                >
                  {isSmallScreen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    "Complete"
                  )}
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  {isSmallScreen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  ) : (
                    "Delete"
                  )}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
