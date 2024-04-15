import { StyledTableRow, StyledTableCell } from './myStyledTable';

export default function MyTableRow(props: { data: string[] }) {
    return (
        //TODO: find a way to mark these nodes as table body or header
        <StyledTableRow>
            {props.data.map((data: string, index) => (
                <StyledTableCell key={index}>{data}</StyledTableCell>
            ))}
        </StyledTableRow>
    );
}
    