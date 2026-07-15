import { getLeaderboard } from "../../utils/leaderboard";
import styles from "./Leaderboard.module.css";

const Leaderboard = () => {
    const leaderboard = getLeaderboard();
    const rows = Array.from({ length: 10 }, (_, index) => leaderboard[index] ?? null);

    const getPosition = (index) => {
        switch (index) {
            case 0:
                return "🥇";
            case 1:
                return "🥈";
            case 2:
                return "🥉";
            default:
                return `${index + 1}°`;
        }
    };

    return (
        <section className={styles.container}>
            <h2>Top 10</h2>

            <ol>
                {rows.map((score, index) => (
                    <li key={index} className={score === null ? styles.empty : undefined}>
                        <span>{getPosition(index)}</span>
                        <span>{score !== null ? `${score} puntos` : "—"}</span>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default Leaderboard;