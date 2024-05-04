import { Button } from '@mui/material';

export default function MyButton(props: { children: string, action: () => void}) {
    function handleChange() {
        props.action();
    }

    return (
        <Button variant='contained' onClick={handleChange} >{props.children}</Button>
    );
}