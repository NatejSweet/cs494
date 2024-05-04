import {TableBody} from '@mui/material';
import  MyTableRow  from './myTableRow';

export default function MyTableBody(props: { data: { 
    task: string, urgency: number
}[], removeRow: (taskId: number) => void
}) {
    function removeRow(taskId: number) {
        props.removeRow(taskId);
    }
    return (
        <TableBody>
            {props.data.map((data: { 
                task: string, urgency: number
  }, index) => (
                <MyTableRow key={index} index={index} data={data} onRemove={removeRow} />
            ))}
        </TableBody>
    )
}