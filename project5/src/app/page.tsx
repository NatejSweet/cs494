"use client";
import Profile from "../components/profile";
import Login from "../components/login";
import { UserContextProvider } from "../context/userContext";
import "./globals.css";
import { Container } from "@mui/material";
export default function Home() {
  return (
    <UserContextProvider>
      <main>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Profile />
          <Login />
        </Container>
      </main>
    </UserContextProvider>
  );
}
