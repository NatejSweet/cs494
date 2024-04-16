import MyTable from "../components/myTableComponents";
import data from "../assets/data/gen_1_pokedex.json";
import { TableContainer } from '@mui/material';

export default function Home() {
  const headers: string[] = ["Number", "Pic", "Name", "Type", "Abilities"];
  return (
    <main>
      <Header />
      <TableContainer>
        <MyTable headers={headers} data={data} />
        </TableContainer>
    </main>
  );
}

function Header() {
  return <h1>Generation 1 Pokedex</h1>;
}
