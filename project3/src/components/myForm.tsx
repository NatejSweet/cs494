'use client';
import { FormControl, Rating } from '@mui/material';
import MyTextField from './myTextField';
import MySelect from './mySelect';
import MyButton from './myButton';
import {useEffect, useState} from 'react';


export default function MyForm(props: {onSubmit: (entries: {task: string, urgency: number}) => void}) {
    // const [submitForm, setSubmitForm] = useState(false);
    const [task, setTask] = useState('');
    const [urgency, setUrgency] = useState(0);


    function submitForm() {
        props.onSubmit({ task: task, urgency: urgency });
    }


    return (
        <div className="flex flex-col w-1/3">
            <FormControl className="flex space-y-4">
            <MyTextField multiline={false} rows={1} id='text-task' placeholder='Task' setFunction={setTask} />
            <Rating onChange={(event, value) => setUrgency(value || 0)}/>
            <MyButton action={submitForm}>Submit</MyButton>
            </FormControl>
        </div>
    );
}
