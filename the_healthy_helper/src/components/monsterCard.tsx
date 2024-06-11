import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useUserContext } from "../context/userContextProvider";
import { Monster } from "../types/monster";
export default function MonsterCard(props: { monster: Monster }) {
  const user = useUserContext();

  return user ? (
    <Card
      sx={{
        display: "flex",
        padding: "5px",
        width: "auto",
        marginRight: "5px",
        marginLeft: "5px",
        border: "1px solid black",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", padding: 0 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  ) : (
    <p>no monster</p>
  );
}
