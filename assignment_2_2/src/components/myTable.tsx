'use client';
import {Table} from '@mui/material'; 
import MyTableBody from './myTableBody';
import MyTableHeader from './myTableHeader';
//make table row??
export default function MyTable(props: { headers: string[], data: {
    title: string, 
    release_year: number, 
    director: string, 
    genre: string[], 
    starring_actors: string[], 
    rotten_tomatoes_score: number,
  }[]; }) {
    return (
        <Table>
            <MyTableHeader headers={props.headers} />
            <MyTableBody data={props.data}/>
        </Table>
    )
  
}