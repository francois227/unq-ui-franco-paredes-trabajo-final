import Timer from "../Timer/Timer";
import Score from "../Score/Score";
import WordInput from "../WordInput/WordInput";
import WordChain from "../WordChain/WordChain";
import styles from "./Game.module.css";

const Game = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Palabras Encadenadas</h1>
      <section className={styles.header}>
        <Timer />
        <Score />
      </section>
      <WordInput />
      <WordChain />
    </main>
  );
}

export default Game;