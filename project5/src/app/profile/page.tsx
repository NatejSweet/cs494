'use client';

import Profile from "../../components/profile";
import Login from "../../components/login";
import { UserContextProvider, UserDataContextProvider } from "../../context/userContext";
import ".././globals.css";
import { Container } from "@mui/material";
import NavBar from "../../components/navBar";


export default function Home() {
    return (
        <UserContextProvider>
        <UserDataContextProvider>
            <main>
            <NavBar />
            <Container
                sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                }}
            >
                <Profile />
            </Container>
            </main>
        </UserDataContextProvider>
        </UserContextProvider>
    );
    }