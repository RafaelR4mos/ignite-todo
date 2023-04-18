import styles from "./SearchBar.module.css";
import { Plus } from "@phosphor-icons/react";

export const SearchBar: React.FC = () => {
    return (
        <form className={styles.searchBarContainer}>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Adicione uma nova tarefa" />
            </div>
            <button type="submit">
                Criar
                <Plus size={16} fontWeight={700} />
            </button>
        </form>
    );
};
