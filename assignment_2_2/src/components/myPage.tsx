import MyTable from "./myTable";
import MyFilters from "./myFilters";
import { Container } from "@mui/material";
import {useState} from 'react';

export default function MyPage(props: {
    jsonData: {
        title: string,
        release_year: number,
        director: string,
        genre: string[],
        starring_actors: string[],
        rotten_tomatoes_score: number,
    }[]}){
    const headers: string[] = ['Title', 'Release Year', 'Director', 'Genre', 'Starring Actors', 'Rotten Tomatoes Score'];
    let genres = new Array<string>();
    props.jsonData.map((data) => {
        data.genre.forEach((genre: string) => genres.push(genre));
    });

    const [filterGenre, setFilterGenre] = useState<string>('');

  genres = Array.from(new Set(genres));
    return (
        <Container>
            <MyFilters genres={props.genres} />
            <MyTable headers={headers} data={props.jsonData} setFilterGenre={setFilterGenre} />
        </Container>

    )
}
