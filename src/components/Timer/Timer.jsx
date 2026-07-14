import styles from "./Timer.module.css";

const Timer = ({ timeLeft }) => {
  return (
    <div className={styles.timer}>
      <span>Tiempo</span>
      <strong>{timeLeft}</strong>
    </div>
  );
};

export default Timer;