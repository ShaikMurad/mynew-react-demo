import { useState } from "react";

export function Counter() {
    // let Like = 10;
    const [Like, setLike] = useState(0);
    const [disLike, setdisLike] = useState(0);
    return (
        <div>
            <p>
                <button onClick={() => setLike(Like + 1)}>👍{Like}</button>
                <button onClick={() => setdisLike(disLike + 1)}>👎{disLike}</button>
            </p>

        </div>
    );
}
