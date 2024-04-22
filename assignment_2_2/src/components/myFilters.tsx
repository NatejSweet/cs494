'use client';
import { FormControl, Container, Box, InputLabel, Select, MenuItem, SelectChangeEvent} from '@mui/material';
import { useState } from 'react';


export default function MyFilters(props: { genres: string[], setFilterGenre: Function }) {

    const [genre, setGenre] = useState<string>(' ');

    const handleChange = (event: SelectChangeEvent) => {
        setGenre(event.target.value as string);
        props.setFilterGenre(event.target.value as string);
    }

    setGenre(target: string) {
        console.log(target);
    }

    return (
        <Container>
            <Box>
                <h3>Filters</h3>
            </Box>
            <FormControl>
                    <InputLabel id="genre-select-label">Genre</InputLabel>
                <Select
                    labelId="genre-select-label"
                    id="genre-select"
                    label="Genre"
                    value={genre}
                    onChange={handleChange}>
                    {props.genres.map((genre: string, index) => (
                        <MenuItem key={index} value={genre}>{genre}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Container>
    );
}