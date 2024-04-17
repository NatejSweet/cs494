import {TableContainer} from '@mui/material'; 
import MyTable from '../components/myTable';
import { promises as fs } from 'fs';

export default async function Home() {
  const fileData = await fs.readFile('./data/star_data.json', 'utf-8');
  const jsonData : { 
    name: string, 
    distance_from_earth_ly: number, 
    size: string, 
    mass: string, 
    temperature: string, 
    type: string 
  }
    = JSON.parse(fileData);


  const headers: string[] = ['Name', 'Distance from Earch (ly)', 'Size', 'Mass', 'Temperature', 'Type'];
  return (
    <main>
      <TableContainer>
        <MyTable headers={headers} data={jsonData} />
        </TableContainer>
    </main>

  );
}






      


