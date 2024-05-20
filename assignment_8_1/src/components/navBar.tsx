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

export default function NavBar() {
  const sections: string[] = ["Dogs", "Cats", "Favorites"];
  const router = useRouter();
  const handleSectionClick = (section: string) => {
    router.push(`/${section.toLowerCase()}`);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-center items-center">
          {sections.map((section) => (
            <MenuItem key={section}>
              <Button
                onClick={() => handleSectionClick(section)}
                className="text-white"
                component="button"
              >
                {section}
              </Button>
            </MenuItem>
          ))}
          <MenuItem>
            <Button onClick={() => router.back()}>Back</Button>{" "}
            {/* Corrected onClick handler */}
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
