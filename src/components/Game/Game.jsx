import Timer from "../Timer/Timer";
import Score from "../Score/Score";
import WordInput from "../WordInput/WordInput";
import WordChain from "../WordChain/WordChain";
import styles from "./Game.module.css";
import { useState } from "react";
import { validateWord } from "../../services/wordService";

const Game = () => {
    const [input, setInput] = useState("");

    const handleSubmit = async () => {
      try {
        const result = await validateWord(input);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
};

    return (
    <main className={styles.container}>
      <h1 className={styles.title}>Palabras Encadenadas</h1>
      <section className={styles.header}>
        <Timer />
        <Score />
      </section>
      <WordInput value={input} onChange={setInput} onSubmit={handleSubmit} />
      <WordChain />
    </main>
  );
}

export default Game;