import { Header } from "./Components/Header/Header";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import "./App.css";
import "./global.css";
import { Tasks } from "./Components/Tasks/Tasks";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
export interface ITasks {
    id: string;
    title: string;
    isComplete: boolean;
}

function App() {
    const [tasks, setTasks] = useState<ITasks[]>([
        { id: uuidv4(), title: "lavar a louça", isComplete: true },
        { id: uuidv4(), title: "arrumar o quarto", isComplete: false },
        { id: uuidv4(), title: "estudar BD", isComplete: true },
    ]);

    const handleAddNewTask = (taskTitle: string) => {
        taskTitle.length > 3
            ? setTasks([
                  ...tasks,
                  {
                      id: uuidv4(),
                      title: taskTitle,
                      isComplete: false,
                  },
              ])
            : alert("Por favor, forneça no mínimo 3 caracteres");
    };

    const handleCheckTask = (id: string) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        isComplete: !task.isComplete,
                    };
                } else {
                    return task;
                }
            })
        );
    };

    const handleDeleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <>
            <Header />
            <div className="app">
                <div className="searchBar">
                    <SearchBar
                        onSubmitTask={(taskTitleValue) =>
                            handleAddNewTask(taskTitleValue)
                        }
                    />
                </div>
                <div className="tasks">
                    <Tasks
                        tasksContent={tasks}
                        handleCheckTask={(id) => handleCheckTask(id)}
                        handleDeleteTask={(id) => handleDeleteTask(id)}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
