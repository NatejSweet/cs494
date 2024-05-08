import { styled } from '@mui/material/styles';
import {TableCell, TableRow} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    width: 'auto',
    height: 'auto',
    minWidth: 7,
  minHeight: 7,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 16,
    textAlign: "center"
  },
  [`&.${tableCellClasses.body}`]: {
    width: 'auto',
    height: 'auto',
    minWidth: 7,
  minHeight: 7,
    fontSize: 14,
    textAlign: "center"
    },
  
}));
export const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'white',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#ccc',
  },
  '&:hover': {
    backgroundColor: 'lightblue',
  },
  width: 'auto',
  height: 'auto',
}));