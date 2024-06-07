import { Box } from "@mui/material";
import { useUserContext } from "../context/userContextProvider";

export default function DiceColumn() {
  const user = useUserContext();

  return (
    <Box sx={{ width: "100%", marginRight: "auto", marginLeft: 0 }}>
      {user ? <p>dice!</p> : <p>no dice?</p>}
    </Box>
  );
}
