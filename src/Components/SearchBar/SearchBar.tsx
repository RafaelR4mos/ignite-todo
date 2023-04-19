import { useState } from "react";
import styles from "./SearchBar.module.css";
import { Plus } from "@phosphor-icons/react";

interface searchBarProps {
    onSubmitTask: (taskTitleValue: string) => void;
}

export const SearchBar: React.FC<searchBarProps> = ({ onSubmitTask }) => {
    const [taskTitle, setTaskTitle] = useState("");

    return (
        <form
            className={styles.searchBarContainer}
            onSubmit={(e) => {
                console.log(e);
                e.preventDefault();
                setTaskTitle("");
                onSubmitTask(taskTitle);
            }}
        >
            <div className={styles.searchBar}>
                <input
                    type="text"
                    required
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    placeholder="Adicione uma nova tarefa"
                />
            </div>
            <button type="submit">
                Criar
                <Plus size={16} fontWeight={700} />
            </button>
        </form>
    );
};
