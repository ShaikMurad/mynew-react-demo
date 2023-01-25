import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
    const [color, setColor] = useState("crimson");

    const styles = {
        background: color,
    };
    const [colorList, setcolorList] = useState(["skyblue", "yellow", "green"]);
    return (
        <div>
            <input
                style={styles}
                type="text"
                onChange={(event) => setColor(event.target.value)}
                value={color} />
            <button onClick={() => setcolorList([...colorList, color])}>Add Color</button>
            {colorList.map((clr) => <ColorBox color={clr} />
            )}
        </div>
    );

}
