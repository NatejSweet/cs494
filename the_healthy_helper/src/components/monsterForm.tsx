import { TextField, Box, Button } from "@mui/material";
export default function MonsterForm() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "auto",
        width: "auto",
        margin: "5px",
        justifyContent: "space-between",
      }}
    >
      <TextField
        id="outlined-number"
        label="Hp"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-number"
        label="Armor"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-number"
        label="Number to Spawn"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained">Add Monsters</Button>
    </Box>
  );
}
