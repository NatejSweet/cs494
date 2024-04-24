import { FormControl, Container, Box, InputLabel, Select, MenuItem, SelectChangeEvent} from '@mui/material';
import { useState } from 'react';
import MyResetButton from './myResetButton';
import MyScoreSelect from './myScoreSelect';
import MyGenreSelect from './myGenreSelect';


export default function MyFilters(props: { genres: string[], setFilterGenre: Function, setFilterScore: Function}) {



    return(
            <Container>
                <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <MyGenreSelect genres={props.genres} setFilterGenre={props.setFilterGenre} />
                    <MyScoreSelect setFilterScore = {props.setFilterScore}/>   
                    <MyResetButton setFilterGenre={props.setFilterGenre} setFilterScore={props.setFilterScore}/>//needs to reset the selects (DOES NOT WORK)
                </FormControl>
                </Box>
            </Container>
        )
}