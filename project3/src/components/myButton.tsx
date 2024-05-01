import { Button } from "@mui/material";

export default function MyButton(props: { onClick: () => void, children: string }) {
    function handleClick() {
        console.log("Button clicked");
        props.onClick();
    }

    return (
        <Button onClick={handleClick}>{props.children}</Button>
    )
}