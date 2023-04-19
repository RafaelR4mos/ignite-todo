import styles from "./TaskItem.module.css";
import { Trash } from "@phosphor-icons/react";

interface ItaskItemProps {
    title: string;
    isComplete: boolean;
    onCheckTask: () => void;
    onDeleteTask: () => void;
}

export const TaskItem: React.FC<ItaskItemProps> = ({
    title,
    isComplete,
    onCheckTask,
    onDeleteTask,
}) => {
    return (
        <div className={styles.taskItemContainer}>
            <input type="checkbox" checked={isComplete} onClick={onCheckTask} />
            <p className={isComplete ? styles.taskChecked : ""}>{title}</p>
            <button onClick={onDeleteTask}>
                <Trash fontSize={20} alt="Botão deletar" />
            </button>
        </div>
    );
};
