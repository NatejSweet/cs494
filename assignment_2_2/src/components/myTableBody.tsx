import {TableBody} from '@mui/material';
import  MyTableRow  from './myTableRow';

export default function MyTableBody(props: { data: { 
    name: string, 
    distance_from_earth_ly: number, 
    size: string, 
    mass: string, 
    temperature: string, 
    type: string 
  }[] }) {
    return (
        <TableBody>
            {props.data.map((data: { 
    name: string, 
    distance_from_earth_ly: number, 
    size: string, 
    mass: string, 
    temperature: string, 
    type: string 
  }, index) => (
                <MyTableRow key={index} data={data} />
            ))}
        </TableBody>
    )
}