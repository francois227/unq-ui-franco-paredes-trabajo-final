import styles from "./Score.module.css";

const Score = ({ score }) => {
  return (
    <div className={styles.score}>
      <span>🏆 Puntaje</span>
      <strong>{score}</strong>
    </div>
  );
};

export default Score;