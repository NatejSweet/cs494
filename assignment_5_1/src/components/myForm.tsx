'use client';
import { FormControl, Rating } from '@mui/material';
import MyTextField from './myTextField';
import MySelect from './mySelect';
import MyButton from './myButton';
import {useEffect, useState} from 'react';


export default function MyForm(props: { languages: string[], onSubmit: (entries: {name: string, language: string, comment: string, rating: number}) => void}) {
    // const [submitForm, setSubmitForm] = useState(false);
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);


    function submitForm() {
        props.onSubmit({ name: name, language: language, comment: comment, rating: rating });
    }


    return (
        <div className="flex flex-col w-1/3">
            <FormControl className="flex space-y-4">
            <MyTextField multiline={false} rows={1} id='text-name' placeholder='Name' setFunction={setName} />
            <MySelect languages={props.languages} setLanguage={setLanguage} />
                <MyTextField multiline={true} rows={4} id='text-comment' placeholder='Comment' setFunction={setComment} />
                <Rating onChange={(event, value) => setRating(value || 0)}/>
            <MyButton action={submitForm}>Submit</MyButton>
            </FormControl>
        </div>
    );
}
