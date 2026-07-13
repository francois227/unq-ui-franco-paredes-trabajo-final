import Timer from "../Timer/Timer";
import Score from "../Score/Score";
import WordInput from "../WordInput/WordInput";
import WordChain from "../WordChain/WordChain";
import styles from "./Game.module.css";
import { useState } from "react";
import { validateWord } from "../../services/wordService";
import { followsChainRule, isWordRepeated } from "../../utils/validation";

const Game = () => {
  const [input, setInput] = useState("");
  const [words, setWords] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const word = input.trim().toLowerCase();

    if (!word) {
      return;
    }

    try {
      const result = await validateWord(word);

      if (!result.exists) {
        setError("La palabra no existe.");
        return;
      }

      if (isWordRepeated(words, word)) {
        setError("La palabra ya fue utilizada.");
        return;
      }

      if (!followsChainRule(words, word)) {
        setError("La palabra no respeta la regla de la cadena.");
        return;
      }

      setWords((previousWords) => [...previousWords, word]);
      setInput("");
      setError("");
    } catch (error) {
      setError(error);
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
      {error && <p className={styles.error}>{error}</p>}
      <WordChain words={words} />
    </main>
  );
}

export default Game;