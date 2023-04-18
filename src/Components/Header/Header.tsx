import styles from "./Header.module.css";
import rocketIcon from "../../assets/rocket.svg";

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.pageTitle}>
        <img src={rocketIcon} alt="ícone de foguete em decolagem" />
        <h1>
          <span>to</span>
          <span>do</span>
        </h1>
      </div>
    </header>
  );
};
