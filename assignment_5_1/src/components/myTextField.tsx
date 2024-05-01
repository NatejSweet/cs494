import { TextField } from '@mui/material';
import { useState } from 'react';
export default function MyInput(props: { placeholder: string, id: string, setFunction: (name: string) => void, multiline?: boolean, rows?: number }) {
    const [input, setInput] = useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
        props.setFunction(event.target.value);
    }

    return (
       <TextField className="w-full"
          id={props.id}
          onChange={handleChange}
          placeholder={props.placeholder}
          multiline={props.multiline}
          rows={props.rows}
       />
    );
}
