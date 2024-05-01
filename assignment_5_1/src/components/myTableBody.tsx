import {TableBody} from '@mui/material';
import  MyTableRow  from './myTableRow';

export default function MyTableBody(props: { data: { 
    name: string;
    language: string;
    comment: string;
    rating: number;
}[], removeRow: (taskId: number) => void
}) {
    function removeRow(taskId: number) {
        props.removeRow(taskId);
    }
    return (
        <TableBody>
            {props.data.map((data: { 
                name: string;
                language: string;
                comment: string;
                rating: number;
  }, index) => (
                <MyTableRow key={index} index={index} data={data} onRemove={removeRow} />
            ))}
        </TableBody>
    )
}