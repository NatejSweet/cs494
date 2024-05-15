import { Select, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { Pokemon } from "../types/Pokemon";

export default function MySelect(props: {
  pokemon: Pokemon[];
  selectedPokemon: string;
  setSelectedPokemon: (value: string) => void;
  setSelectedPokemonUrl: (value: string) => void;
}) {
  return (
    <Select
      labelId="pokemon-select-label"
      id="pokemon-select"
      value={props.selectedPokemon}
      label="Pokemon"
      onChange={(event: SelectChangeEvent, child: any) => {
        console.log(event.target.value);
        props.setSelectedPokemon(event.target.value);
        props.setSelectedPokemonUrl(props.pokemon[child.props["data-id"]].url);
      }}
    >
      {props.pokemon.map((data: Pokemon, i: number) => (
        <MenuItem key={i} data-id={i} value={data.name}>
          {data.name}
        </MenuItem>
      ))}
    </Select>
  );
}
