import { useEffect, useState } from "react";

const useCountdown = (initialTime, onFinish) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) {
            return;
        }

        if (timeLeft === 0) {
            setIsRunning(false);
            onFinish();
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft((previousTime) => previousTime - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft, isRunning, onFinish]);

    const start = () => {
        setIsRunning(true);
    };

    const reset = () => {
        setTimeLeft(initialTime);
        setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
    };

    const restart = () => {
        setTimeLeft(initialTime);
        setIsRunning(false);
    };

    return { timeLeft, start, reset, stop, restart };
};

export default useCountdown;