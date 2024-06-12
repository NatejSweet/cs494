import React from "react";
import { Button } from "@mui/material";
import { useUserContext } from "../../context/userContextProvider";
import { usePlayersContext } from "../../context/playerContextProvider";
import { Box } from "@mui/material";

export default function PlayersControls() {
  const {
    editPlayers,
    setEditPlayers,
    players,
    setPlayers,
    savePlayers,
    handleResetHealth,
    checkHealth,
  } = usePlayersContext();
  if (
    !players ||
    !setPlayers ||
    editPlayers == null ||
    !setEditPlayers ||
    !savePlayers ||
    !handleResetHealth ||
    !checkHealth
  ) {
    console.log(players);
    console.log(setPlayers);
    console.log(editPlayers);
    console.log(setEditPlayers);
    throw new Error("Players context not found");
  }
  const user = useUserContext();
  const handleEdit: () => void = () => {
    if (editPlayers) {
      setEditPlayers(false);
      checkHealth();
      savePlayers();
    } else {
      setEditPlayers(true);
    }
  };

  return user ? (
    <Box sx={{ width: "100%", justifyContent: "space-evenly" }}>
      <Button
        sx={{ margin: "5px" }}
        onClick={() => {
          handleEdit();
        }}
        variant="contained"
      >
        {editPlayers ? "Done" : "Edit"}
      </Button>
      {editPlayers ? (
        <Button
          sx={{ margin: "5px" }}
          variant="contained"
          onClick={() => {
            setPlayers([
              ...players!,
              {
                name: "New Player",
                maxHealth: 10,
                armor: 10,
                currentHealth: 10,
                tmpHealth: 0,
              },
            ]);
          }}
        >
          Add Player
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={() => {
            handleResetHealth();
          }}
        >
          Reset Health
        </Button>
      )}
    </Box>
  ) : null;
}
