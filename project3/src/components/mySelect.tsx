import { FormControl, Container, Box, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

export default function MySelect(props: { languages: string[] , setLanguage: (language: string) => void}) {
    const [language, setLanguage] = useState(''); 

    function handleChange(event: SelectChangeEvent) {
        setLanguage(event.target.value);
        props.setLanguage(event.target.value);
    }

    return (
        <div className="w-full">
            <FormControl fullWidth>
                <InputLabel id="language-select-label">Language</InputLabel>
                <Select id="language-select" labelId="language-select-label" value={language} onChange={handleChange}>
                    {
                        props.languages.map((language: string, i: number)=>(
                            <MenuItem key={i} value={language}>{language}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
);
}