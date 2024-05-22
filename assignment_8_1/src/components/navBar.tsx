import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router"; // Corrected import
import Link from "next/link";
import { usePetsContext } from "@/context/petsContext";

export default function NavBar() {
  // const router = useRouter();
  const links = [
    { name: "Home", url: "/" },
    { name: "Dogs", url: "/dogs" },
    { name: "Cats", url: "/cats" },
    { name: "Favorites", url: "/favorites" },
  ];
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-center items-center">
          {links.map((link) => (
            <MenuItem key={link.name}>
              <Link href={link.url} passHref>
                <Button className="text-white" component="button">
                  {link.name}
                </Button>
              </Link>
            </MenuItem>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
