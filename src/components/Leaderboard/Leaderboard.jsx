import { getLeaderboard } from "../../utils/leaderboard";
import styles from "./Leaderboard.module.css";

const Leaderboard = () => {
    const leaderboard = getLeaderboard();

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

            {leaderboard.length === 0 ? (
                <p>No hay partidas registradas.</p>
            ) : (
                <ol>
                    {leaderboard.map((score, index) => (
                        <li key={index}>
                            <span>{getPosition(index)}</span>

                            <span>{score} puntos</span>
                        </li>
                    ))}
                </ol>
            )}
        </section>
    );
};

export default Leaderboard;