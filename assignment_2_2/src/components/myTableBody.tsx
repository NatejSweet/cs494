import {TableBody} from '@mui/material';
import  MyTableRow  from './myTableRow';

export default function MyTableBody(props: { data: { 
    title: string, 
    release_year: number, 
    director: string, 
    genre: string[], 
    starring_actors: string[], 
    rotten_tomatoes_score: number,
  }[] }) {
    return (
        <TableBody>
            {props.data.map((data: { 
    title: string, 
    release_year: number, 
    director: string, 
    genre: string[], 
    starring_actors: string[], 
    rotten_tomatoes_score: number,
  }, index) => (
                <MyTableRow key={index} data={data} />
            ))}
        </TableBody>
    )
}