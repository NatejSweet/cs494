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
import { useUserContext } from "../context/userContextProvider";
import { useState, useEffect } from "react";
import { Player } from "../types/player";

export default function PlayerCard(props: Player) {
  let User = useUserContext();
  let [isTmpButtonDisabled, setIsTmpButtonDisabled] = useState(true);
  let [toggleAddSubButtons, setToggleAddSubButtons] = useState(false);
  let [toggleMaxTempButtons, setToggleMaxTempButtons] = useState(true);

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

  return User ? (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: 0,
        height: "auto",
        marginRight: 0,
        marginLeft: "auto",
        width: "100%",
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
          Name: {props.name}
        </Typography>
        <Typography component="div">Max HP: {props.maxHealth}</Typography>
        <Typography component="div">Temp HP: {props.armor}</Typography>
        <Typography component="div">
          Current HP: {props.currentHealth}
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
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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
            <Typography component="div">Armor: {props.armor}</Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  ) : (
    <p>no player</p>
  );
}
