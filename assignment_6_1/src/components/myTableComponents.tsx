'use client';
import {Table} from '@mui/material'; 
import MyTableBody from './myTableBody';
import MyTableHeader from './myTableHeader';
import { Pokemon } from '../types/Pokemon';

export default function MyTable(props: {headers: string[], data: Pokemon[]}) {
    return (
        <Table>
            <MyTableHeader headers={props.headers} />
            <MyTableBody headers={props.headers} data={props.data}/>
        </Table>
    )
  
}