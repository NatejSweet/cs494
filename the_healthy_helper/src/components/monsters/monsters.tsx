import { useMonstersContext } from "../../context/monstersContextProvider";
import { useUserContext } from "../../context/userContextProvider";
import MonsterCard from "./monsterCard";
import MonsterForm from "./monsterForm";
import { Box, Container } from "@mui/material";
export default function Monsters() {
  const { monsters } = useMonstersContext();
  const user = useUserContext();

  return user ? (
    <Box sx={{ width: "100%", padding: 0, margin: 0 }}>
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
        {monsters?.map((monster, index) => {
          return <MonsterCard index={index} monster={monster} />;
        })}
      </Container>
    </Box>
  ) : null;
}
