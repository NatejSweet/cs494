import React from 'react'; // Add the missing import statement

import { Button } from "@mui/material";

export default function MyResetButton(props: { setFilterGenre: Function, setFilterScore: Function}) {
    const handleClick = () => {
        props.setFilterGenre(' ');
        props.setFilterScore(' ');
    }
    return (
        <Button onClick={handleClick}>Reset</Button>
    )
}