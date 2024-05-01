import { StyledTableRow, StyledTableCell } from './myStyledTable';
import { Rating } from '@mui/material';
import MyButton from './myButton';
export default function MyTableRow(props: { data: { 
    name: string;
    language: string;
    comment: string;
    rating: number;
}, onRemove: (taskId: number) => void,
    index: number
    
}) {
    function handleClick() {
        props.onRemove(props.index);
    }
    return (
        <StyledTableRow>
            <StyledTableCell className="text-center overflow-auto break-words">{props.data.name}</StyledTableCell>
            <StyledTableCell className="text-center overflow-auto break-words">{props.data.language}</StyledTableCell>
            <StyledTableCell className="text-center overflow-auto break-words">{props.data.comment}</StyledTableCell>
            <StyledTableCell className="text-center">
                <Rating readOnly value={props.data.rating} />
            </StyledTableCell>
            <StyledTableCell className="text-center">
                <MyButton action={handleClick}>Remove Bio</MyButton>
            </StyledTableCell>
        </StyledTableRow>
    );
}
    