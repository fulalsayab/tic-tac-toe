//EndGame component
const EndGame = ({ newGame, player, draw, X_PLAYER, O_PLAYER }) => {
  return (
    <div className="end-game-screen">
      {!draw && (
        <span className="win-text">{player ? O_PLAYER : X_PLAYER} Win!</span>
      )}
      {draw && <span className="win-text">Draw</span>}
      <button className="btn" onClick={newGame}>
        {" "}
        New Game{" "}
      </button>
    </div>
  );
};
export default EndGame;
