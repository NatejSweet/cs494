"use client";
import Image from "next/image";
import Login from "../components/login";
import Players from "../components/players";
import MonsterCard from "../components/monsterCard";
import DiceColumn from "../components/diceColumn";
import MonsterForm from "../components/monsterForm";
import PlayersControls from "../components/playersControls";
import { Box, Button, Container } from "@mui/material";
import { useState, useEffect, use } from "react";
import { UserContextProvider } from "../context/userContextProvider";
import {
  PlayersContextProvider,
  usePlayersContext,
} from "../context/playerContextProvider";
import { Player } from "../types/player";
import { Monster } from "../types/monster";
import { set } from "firebase/database";

export default function Home() {
  let [monsters, setMonsters] = useState<Monster[]>([]);

  return (
    <UserContextProvider>
      <PlayersContextProvider>
        <main>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "3px",
              margin: 0,
              width: "100%",
            }}
          >
            <Container sx={{ width: "15%", padding: 0, margin: 0 }}>
              <DiceColumn />
            </Container>
            <Box sx={{ width: "55%", padding: 0, margin: 0 }}>
              <MonsterForm />
              <Container
                sx={{
                  width: "100%",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridRowGap: "10px",
                  alignItems: "start",
                }}
              >
                {monsters.map((monster: Monster, index: number) => {
                  return <MonsterCard key={index} monster={monster} />;
                })}
              </Container>
            </Box>
            <Container
              sx={{
                width: "30%",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 0,
                  margin: 0,
                }}
              >
                <PlayersControls />
                <Login />
              </Box>
              <Players />
            </Container>
          </Box>
        </main>
      </PlayersContextProvider>
    </UserContextProvider>
  );
}
