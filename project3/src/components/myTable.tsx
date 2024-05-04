import {Table} from '@mui/material'; 
import MyTableBody from './myTableBody';
import MyTableHeader from './myTableHeader';

export default function MyTable(props: { headers: string[], data: { task: string, urgency: number
}[], deleteEntries: (index: number) => void
}) {
    function removeRow(index: number) {
        props.deleteEntries(index);
    }

    return (
        <Table className="min-w-2/3 h-1/4 max-w-2/3">
            <MyTableHeader headers={props.headers} />
            <MyTableBody data={props.data} removeRow={removeRow}/>
        </Table>
    )
}