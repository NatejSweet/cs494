import { StyledTableRow, StyledTableCell } from './myStyledTable';
import { Rating } from '@mui/material';
import MyButton from './myButton';
export default function MyTableRow(props: { data: { 
    task: string, urgency: number
}, onRemove: (taskId: number) => void,
    index: number
    
}) {
    function handleClick() {
        props.onRemove(props.index);
    }
    return (
        <StyledTableRow>
            <StyledTableCell className="text-center overflow-auto break-words">{props.data.task}</StyledTableCell>
            <StyledTableCell className="text-center">
                <Rating readOnly value={props.data.urgency} />
            </StyledTableCell>
            <StyledTableCell className="text-center">
                <MyButton action={handleClick}>Complete Task</MyButton>
            </StyledTableCell>
        </StyledTableRow>
    );
}
    