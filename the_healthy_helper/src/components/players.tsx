import { usePlayersContext } from "../context/playerContextProvider";
import { useUserContext } from "../context/userContextProvider";
import { Player } from "../types/player";
import EditablePlayerCard from "./editablePlayerCard";
import PlayerCard from "./playerCard";

export default function Players() {
  const { editPlayers, setEditPlayers, players, setPlayers } =
    usePlayersContext();
  const user = useUserContext();

  if (!players || !setPlayers || editPlayers == null || !setEditPlayers) {
    throw new Error("Players context not found");
  }

  return (
    <>
      {user
        ? players.map((player: Player, index: number) => {
            return editPlayers ? (
              <EditablePlayerCard key={index} index={index} />
            ) : (
              <PlayerCard key={index} player={player} />
            );
          })
        : null}
    </>
  );
}
