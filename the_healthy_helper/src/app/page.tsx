"use client";
import Image from "next/image";
import Login from "../components/login";
import PlayerCard from "../components/playerCard";
import MonsterCard from "../components/monsterCard";
import DiceColumn from "../components/diceColumn";
import { Box, Button, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { UserContextProvider } from "../context/userContextProvider";

export default function Home() {
  return (
    <UserContextProvider>
      <main>
        <Container sx={{ display: "flex", flexDirection: "row", padding: 0 }}>
          <Container sx={{ width: "15%", padding: 0 }}>
            <DiceColumn />
          </Container>
          <Container sx={{ width: "50%", padding: 0 }}>
            <MonsterCard />
          </Container>
          <Container sx={{ width: "35%", padding: 0 }}>
            <Container sx={{ padding: 0 }}>
              <Login />
            </Container>
            <Container sx={{ padding: 0 }}>
              <PlayerCard />
            </Container>
          </Container>
        </Container>
      </main>
    </UserContextProvider>
  );
}
