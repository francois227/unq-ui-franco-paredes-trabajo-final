import styles from "./GameOverModal.module.css";

const GameOverModal = ({
    score,
    totalWords,
    onRestart,
}) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Fin de la partida</h2>

                <p>
                    Palabras encadenadas:
                    <strong> {totalWords}</strong>
                </p>

                <p>
                    Puntaje final:
                    <strong> {score}</strong>
                </p>

                <button onClick={onRestart}>
                    Jugar nuevamente
                </button>
            </div>
        </div>
    );
};

export default GameOverModal;