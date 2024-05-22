import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { Pet } from "../assets/types/pet";
import FavoriteIcon from "@mui/icons-material/Favorite";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function PetCart(props: {
  pet: Pet;
  toggleFavorite: (pet: Pet) => void;
}) {
  return (
    <Card sx={{ width: 345, height: 340, margin: 2 }}>
      <CardMedia
        component="img"
        alt="Pet Image"
        image={props.pet?.image}
        sx={{ maxHeight: "50%", maxWidth: "100%", margin: "auto" }}
      />
      <CardContent>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {"Name: " + props.pet.name + "   "}
            {props.pet.favorited ? (
              <FavoriteIcon
                onClick={() => props.toggleFavorite(props.pet)}
                sx={{ color: "red", cursor: "pointer", fontSize: 30 }}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() => props.toggleFavorite(props.pet)}
                sx={{ color: "red", cursor: "pointer", fontSize: 30 }}
              />
            )}
          </Typography>
        </div>

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {"Type: " + props.pet.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"Gender: " + props.pet.gender}
          </Typography>
          <Typography></Typography>
        </Container>
      </CardContent>
    </Card>
  );
}
