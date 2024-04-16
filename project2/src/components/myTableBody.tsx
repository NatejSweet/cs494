import {TableBody} from '@mui/material';
import MyTableRow from './myTableRow';
import { Pokemon } from './myTableRow';

export default function MyTableBody(props: { data: Pokemon[]; headers: string[]}) {
        return (
            <TableBody>
                {props.data.map((data, index) => (
                    <MyTableRow key={index} data={data} headers={props.headers} />
                ))}
            </TableBody>
        );
    }
