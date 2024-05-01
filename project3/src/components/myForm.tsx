import { FormControl, Rating } from "@mui/material";
import MyInput from "./myInput";
import MyButton from "./myButton";
import { useState } from 'react';

export default function MyForm(props: { onSubmit: (task: string, urgency: number) => void }) {

    const [task, setTask] = useState<string>('');
    const [urgency, setUrgency] = useState<number>(0);

    function handleClick() {
            props.onSubmit(task, urgency);
            console.log(task, urgency)
            setTask('');
            setUrgency(0);
    }
    return (
        <FormControl>
            <MyInput label="Task" value={task} onChange={setTask} />
            <Rating  value={urgency} onChange={(e) => setUrgency(e.target.value)} />
            <MyButton onClick={handleClick}>Add Task</MyButton>
        </FormControl>
    )
}