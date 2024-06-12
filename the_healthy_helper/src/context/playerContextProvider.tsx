import { createContext, useContext, useState, ReactNode, use } from "react";
import { Player } from "../types/player";
import { useUserContext } from "./userContextProvider";
import { db } from "../app/firebase";
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore";
import { useEffect } from "react";
const playersContext = createContext<
  | {
      players: Player[] | null;
      setPlayers:
        | React.Dispatch<React.SetStateAction<Player[] | null>>
        | undefined;
      editPlayers: boolean;
      setEditPlayers: (editPlayers: boolean) => void;
      handleHealing: (index: number, health: number) => void;
      handleTmpHealing: (index: number, health: number) => void;
      handleDamage: (index: number, health: number) => void;
    }
  | undefined
>(undefined);

export function PlayersContextProvider({ children }: { children: ReactNode }) {
  const user = useUserContext();
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

  const handleHealing = (index: number, health: number) => {
    if (players) {
      const updatedPlayers = [...players];
      updatedPlayers[index] = {
        ...updatedPlayers[index],
        currentHealth: Math.min(
          updatedPlayers[index].maxHealth,
          updatedPlayers[index].currentHealth + health
        ),
      };
      setPlayers(updatedPlayers);
    }
  };

  const handleTmpHealing = (index: number, health: number) => {
    if (players) {
      const updatedPlayers = [...players];
      updatedPlayers[index] = {
        ...updatedPlayers[index],
        tmpHealth: updatedPlayers[index].tmpHealth + health,
      };
      setPlayers(updatedPlayers);
    }
  };

  const handleDamage = (index: number, health: number) => {
    if (players) {
      const updatedPlayers = [...players];
      console.log(updatedPlayers);
      console.log(index);
      let remainingDamage = health;

      // Subtract from tmpHealth first
      if (updatedPlayers[index].tmpHealth > 0) {
        if (updatedPlayers[index].tmpHealth >= remainingDamage) {
          updatedPlayers[index].tmpHealth -= remainingDamage;
          remainingDamage = 0;
        } else {
          remainingDamage -= updatedPlayers[index].tmpHealth;
          updatedPlayers[index].tmpHealth = 0;
        }
      }

      // If there's remaining damage, subtract it from currentHealth
      if (remainingDamage > 0) {
        updatedPlayers[index].currentHealth = Math.max(
          0,
          updatedPlayers[index].currentHealth - remainingDamage
        );
      }

      setPlayers(updatedPlayers);
    }
  };

  const updatePlayerData = () => {
    if (user?.uid) {
      const docRef = doc(db, "players", user.uid);
      if (players) {
        const playerData = players.map((player) => ({
          name: player.name,
          armor: player.armor,
          maxHealth: player.maxHealth,
        }));
        setDoc(docRef, { playerData });
      }
    }
  };

  useEffect(() => {
    if (user?.uid) {
      const docRef = doc(db, "players", user.uid);
      getDoc(docRef).then((doc) => {
        if (doc.exists()) {
          const playerData = doc.data().playerData;
          const newPlayers = playerData.map((player: Player) => ({
            name: player.name,
            armor: player.armor,
            maxHealth: player.maxHealth,
            currentHealth: player.maxHealth,
            tmpHealth: 0,
          }));

          setPlayers(newPlayers);
        }
      });
    }
  }, [user?.uid]);

  useEffect(() => {
    updatePlayerData();
  }, [players]);

  return (
    <playersContext.Provider
      value={{
        players,
        setPlayers,
        editPlayers,
        setEditPlayers,
        handleHealing,
        handleTmpHealing,
        handleDamage,
      }}
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
    handleHealing: context?.handleHealing,
    handleTmpHealing: context?.handleTmpHealing,
    handleDamage: context?.handleDamage,
  };
}
