import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export function Counter() {
    // let Like = 10;
    const [Like, setLike] = useState(0);
    const [disLike, setdisLike] = useState(0);
    return (
        <div>
            <IconButton
                onClick={() => setLike(Like + 1)}
                aria-label="like movie"
                color="primary"
            >
                <Badge badgeContent={Like} color="primary">
                    👍
                </Badge>
            </IconButton>

            <IconButton
                onClick={() => setdisLike(disLike + 1)}
                aria-label="dislike movie"
                color="error"
            >
                <Badge badgeContent={disLike} color="error">
                    👎
                </Badge>

            </IconButton>


        </div>
    );
}
