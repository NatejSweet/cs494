import { FormControl, Container, Box, InputLabel, Select, MenuItem, SelectChangeEvent} from '@mui/material';
import { useState } from 'react';


export default function MyScoreSelect(props: { setFilterScore: Function }) {

    const [score, setScore] = useState<string>(' ');

    const handleChange = (event: SelectChangeEvent) => {
        setScore(event.target.value as string);
        props.setFilterScore(event.target.value as string);
    };
    return (
        <Select
                        labelId="score-select-label"
                        id="score-select"
                        label="Score"
                        onChange={handleChange}
        >
            <MenuItem value={'High to Low'}>High to Low</MenuItem>
            <MenuItem value={'Low to High'}>Low to High</MenuItem>

                    </Select>
    )
}