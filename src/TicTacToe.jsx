export function TicTacToe() {
    return (
        <div>
            <h1>TicTacToe Game</h1>
            <GameBox />
        </div>
    );
}
// X -> Green ! O -> red
function GameBox() {
    const val = 'X';

    const styles = {
        color: val == "X" ? 'green' : 'red',
    }
    return <div style={styles} className="game-box">{val}</div>
}