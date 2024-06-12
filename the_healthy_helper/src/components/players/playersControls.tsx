import React from "react";
import { Button } from "@mui/material";
import { useUserContext } from "../../context/userContextProvider";
import { usePlayersContext } from "../../context/playerContextProvider";
import { Box } from "@mui/material";

export default function PlayersControls() {
  const { editPlayers, setEditPlayers, players, setPlayers } =
    usePlayersContext();
  if (!players || !setPlayers || editPlayers == null || !setEditPlayers) {
    console.log(players);
    console.log(setPlayers);
    console.log(editPlayers);
    console.log(setEditPlayers);
    throw new Error("Players context not found");
  }
  const user = useUserContext();

  return user ? (
    <Box sx={{ width: "100%" }}>
      <Button
        onClick={() => {
          setEditPlayers(!editPlayers);
        }}
      >
        {editPlayers ? "Done" : "Edit"}
      </Button>
      {editPlayers ? (
        <Button
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
      ) : null}
    </Box>
  ) : null;
}
