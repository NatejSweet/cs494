import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { auth } from "../app/firebase";
import firebase from "firebase/app";
import { Player } from "../types/player";

const playersContext = createContext<
  | {
      players: Player[] | null;
      setPlayers:
        | React.Dispatch<React.SetStateAction<Player[] | null>>
        | undefined;
      editPlayers: boolean;
      setEditPlayers: (editPlayers: boolean) => void;
    }
  | undefined
>(undefined);

export function PlayersContextProvider({ children }: { children: ReactNode }) {
  const [players, setPlayers] = useState<Player[] | null>([
    {
      name: "New Player",
      maxHealth: 10,
      armor: 10,
      currentHealth: 10,
      tmpHealth: 0,
    },
  ]);
  const [editPlayers, setEditPlayers] = useState(false);
  return (
    <playersContext.Provider
      value={{ players, setPlayers, editPlayers, setEditPlayers }}
    >
      {children}
    </playersContext.Provider>
  );
}

export function usePlayersContext() {
  const context = useContext(playersContext);
  return {
    players: context?.players,
    setPlayers: context?.setPlayers,
    editPlayers: context?.editPlayers,
    setEditPlayers: context?.setEditPlayers,
  };
}
