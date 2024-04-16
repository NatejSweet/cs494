import {TableHead} from '@mui/material'; 
import MyTableRow from './myTableRow';

export default function MyTableHeader(props: { headers: string[] }) {
    return (
        <TableHead>
                //TODO: remove prop drilling
                <MyTableRow data={props.headers} />
        </TableHead>
    )
}

    