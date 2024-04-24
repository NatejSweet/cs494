'use client';
import MyTable from "./myTable";
import MyFilters from "./myFilters";
import { Container } from "@mui/material";
import { useState } from 'react';
import { useEffect } from 'react';

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
    const [filterScore, setFilterScore] = useState<string>('');
    const [filteredData, setFilteredData] = useState(props.jsonData);
    useEffect(() => {
        var tempData = props.jsonData;
        if (filterGenre === '') {
            // setFilteredData(props.jsonData);
            document.getElementById('genre-select')?.setAttribute('value', ' ');
            // document.getElementById('genre-select')?.
        } else {
            // setFilteredData(props.jsonData.filter((data) => data.genre.includes(filterGenre)));
            tempData = tempData.filter((data) => data.genre.includes(filterGenre));
        }
        if (filterScore === ' ') {
            // setFilteredData(props.jsonData);
            // document.getElementById('score-select')?.setAttribute('value', ' ');
        } else if (filterScore === 'Low to High') {
            tempData = tempData.sort((a, b) => a.rotten_tomatoes_score - b.rotten_tomatoes_score);
            // setFilteredData(props.jsonData.sort((a, b) => b.rotten_tomatoes_score - a.rotten_tomatoes_score));
            
        } else if (filterScore === 'High to Low') {
            tempData = tempData.sort((a, b) => b.rotten_tomatoes_score - a.rotten_tomatoes_score);
            // setFilteredData(props.jsonData.sort((a, b) => a.rotten_tomatoes_score - b.rotten_tomatoes_score));
        }
        setFilteredData(tempData);
    }, [filterGenre, filterScore]);



  genres = Array.from(new Set(genres));
    return (
        <Container>
            <MyFilters genres={genres} setFilterGenre={setFilterGenre} setFilterScore={setFilterScore}/>
            <MyTable headers={headers} data={filteredData}/>
        </Container>

    )
}
