'use client';
import Link from "next/link";
import { useUserContext } from "../context/userContext";
import { useEffect, useState } from "react";
import {Typography, Container } from "@mui/material";

export default function Message() {
    const user = useUserContext();

    return (
        <Container>
            {user ? (
                <Container>
                   <Typography>Hey {user.displayName} go check out your <Link href="/profile">profile</Link>?</Typography>
                </Container>
            ) : (
                <Container>
                    <p>Sign in to see your profile</p>
                </Container>
            )}

        </Container>
    );
}
