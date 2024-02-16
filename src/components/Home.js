import React, { useState } from "react";
import { FiTrash2, FiCheckCircle } from "react-icons/fi";

function Home() {
  // task state
  const [tasks, setTasks] = useState([]);

  // user input task
  const [inputTask, setInputTask] = useState("");

  // add new task
  const addNewtask = (title) => {
    if (title !== "") {
      //last id
      const lastId = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id;
      const newTask = { id: lastId + 1, title: title };
      setTasks([...tasks, newTask]);
      setInputTask("");
    }
  };

  // remove a task
  const removeTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id !== id);
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold py-5">Task Master</h1>
      <p className="text-sm font-thin px-16">
        Task Master is an easy-to-use task manager app that helps you stay
        organized and productive. With a simple and intuitive interface, you can
        deadlines, and track your progress.
      </p>

      {/* Add a section that user can add own task */}
      <section className="flex flex-col items-center justify-center mt-3">
        <input
          type="text"
          placeholder="add new task"
          className="border-2 border-blue-400 p-2 m-2 w-80 rounded-md "
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button
          onClick={() => addNewtask(inputTask)}
          className="bg-blue-400 p-2 m-2 w-60 rounded-md"
        >
          {" "}
          Add new task +
        </button>
      </section>

      {/* Show all tasks */}
      <section className="p-5 border-t-4 m-5">
        {tasks &&
          tasks.map((task) => {
            return (
              <div
                key={task.id}
                className="flex flex-row items-center justify-center gap-4"
              >
                <p
                  className={
                    task.completed
                      ? "bg-green-200 p-2 m-2 rounded-md"
                      : "bg-blue-200 p-2 m-2 rounded-md"
                  }
                >
                  {task.completed ? task.title + "(completed!)" : task.title}
                </p>
                <div
                  onClick={() => removeTask(task.id)}
                  className="p-3 bg-red-200 rounded-lg cursor-pointer"
                >
                  <FiTrash2 />
                </div>
                <div
                  onClick={() => {
                    setTasks(
                      tasks.map((item) => {
                        if (item.id === task.id) {
                          return { ...item, completed: true };
                        }
                        return item;
                      })
                    );
                  }}
                  className="p-3 bg-green-200 rounded-lg cursor-pointer"
                >
                  <FiCheckCircle />
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default Home;
