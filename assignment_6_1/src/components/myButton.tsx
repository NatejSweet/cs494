import { Button } from '@mui/material';

export default function MyButton(props: { children: string, action: (name: string) => void}) {
    function handleChange(e: React.MouseEvent<HTMLButtonElement>) {
        props.action(e.currentTarget.innerText);
    }

    return (
        <Button variant='contained' onClick={handleChange} >{props.children}</Button>
    );
}