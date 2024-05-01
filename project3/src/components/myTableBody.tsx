import {TableBody} from '@mui/material';
import  MyTableRow  from './myTableRow';

export default function MyTableBody(props: { data: { 
    task: string;
    urgency: number;
    taskId: number; 
}[], onRowRemove: (taskId: number) => void
}) {
    function removeTask(taskId: number) {
        props.onRowRemove(taskId);
    }
    return (
        <TableBody>
            {props.data.map((data: { 
                task: string;
                urgency: number;
                taskId: number;
  }, index) => (
                <MyTableRow key={index} data={data} onRemove={removeTask} />
            ))}
        </TableBody>
    )
}