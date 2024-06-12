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
        flexDirection: "row",
        padding: "5px",
        height: "auto",
        margin: "5px",
        border: "1px solid black",
        width: "95%",
      }}
    >
      <Box
        id="top level Box of monster"
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 0,
          marginLeft: 0,
          marginRight: 0,
          boxSizing: "content-box",
          "@media (min-width:600px)": {
            paddingLeft: 0,
            paddingRight: 0,
          },
        }}
      >
        <Typography component="div" variant="h6">
          Name: {props.monster.name}
        </Typography>
        <Typography component="div">
          Max HP: {props.monster.maxHealth}
        </Typography>
        <Typography component="div">
          Current HP: {props.monster.currentHealth}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <ButtonGroup>
            <ToggleButton
              value="plus"
              selected={toggleAddSubButtons}
              onClick={handlePlusClick}
            >
              +
            </ToggleButton>
            <ToggleButton
              value="minus"
              selected={!toggleAddSubButtons}
              onClick={handleMinusClick}
            >
              -
            </ToggleButton>
          </ButtonGroup>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            id="outlined-basic"
            label={toggleAddSubButtons ? "Healing" : "Damage"}
            value={numChange}
            onChange={(e) => setNumChange(Number(e.target.value))}
            variant="outlined"
            sx={{ width: "70%" }}
          />
          <Button sx={{ width: "30%" }} onClick={handleApplyClick}>
            Apply
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 0,
          margin: 0,
        }}
      >
        <CardMedia
          component="img"
          sx={{ maxWidth: "30%", maxHeight: "70%" }}
          image="#"
          alt="monsterPhoto"
        />
        <CardContent>
          <Box>
            <Typography component="div">
              Armor: {props.monster.armor}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
