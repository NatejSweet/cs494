import { TextField } from "@mui/material";


export default function MyInput(props: { label: string, value: string, onChange: (value: string) => void }) {
    return (
        <TextField
            label={props.label}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        />
    )
}