import styles from "./WordInput.module.css";

const WordInput = () => {
  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Ingresá una palabra..."
        autoComplete="off"
      />

      <button type="submit">
        Enviar
      </button>
    </form>
  );
};

export default WordInput;