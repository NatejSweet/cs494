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

export default function EditablePlayerCard(props: player) {
  const user = useUserContext();
  const [player, setPlayer] = useState<Player>({
    name: "",
    armor: 0,
    maxHealth: 0,
    currentHealth: 0,
    tmpHealth: 0,
  });

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
    setPlayer({ ...player, name: e.target.value });
  }

  function handleArmorChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayer({ ...player, armor: parseInt(e.target.value) });
  }

  function handleMaxHealthChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayer({ ...player, maxHealth: parseInt(e.target.value) });
  }

  function handleCurrentHealthChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayer({ ...player, currentHealth: parseInt(e.target.value) });
  }

  function handleTmpHealthChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayer({ ...player, tmpHealth: parseInt(e.target.value) });
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
          value={props.name}
          onChange={handleNameChange}
          sx={{ minWidth: "100%" }}
        />
        <TextField
          label="Armor"
          value={props.armor}
          onChange={handleArmorChange}
          sx={{ minWidth: "100%" }}
        />
        <TextField
          label="Max Health"
          value={props.maxHealth}
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
