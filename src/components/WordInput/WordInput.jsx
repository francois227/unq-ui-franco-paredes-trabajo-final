import styles from "./WordInput.module.css";

const WordInput = ({ value, onChange, onSubmit }) => {
    const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
};
return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
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