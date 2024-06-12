import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  IconButton,
  Button,
  TextField,
  ButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useUserContext } from "../../context/userContextProvider";
import { usePlayersContext } from "../../context/playerContextProvider";
import { useState, useEffect } from "react";
import { Player } from "../../types/player";
import { set } from "firebase/database";

export default function PlayerCard(props: { player: Player; index: number }) {
  let User = useUserContext();
  let [isTmpButtonDisabled, setIsTmpButtonDisabled] = useState(true);
  let [toggleAddSubButtons, setToggleAddSubButtons] = useState(false); //starting on -
  let [toggleMaxTempButtons, setToggleMaxTempButtons] = useState(true); //starting on max
  let [numChange, setNumChange] = useState(0);
  const { handleHealing, handleTmpHealing, handleDamage } = usePlayersContext();

  const handlePlusClick = () => {
    setToggleAddSubButtons(true);
    setIsTmpButtonDisabled(false);
  };

  const handleMinusClick = () => {
    setToggleAddSubButtons(false);
    setIsTmpButtonDisabled(true);
    setToggleMaxTempButtons(true);
  };

  const handleMaxClick = () => {
    setToggleMaxTempButtons(true);
  };

  const handleTempClick = () => {
    setToggleMaxTempButtons(false);
  };

  const handleApplyClick = () => {
    if (numChange > 0 && handleHealing && handleTmpHealing && handleDamage) {
      if (toggleAddSubButtons) {
        //adding
        if (toggleMaxTempButtons) {
          //max health
          handleHealing(props.index, numChange);
        } else {
          //temp health
          handleTmpHealing(props.index, numChange);
        }
      } else {
        //subtracting
        handleDamage(props.index, numChange);
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
        margin: 0,
        marginTop: "5px",
        marginBottom: "5px",
        border: "1px solid black",
        width: "99%",
      }}
    >
      <Box
        id="top level Box of player"
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
          Name: {props.player.name}
        </Typography>
        <Typography component="div">
          Max HP: {props.player.maxHealth}
        </Typography>
        <Typography component="div">
          Temp HP: {props.player.tmpHealth}
        </Typography>
        <Typography component="div">
          Current HP: {props.player.currentHealth}
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
          <ButtonGroup>
            <ToggleButton
              value="max"
              selected={toggleMaxTempButtons}
              onClick={handleMaxClick}
            >
              max
            </ToggleButton>
            <ToggleButton
              value="temp"
              selected={!toggleMaxTempButtons}
              disabled={isTmpButtonDisabled}
              onClick={handleTempClick}
            >
              temp
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
          alt="playerPhoto"
        />
        <CardContent>
          <Box>
            <Typography component="div">Armor: {props.player.armor}</Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
