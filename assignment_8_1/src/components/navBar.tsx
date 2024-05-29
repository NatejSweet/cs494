
'use client';
import {
    AppBar, 
    Box, 
    Toolbar,  
    Container,
    Button, 
 } from "@mui/material";

 import { useRouter } from 'next/navigation';
 import Link from 'next/link';
 

export default function NavBar(){
    const router = useRouter();
    //const sections: string[] = ["Home", "Dogs", "Cats", "Favorites"];
    const links = [
        {name: "Home", url: "/"},
        {name: "Dogs", url: "/dogs"},
        {name: "Cats", url: "/cats"},
        {name: "Favorites", url: "/favorites"}
    ];

    // Before changing to Link:
    // <Button onClick={()=>{handleSectionClick(section)}}>{section}</Button>

    // const handleSectionClick = (section: string) => {
    //     if (section == "Home"){
    //         router.push("/");
    //     }
    //     else if (section == "Dogs"){
    //         router.push("/dogs");
    //     }
    //     else if (section == "Cats"){
    //         router.push("/cats");
    //     }
    //     else if (section == "Favorites"){
    //         router.push("/favorites");
    //     }
    // };
    
    return (
        <header>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                        {links.map((link, i) => (
                        <Link key={i} href={link.url} passHref>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {link.name}
                            </Button>
                        </Link>
                        ))}
                    </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
}