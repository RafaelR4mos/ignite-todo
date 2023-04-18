import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./Tasks.module.css";

export const Tasks: React.FC = () => {
    return (
        <div className={styles.tasksContainer}>
            <div className={styles.tasksHeader}>
                <div className={styles.createdTasks}>
                    <h2>
                        Tarefas criadas <span>0</span>
                    </h2>
                </div>
                <div className={styles.completedTasks}>
                    <h2>
                        Concluídas<span>0</span>
                    </h2>
                </div>
            </div>
            <div className={styles.tasksBody}>
                <TaskItem />
            </div>
        </div>
    );
};
