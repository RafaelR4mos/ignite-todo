import styles from "./taskItem.module.css";
import { TrashSimple } from "@phosphor-icons/react";

export const TaskItem: React.FC = () => {
    return (
        <div className={styles.taskItemContainer}>
            <input type="checkbox" />
            <p>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
            </p>
            <button>
                <TrashSimple />
            </button>
        </div>
    );
};
