'use client';
import {
    AppBar, 
    Box, 
    Toolbar,  
    Container,
    Button, 
    Avatar,
 } from "@mui/material";
 import { useUserContext} from "../context/userContext";
 import { useRouter } from 'next/navigation';
 import Link from 'next/link';
import Login from "./login";
 

export default function NavBar(){
    const user = useUserContext();
    const router = useRouter();
    const links = [
        { name: 'Profile', url: '/profile' },
        { name: 'Home', url: '/' },
    ];
    return (
        <header>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        {links.map((link, i) => (
                            <Link key={i} href={link.url} passHref >
                                {user && link.url === '/profile' ? (
                                     <Avatar src={user?.photoURL ? user.photoURL : ""} alt="User Profile" sx={{marginTop:'10px', marginRight: '5px'}}/>
                                ) : (
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>{link.name}</Button>
                                )}
                            </Link>
                        ))}
                    </Box>
                    <Login />

                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
}