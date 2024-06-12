import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  ButtonGroup,
  ToggleButton,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Monster } from "../../types/monster";
import { useMonstersContext } from "../../context/monstersContextProvider";
import { set } from "firebase/database";
export default function MonsterCard(props: {
  monster: Monster;
  index: number;
}) {
  let [toggleAddSubButtons, setToggleAddSubButtons] = useState(false);
  let [numChange, setNumChange] = useState(0);
  let { monsters, setMonsters } = useMonstersContext();
  const handlePlusClick = () => {
    setToggleAddSubButtons(true);
  };

  const handleMinusClick = () => {
    setToggleAddSubButtons(false);
  };

  const handleApplyClick = () => {
    if (numChange > 0) {
      if (toggleAddSubButtons) {
        props.monster.currentHealth += numChange;
        if (props.monster.currentHealth > props.monster.maxHealth) {
          props.monster.currentHealth = props.monster.maxHealth;
        }
      } else {
        props.monster.currentHealth -= numChange;
        if (props.monster.currentHealth <= 0) {
          if (monsters && setMonsters) {
            let updatedMonsters = [...monsters];
            updatedMonsters.splice(props.index, 1);
            setMonsters(updatedMonsters);
          }
        }
      }
      setNumChange(0);
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "5px",
        height: "auto",
        margin: "5px",
        border: "1px solid black",
        width: "95%",
      }}
    >
      <Typography component="div" variant="h6">
        Name: {props.monster.name}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            width: "40%",
          }}
        >
          <Typography component="div">Armor: {props.monster.armor}</Typography>
          <Typography component="div">
            Max HP: {props.monster.maxHealth}
          </Typography>
          <Typography component="div">
            Current HP: {props.monster.currentHealth}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <ButtonGroup>
              <ToggleButton
                value="plus"
                selected={toggleAddSubButtons}
                onClick={handlePlusClick}
                sx={{ width: "50%", margin: "3px" }}
              >
                +
              </ToggleButton>
              <ToggleButton
                value="minus"
                selected={!toggleAddSubButtons}
                onClick={handleMinusClick}
                sx={{ width: "50%", margin: "3px" }}
              >
                -
              </ToggleButton>
            </ButtonGroup>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                flexGrow: 1,
                flexShrink: 1,
                width: "20%",
                margin: "3px",
                height: "90%",
                minWidth: "50px",
              }}
              onClick={handleApplyClick}
            >
              Apply
            </Button>
            <TextField
              id="outlined-basic"
              label={toggleAddSubButtons ? "Healing" : "Damage"}
              value={numChange}
              onChange={(e) => setNumChange(Number(e.target.value))}
              variant="outlined"
              sx={{ flexGrow: 4, flexShrink: 1, width: "80%", margin: "3px" }}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
