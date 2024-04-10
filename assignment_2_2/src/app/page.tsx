'use client';

import { Container, List, ListItem, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'; 
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(() => ({
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

const StyledTableRow = styled(TableRow)(() => ({
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

export default function Home() {
  return (
    <main>
      <TableContainer>
        <Table>
          <TableHeader />
          <TableBody>
            {bodyRow(0)}
            {bodyRow(1)}
            {bodyRow(2)}
            {bodyRow(3)}
            {bodyRow(4)}
          </TableBody>
        </Table>
        </TableContainer>
    </main>

  );
}

function TableHeader() {
  return(
  <TableHead>
            <TableRow>
              <StyledTableCell>Number</StyledTableCell>
              <StyledTableCell>Game</StyledTableCell>
              <StyledTableCell>Total Sales</StyledTableCell>
              <StyledTableCell>Release Date</StyledTableCell>
              <StyledTableCell>Publisher</StyledTableCell>
            </TableRow>
          </TableHead>
          )
  
}

function bodyRow(rowNum: number) {
  return (
    <StyledTableRow>
      <StyledTableCell>{data[rowNum][0]}</StyledTableCell>
      <StyledTableCell>{data[rowNum][1]}</StyledTableCell>
      <StyledTableCell>{data[rowNum][2]}</StyledTableCell>
      <StyledTableCell>{data[rowNum][3]}</StyledTableCell>
      <StyledTableCell>{data[rowNum][4]}</StyledTableCell>
    </StyledTableRow>
    
  )
}

const data: string[][] = [
  ['1', 'Minecraft', '300000000', 'November 18, 2011', 'Mojang Studios'],
  ['2','Grand Theft Auto V', '195000000', 'September 17, 2013', 'Rockstar Games'],
  ['3', 'Tetris(EA)', '100000000', 'September 12, 2006', 'Electronic Arts'],
  ['4', 'Wii Sports', '82900000', 'November 19, 2006', 'Nintendo'],
  ['5', 'PlayerUnknowns Battlegrounds', '75000000', 'December 20, 2017', 'Krafton'],
]



      


