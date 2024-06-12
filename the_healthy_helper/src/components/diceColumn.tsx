import { Box, Card, Typography, TextField, Button } from "@mui/material";
import { useUserContext } from "../context/userContextProvider";
import { useState } from "react";

export default function DiceColumn() {
  const user = useUserContext();
  const diceSizes: number[] = [2, 4, 6, 8, 10, 12, 20, 100];
  const [numDice, setNumDice] = useState<number[]>([1, 1, 1, 1, 1, 1, 1, 1]);
  const [rollValues, setRollValues] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const handleNumDiceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newNumDice = [...numDice];
    newNumDice[index] = parseInt(e.target.value);
    setNumDice(newNumDice);
  };

  const handleRoll = (index: number) => () => {
    const newRollValues = [...rollValues];
    let diceSize = diceSizes[index];
    let total = 0;
    for (let i = 0; i < numDice[index]; i++) {
      let result = Math.floor(Math.random() * diceSize) + 1;
      total += result;
    }
    newRollValues[index] = total;
    setRollValues(newRollValues);
  };

  const resetRoll = (index: number) => {
    const newRollValues = [...rollValues];
    newRollValues[index] = 0;
    setRollValues(newRollValues);
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginRight: "auto",
        marginLeft: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {diceSizes.map((size, index) => (
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "5px",
            height: "auto",
            width: "auto",
            border: "1px solid black",
            margin: "5px",
          }}
          key={index}
        >
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
            }}
          >
            <Typography sx={{ height: "100%", alignContent: "center" }}>
              d{size}
            </Typography>
          </Box>
          <TextField
            id="outlined-number"
            value={numDice[index]}
            label="Num Rolls"
            type="number"
            sx={{ width: "fit-content" }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleNumDiceChange(event, index)
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" onClick={handleRoll(index)}>
            Roll
          </Button>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
            }}
          >
            <Typography sx={{ height: "100%", alignContent: "center" }}>
              {rollValues[index]}
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={() => {
              resetRoll(index);
            }}
          >
            X
          </Button>
        </Card>
      ))}
    </Box>
  );
}
