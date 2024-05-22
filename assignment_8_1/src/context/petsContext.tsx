import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Pet } from "../assets/types/pet";

interface petContextProps {
  pets: Pet[];
  setPets: (animals: Pet[]) => void;
}

const PetsContext = createContext<petContextProps>({
  pets: [],
  setPets: () => [],
});

export function PetContextProvider({ children }: { children: ReactNode }) {
  const [pets, setPets] = useState<Pet[]>([]);
  useEffect(() => console.log(pets), [pets]);

  return (
    <PetsContext.Provider value={{ pets: pets, setPets: setPets }}>
      {children}
    </PetsContext.Provider>
  );
}

export function usePetContext() {
  return useContext(PetsContext);
}
