"use client";
import NavBar from "../components/navBar";
import "../app/globals.css";
import { Container } from "@mui/material";

export default function Favorites() {
  return (
    <main>
      <NavBar />
      <h1>Favorites</h1>
      <p>These are my favorite things.</p>
      <Container
        sx={{
          display: "flex",
        }}
      ></Container>
    </main>
  );
}
