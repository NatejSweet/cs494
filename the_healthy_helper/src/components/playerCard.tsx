import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  IconButton,
  Button,
  Container,
} from "@mui/material";
import { useUserContext } from "../context/userContextProvider";
import { Player } from "../types/player";

export default function PlayerCard(props: Player) {
  let User = useUserContext();

  return User ? (
    <Card sx={{ display: "flex", padding: 0, height: "20%", marigin: 0 }}>
      <Container
        sx={{ display: "flex", flexDirection: "column", padding: 0, margin: 0 }}
      >
        <Container
          sx={{ display: "flex", flexDirection: "row", padding: 0, margin: 0 }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", padding: 0 }}>
            <CardContent sx={{}}>
              <Typography component="div" variant="h6">
                Name: {props.name}
              </Typography>
              <Typography component="div">Max HP: {props.maxHealth}</Typography>
              <Typography component="div">Temp HP: {props.armor}</Typography>
              <Typography component="div">
                Current HP: {props.currentHealth}
              </Typography>
              <Container>
                <Button>temp</Button>
                <Button>max</Button>
              </Container>
              <Container>
                <Button>+</Button>
                <Button>-</Button>
              </Container>
            </CardContent>
          </Box>
        </Container>
        <Container sx={{ display: "flex", flexDirection: "row", padding: 0 }}>
          <CardMedia
            component="img"
            sx={{ maxWidth: "30%", maxHeight: "70%" }}
            image="#"
            alt="playerPhoto"
          />
          <CardContent>
            <Box>
              <Typography component="div">Armor: {props.armor}</Typography>
            </Box>
          </CardContent>
        </Container>
      </Container>
    </Card>
  ) : (
    <p>no player</p>
  );
}
