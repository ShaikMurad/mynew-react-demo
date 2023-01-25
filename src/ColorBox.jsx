
export function ColorBox({ color }) {
    const styles = {
        width: '250px',
        height: '25px',
        margin: '5px 0px',
        background: color,
    };
    return <div style={styles}></div>;
}
