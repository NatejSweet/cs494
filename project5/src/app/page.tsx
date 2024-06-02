"use client";
import Login from "../components/login";
import { UserContextProvider, UserDataContextProvider } from "../context/userContext";
import "./globals.css";
import { Container } from "@mui/material";
import Message from "../components/message";
import NavBar from "../components/navBar";
export default function Home() {
  return (
    <UserContextProvider>
      <UserDataContextProvider>
        <main>
          <NavBar />
            <Message/>

        </main>
      </UserDataContextProvider>
    </UserContextProvider>
  );
}
