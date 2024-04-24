import { FormControl, Container, Box, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

import { useState } from 'react';


export default function MyGenreSelect(props: { genres: string[], setFilterGenre: Function }) {
        const [genre, setGenre] = useState<string>(' ');

    const handleChange = (event: SelectChangeEvent) => {
        setGenre(event.target.value as string);
        props.setFilterGenre(event.target.value as string);
        // document.getElementById('genre-select')?.setAttribute('value', event.target.value as string);
    };
    return (
        <div>
        <InputLabel id="genre-select-label">Genre</InputLabel>
                        <Select
                        labelId="genre-select-label"
                        id="genre-select"
                        label="Genre"
                        value={genre}
                        onChange={handleChange}
                        >
                            {
                                props.genres.map((genre: string, i: number)=>(
                                    <MenuItem key={i} value={genre}>{genre}</MenuItem>
                                ))
                            }
            </Select>
        </div>
    );
}