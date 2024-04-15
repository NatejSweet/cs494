import {TableContainer} from '@mui/material'; 
import MyTable from '../components/myTableComponents';

export default function Home() {
  const data: string[][] = [
  ['1', 'Minecraft', '300000000', 'November 18, 2011', 'Mojang Studios'],
  ['2','Grand Theft Auto V', '195000000', 'September 17, 2013', 'Rockstar Games'],
  ['3', 'Tetris(EA)', '100000000', 'September 12, 2006', 'Electronic Arts'],
  ['4', 'Wii Sports', '82900000', 'November 19, 2006', 'Nintendo'],
  ['5', 'PlayerUnknowns Battlegrounds', '75000000', 'December 20, 2017', 'Krafton'],
  ]
  const headers: string[] = ['Number', 'Game', 'Total Sales', 'Release Date', 'Publisher']
  return (
    <main>
      <TableContainer>
        <MyTable headers={headers} data={data} />
        </TableContainer>
    </main>

  );
}






      


