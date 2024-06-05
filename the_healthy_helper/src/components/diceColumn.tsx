import { Box } from "@mui/material";
import { useUserContext } from "../context/userContextProvider";

export default function DiceColumn() {
  const user = useUserContext();

  return <Box>{user ? <p>dice!</p> : <p>no dice?</p>}</Box>;
}
