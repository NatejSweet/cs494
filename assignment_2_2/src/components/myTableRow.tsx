import { StyledTableRow, StyledTableCell } from './myStyledTable';

export default function MyTableRow(props: { data: { 
    title: string, 
    release_year: number, 
    director: string, 
    genre: string[], 
    starring_actors: string[], 
    rotten_tomatoes_score: number,
  } }) {
    return (
        //TODO: find a way to mark these nodes as table body or header
        <StyledTableRow>
            <StyledTableCell>{props.data.title}</StyledTableCell>
            <StyledTableCell>{props.data.release_year}</StyledTableCell>
            <StyledTableCell>{props.data.director}</StyledTableCell>
            <StyledTableCell>{props.data.genre.join(', ')}</StyledTableCell>
            <StyledTableCell>{props.data.starring_actors.join(', ')}</StyledTableCell>
            <StyledTableCell>{props.data.rotten_tomatoes_score}</StyledTableCell>
        </StyledTableRow>
    );
}
    