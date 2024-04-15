import { styled } from '@mui/material/styles';
import {TableCell, TableRow} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 16,
    textAlign: "center"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center"
    },
}));

export const StyledTableRow = styled(TableRow)(() => ({ //I think this is affecting the header row, but there are no visible changes
  '&:nth-of-type(odd)': {
    backgroundColor: 'white',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#ccc',
  },
  '&:hover': {
    backgroundColor: 'lightblue',
  },
}));