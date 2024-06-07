"use client";
import Image from "next/image";
import Login from "../components/login";
import PlayerCard from "../components/playerCard";
import EditablePlayerCard from "../components/editablePlayerCard";
import MonsterCard from "../components/monsterCard";
import DiceColumn from "../components/diceColumn";
import { Box, Button, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { UserContextProvider } from "../context/userContextProvider";

export default function Home() {
  let [editPlayers, setEditPlayers] = useState(false);

  return (
    <UserContextProvider>
      <main>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: 0,
            margin: 0,
            boxSizing: "content-box",
          }}
        >
          <Container sx={{ maxWwidth: "15%", padding: 0, margin: 0 }}>
            <DiceColumn />
          </Container>
          <Container
            sx={{
              maxWidth: "50%",
              padding: 0,
              margin: "auto",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <MonsterCard />
            <MonsterCard />
            <MonsterCard />
          </Container>
          <Container sx={{ maxWidth: "35%", padding: 0, margin: 0 }}>
            <Login />
            <Button
              onClick={() => setEditPlayers(!editPlayers)}
              sx={{ border: "1px solid #000" }}
              variant="contained"
            >
              {editPlayers ? "Done" : "Edit Players"}
            </Button>
            {editPlayers ? <EditablePlayerCard /> : <PlayerCard />}
          </Container>
        </Container>
      </main>
    </UserContextProvider>
  );
}
