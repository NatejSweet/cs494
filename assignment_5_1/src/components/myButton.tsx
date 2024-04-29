import { Button } from '@mui/material';
import { useState } from 'react';

export default function MyButton(props: { children: string, action: (action: boolean) => void}) {
    const [buttonState, setButtonState] = useState(false);

    function handleChange() {
        let tmpButtonState = !buttonState;
        setButtonState(tmpButtonState);
        props.action(tmpButtonState);
    }

    return (
        <Button variant='contained' onClick={handleChange} >{props.children}</Button>
    );
}