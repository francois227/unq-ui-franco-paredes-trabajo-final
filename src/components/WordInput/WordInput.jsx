import styles from "./WordInput.module.css";

const WordInput = ({ value, onChange, onSubmit, disabled }) => {
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
        disabled={disabled}
      />

      <button type="submit" disabled={disabled}>
        Enviar
      </button>
    </form>
  );
};

export default WordInput;