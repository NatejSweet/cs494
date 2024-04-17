'use client';
import {Table} from '@mui/material'; 
import MyTableBody from './myTableBody';
import MyTableHeader from './myTableHeader';
//make table row??
export default function MyTable(props: { headers: string[], data: {
    name: string, 
    distance_from_earth_ly: number, 
    size: string, 
    mass: string, 
    temperature: string, 
    type: string 
  }[]; }) {
    return (
        <Table>
            <MyTableHeader headers={props.headers} />
            <MyTableBody data={props.data}/>
        </Table>
    )
  
}