import {TableHead} from '@mui/material'; 
import MyHeaderTableRow from './myHeaderTableRow';

export default function MyTableHeader(props: { headers: string[] }) {
    return (
        <TableHead>
                <MyHeaderTableRow data={props.headers} />
        </TableHead>
    )
}

    