import { StyledTableRow, StyledTableCell } from './myStyledTable';

export default function MyTableRow(props: { data: { 
    name: string, 
    distance_from_earth_ly: number, 
    size: string, 
    mass: string, 
    temperature: string, 
    type: string 
  } }) {
    return (
        //TODO: find a way to mark these nodes as table body or header
        <StyledTableRow>
            <StyledTableCell>{props.data.name}</StyledTableCell>
            <StyledTableCell>{props.data.distance_from_earth_ly}</StyledTableCell>
            <StyledTableCell>{props.data.size}</StyledTableCell>
            <StyledTableCell>{props.data.mass}</StyledTableCell>
            <StyledTableCell>{props.data.temperature}</StyledTableCell>
            <StyledTableCell>{props.data.type}</StyledTableCell>
        </StyledTableRow>
    );
}
    