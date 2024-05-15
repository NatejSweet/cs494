import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { Pokemon } from "../types/Pokemon";
import MySelect from "./mySelect";

export default function MyForm(props: {
  selectedPokemon: string;
  setSelectedPokemon: (value: string) => void;
  setSelectedPokemonUrl: (value: string) => void;
  pokemon: Pokemon[];
}) {
  return (
    <FormControl fullWidth>
      <InputLabel id="pokemon-select-label">Pokemon</InputLabel>
      <MySelect
        pokemon={props.pokemon}
        selectedPokemon={props.selectedPokemon}
        setSelectedPokemon={props.setSelectedPokemon}
        setSelectedPokemonUrl={props.setSelectedPokemonUrl}
      />
    </FormControl>
  );
}
