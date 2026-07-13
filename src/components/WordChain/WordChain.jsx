import styles from "./WordChain.module.css";

const WordChain = ({ words }) => {
  return (
    <section className={styles.chain}>
      <h2>Cadena de palabras</h2>

      {words.length === 0 ? (
        <p>Todavía no hay palabras.</p>
      ) : (
        <ul className={styles.list}>
          {words.map((word) => (
            <li key={word} className={styles.item}>
              {word}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default WordChain;