import { TextField } from '@mui/material';
import { useState } from 'react';
export default function MyInput(props: { placeholder: string, id: string, setFunction: (count: number) => void, multiline?: boolean, rows?: number }) {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        props.setFunction(Number(event.target.value));
    }

    return (
       <TextField className="w-1/4"
          id={props.id}
          onChange={handleChange}
          placeholder={props.placeholder}
          multiline={props.multiline}
            rows={props.rows}
            type="number"
       />
    );
}
