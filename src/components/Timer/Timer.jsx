import styles from "./Timer.module.css";

const Timer = () => {
  return (
    <div className={styles.timer}>
      <span>⏱️ Tiempo</span>
      <strong>15</strong>
    </div>
  );
};

export default Timer;