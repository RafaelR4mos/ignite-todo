import { TaskItem } from "../TaskItem/TaskItem";

import styles from "./Tasks.module.css";
import { ClipboardText } from "@phosphor-icons/react";
import { ITasks } from "../../App";

interface ITasksProps {
    tasksContent: ITasks[];
    handleCheckTask: (id: string) => void;
    handleDeleteTask: (id: string) => void;
}

export const Tasks: React.FC<ITasksProps> = ({
    tasksContent,
    handleCheckTask,
    handleDeleteTask,
}) => {
    return (
        <div className={styles.tasksContainer}>
            <div
                className={
                    tasksContent.length > 0
                        ? styles.tasksHeader
                        : `${styles.tasksHeader} ${styles.noContent}`
                }
            >
                <div className={styles.createdTasks}>
                    <h2>
                        Tarefas criadas <span>{tasksContent.length}</span>
                    </h2>
                </div>
                <div className={styles.completedTasks}>
                    <h2>
                        Concluídas
                        <span>
                            {
                                tasksContent.filter(
                                    (task) => task.isComplete === true
                                ).length
                            }
                        </span>
                    </h2>
                </div>
            </div>
            <div className={styles.tasksBody}>
                {tasksContent.length > 0 ? (
                    <>
                        {tasksContent.map((task) => (
                            <TaskItem
                                key={task.id}
                                title={task.title}
                                isComplete={task.isComplete}
                                onCheckTask={() => handleCheckTask(task.id)}
                                onDeleteTask={() => handleDeleteTask(task.id)}
                            />
                        ))}
                    </>
                ) : (
                    <div className={styles.tasksBodyEmpty}>
                        <ClipboardText
                            fontWeight="thin"
                            fontSize={56}
                            opacity={0.2}
                        />

                        <div>
                            <h2>Você ainda não tem tarefas cadastradas</h2>
                            <h3>Crie e organize seus itens a fazer</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
