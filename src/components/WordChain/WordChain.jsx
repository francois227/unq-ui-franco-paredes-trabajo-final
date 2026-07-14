import styles from "./WordChain.module.css";

const WordChain = ({ words }) => {
  return (
    <section className={styles.chain}>
      <h2>Cadena de palabras</h2>

      {words.length === 0 ? (
        <p>Todavía no hay palabras.</p>
      ) : (
        <div className={styles.list}>
          {words.map((word, index) => (
            <div key={word} className={styles.item}>
              <div className={styles.word}>
                {word}
              </div>

              {index < words.length - 1 && (
                <div className={styles.connector} />
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default WordChain;