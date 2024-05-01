import {Table} from '@mui/material'; 
import MyTableBody from './myTableBody';
import MyTableHeader from './myTableHeader';

export default function MyTable(props: { headers: string[], data: {
    task: string;
    urgency: number;
    taskId: number;
}[], setTasks: (tasks: { task: string, urgency: number, taskId: number }[]) => void;
}) {
    function onRowRemove(taskId: number) {
        const newTasks = props.data.filter(task => task.taskId !== taskId);
        props.setTasks(newTasks);
    }
    return (
        <Table>
            <MyTableHeader headers={props.headers} />
            <MyTableBody data={props.data} onRowRemove={onRowRemove}/>
        </Table>
    )
}