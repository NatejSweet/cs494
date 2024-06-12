import { Card, CardMedia, Box, Button, TextField } from "@mui/material";
import { Player } from "../../types/player";
import { usePlayersContext } from "../../context/playerContextProvider";

export default function EditablePlayerCard(props: {
  player: Player;
  index: number;
}) {
  const {
    handleNameChange,
    handleArmorChange,
    handleMaxHealthChange,
    handleRemovePlayer,
  } = usePlayersContext();
  if (
    handleNameChange == null ||
    handleArmorChange == null ||
    handleMaxHealthChange == null ||
    handleRemovePlayer == null
  ) {
    throw new Error("Players context not found");
  }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "5px",
        height: "auto",
        marginRight: 0,
        marginLeft: "auto",
        width: "99%",
        border: "1px solid black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { m: 1, width: "15ch" },
          width: "50%",
        }}
      >
        <TextField
          label="Name"
          value={props.player.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleNameChange(props.index, event)
          }
          sx={{ minWidth: "100%" }}
        />
        <TextField
          label="Armor"
          value={props.player.armor}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleArmorChange(props.index, event)
          }
          sx={{ minWidth: "100%" }}
        />
        <TextField
          label="Max Health"
          value={props.player.maxHealth}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleMaxHealthChange(props.index, event)
          }
          sx={{ minWidth: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: "50%",
        }}
      >
        <Button
          onClick={() => {
            handleRemovePlayer(props.index);
          }}
        >
          Delete
        </Button>
        <CardMedia
          component="img"
          sx={{ maxWidth: "30%", maxHeight: "70%" }}
          image="#"
          alt="playerPhoto"
        />
      </Box>
    </Card>
  );
}
