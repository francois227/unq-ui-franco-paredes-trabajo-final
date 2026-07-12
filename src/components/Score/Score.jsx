import styles from "./Score.module.css";

const Score = () => {
  return (
    <div className={styles.score}>
      <span>🏆 Puntaje</span>
      <strong>0</strong>
    </div>
  );
};

export default Score;