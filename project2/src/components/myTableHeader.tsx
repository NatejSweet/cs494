import {TableHead} from '@mui/material'; 
import { StyledTableRow, StyledTableCell } from './myStyledTable';

export default function MyTableHeader(props: { headers: string[] }) {
    return (
        <TableHead>
            <StyledTableRow> 
                {props.headers.map((header, index) => (
                    <StyledTableCell key={index}>
                        {header}
                    </StyledTableCell>
                ))}
            </StyledTableRow>
        </TableHead>
    )
}

    