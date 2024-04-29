'use client';
import { FormControl } from '@mui/material';
import MyTextField from './myTextField';
import MySelect from './mySelect';
import MyButton from './myButton';
import {useEffect, useState} from 'react';


export default function MyForm(props: { languages: string[], onSubmit: (entries: {name: string, language: string, comment: string}) => void}) {
    const [submitForm, setSubmitForm] = useState(false);
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');
    const [comment, setComment] = useState('');

useEffect(() => {
    if (submitForm) {
        const entry = {
            'name': name,
            'language': language,
            'comment': comment
        };
        props.onSubmit(entry);
        // console.log(entry);
    }
    setSubmitForm(false);
}, [submitForm]);

  return (
      <FormControl>
          <MyTextField multiline={false} rows={1} id='text-name' placeholder='Name' setFunction={setName} />
          <br></br>
          <MySelect languages={props.languages} setLanguage = {setLanguage} />
          <br></br>
          <MyTextField multiline={true} rows={4} id='text-comment' placeholder='Comment' setFunction={setComment} />
          <MyButton action = {setSubmitForm}>Submit</MyButton>
      </FormControl>
  );
}
