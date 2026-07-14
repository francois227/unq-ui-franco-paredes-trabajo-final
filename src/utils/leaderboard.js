const STORAGE_KEY = "leaderboard";

export const getLeaderboard = () => {
  const leaderboard = localStorage.getItem(STORAGE_KEY);
  return leaderboard ? JSON.parse(leaderboard) : [];
};

export const saveScore = (score) => {
  const leaderboard = getLeaderboard();
  leaderboard.push(score);
  leaderboard.sort((a, b) => b - a);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leaderboard.slice(0, 10)));
};