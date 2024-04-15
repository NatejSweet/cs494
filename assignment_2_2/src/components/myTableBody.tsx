import {TableBody} from '@mui/material';
import  MyTableRow  from './myTableRow';

export default function MyTableBody(props: { data: string[][] }) {
    return (
        <TableBody>
            {props.data.map((data: string[], index) => (
                <MyTableRow key={index} data={data} />
            ))}
        </TableBody>
    )
}