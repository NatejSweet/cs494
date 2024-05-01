import { StyledTableRow, StyledTableCell } from './myStyledTable';
import MyButton from './myButton';
export default function MyTableRow(props: { data: { 
    task: string;
    urgency: number;
    taskId: number;
}, onRemove: (taskId: number) => void
    
}) {
    function handleClick() {
        props.onRemove(props.data.taskId);
    }
    return (
        <StyledTableRow>
            <StyledTableCell>{props.data.task}</StyledTableCell>
            <StyledTableCell>{props.data.urgency}</StyledTableCell>
            <MyButton onClick={handleClick}>Complete Task</MyButton>
        </StyledTableRow>
    );
}
    