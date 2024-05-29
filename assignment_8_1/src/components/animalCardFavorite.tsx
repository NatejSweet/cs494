"use client";
import {
  Typography,
  Card,
  CardMedia,
  Box,
  CardContent,
  Container,
} from "@mui/material";
import { Animal } from "@/types/animal";
export default function AnimalCard(props: { animalDetail: Animal }) {
  return (
    <Container sx={{ width: 600, m: 2 }}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 151, p: 2 }}
          image={props.animalDetail.url}
          alt={`${props.animalDetail.name} image`}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              sx={{ textTransform: "capitalize", m: "10px" }}
              component="span"
              variant="h3"
            >
              {props.animalDetail.name}
            </Typography>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h3"
              color="text.secondary"
              component="span"
            >
              {props.animalDetail.gender == "female" ? (
                <span style={{ color: "pink" }}>&#9792;</span>
              ) : (
                <span style={{ color: "blue" }}>&#9794;</span>
              )}
            </Typography>
            <Typography
              sx={{ textTransform: "capitalize", m: "10px" }}
              component="div"
              variant="h4"
            >
              {props.animalDetail.type}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
}
