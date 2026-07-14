import styles from "./WordChain.module.css";

const WordChain = ({ words }) => {
  const rows = [];

  for (let i = 0; i < words.length; i += 3) {
    rows.push(words.slice(i, i + 3));
  }

  return (
    <div className={styles.chain}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex}>
          <div className={styles.row}>
            {row.map((word, index) => (
              <span key={word}>
                {word}
                {index < row.length - 1 && " → "}
              </span>
            ))}
          </div>

          {rowIndex < rows.length - 1 && (
            <div className={styles.connector}>↓</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WordChain;