import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { album } from "../types/album";

export default function MyCard(props: { albums: album[] }) {
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      {props.albums?.length > 0
        ? props.albums.map((album, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between", // Add this line
                maxWidth: "40%",
                minWidth: "40%",
                alignSelf: "center",
                marginTop: "3px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {album.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {album.artist}
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151, maxHeight: 221 }}
                image={album.image}
                alt={album.name}
              />
            </Card>
          ))
        : null}
    </Container>
  );
}
