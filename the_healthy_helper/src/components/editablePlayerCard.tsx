import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { useUserContext } from "../context/userContextProvider";
import { Player } from "../types/player";
import { db } from "../app/firebase";
import { usePlayersContext } from "../context/playerContextProvider";

export default function EditablePlayerCard(props: { index: number }) {
  const user = useUserContext();
  const { players, setPlayers } = usePlayersContext();
  if (!players || !setPlayers) {
    throw new Error("Players context not found");
  }

  useEffect(() => {
    if (user) {
      // const playerRef = db.collection("users").doc(user.uid).collection("characters").doc("player");
      // playerRef.get().then((doc) => {
      //     if (doc.exists) {
      //         setPlayer(doc.data() as Player);
      // }

      // });
      console.log(user);
    }
  }, [user]);

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (Array.isArray(players) && setPlayers) {
      const updatedPlayers = [...players];
      updatedPlayers[props.index] = {
        ...updatedPlayers[props.index],
        name: e.target.value,
      };
      setPlayers(updatedPlayers);
    }
  }

  function handleArmorChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (players && setPlayers) {
      const updatedPlayers = [...players];
      updatedPlayers[props.index] = {
        ...updatedPlayers[props.index],
        armor: parseInt(e.target.value),
      };
      setPlayers(updatedPlayers);
    }
  }

  function handleMaxHealthChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (players && setPlayers) {
      const updatedPlayers = [...players];
      updatedPlayers[props.index] = {
        ...updatedPlayers[props.index],
        maxHealth: parseInt(e.target.value),
      };
      setPlayers(updatedPlayers);
    }
  }
  function handleSave() {
    if (user) {
      // db.collection("users").doc(user.uid).collection("characters").doc("player").set(player);
    }
  }

  return user ? (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: 0,
        height: "auto",
        marginRight: 0,
        marginLeft: "auto",
        width: "100%",
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
          value={players[props.index].name}
          onChange={handleNameChange}
          sx={{ minWidth: "100%" }}
        />
        <TextField
          label="Armor"
          value={players[props.index].armor}
          onChange={handleArmorChange}
          sx={{ minWidth: "100%" }}
        />
        <TextField
          label="Max Health"
          value={players[props.index].maxHealth}
          onChange={handleMaxHealthChange}
          sx={{ minWidth: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: "50%",
        }}
      >
        <CardMedia
          component="img"
          sx={{ maxWidth: "30%", maxHeight: "70%" }}
          image="#"
          alt="playerPhoto"
        />
      </Box>
    </Card>
  ) : (
    <p>no player</p>
  );
}
