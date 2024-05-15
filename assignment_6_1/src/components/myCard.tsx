import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { PokemonDetail } from "../types/PokemonDetail";

export default function MyCard(props: { pokemonDetail: PokemonDetail }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        alt="pokemon image"
        image={props.pokemonDetail?.image}
        sx={{ height: "auto", maxWidth: "60%", m: "auto" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {"Name: " + props.pokemonDetail.name}
        </Typography>
        <Container sx={{ flex: 1, alignItems: "column" }}>
          <Container sx={{ flex: 1, alignItems: "row" }}>
            <Typography variant="body2" color="text.secondary">
              {"Abilities(s): " + props.pokemonDetail.abilities.join(", ")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {"Type(s): " + props.pokemonDetail.types.join(", ")}
            </Typography>
          </Container>
          <Container sx={{ flex: 1, alignItems: "row" }}>
            <Typography variant="body2" color="text.secondary">
              {"Height: " + props.pokemonDetail.height / 10 + " m"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {"Weight: " + props.pokemonDetail.weight / 10 + " kg"}
            </Typography>
          </Container>
        </Container>
      </CardContent>
    </Card>
  );
}
