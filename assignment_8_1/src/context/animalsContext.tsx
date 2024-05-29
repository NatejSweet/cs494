"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { Animal } from "@/types/animal";

import { getAnimals } from "@/assets/getPet";

import { db } from "../app/firebase";
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore";

interface animalContextProps {
  animals: Animal[];
  cats: Animal[];
  dogs: Animal[];
  getFavorites: () => Animal[];
  featured: Animal | null;
}

const AnimalsContext = createContext<animalContextProps>({
  animals: [],
  dogs: [],
  cats: [],
  getFavorites: () => [],
  featured: null,
});

export function AnimalsContextProvider({ children }: { children: ReactNode }) {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [cats, setCats] = useState<Animal[]>([]);
  const [dogs, setDogs] = useState<Animal[]>([]);
  const [featured, setFeatured] = useState<Animal | null>(null);

  const catCount = 5;
  const dogCount = 5;

  useEffect(() => {
    console.log(animals);
    setCats(getCats());
    setDogs(getDogs());
    if (!featured) {
      setFeatured(animals[randomInt(animals.length)]);
    }
    writeAnimals(animals);
  }, [animals]);

  useEffect(() => {
    if (animals.length == 0) {
      initAnimals();
    }
  }, []);

  function writeAnimals(animals: Animal[]) {
    for (let i = 0; i < animals.length; i++) {
      setDoc(doc(db, "animals", i.toString()), animals[i]);
    }
  }

  async function readAnimals() {
    let animals: Animal[] = [];
    for (let i = 0; i < dogCount + catCount; i++) {
      const docRef = doc(db, "animals", i.toString());
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        animals.push(docSnap.data() as Animal);
      } else {
        console.log("No such document!");
      }
    }
    return animals;
  }
  function randomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  async function initAnimals() {
    const animals = await readAnimals();
    if (animals.length == 0) {
      getAnimals(catCount, dogCount).then((res) => setAnimals(res));
    } else {
      setAnimals(animals);
    }
  }

  function getDogs() {
    console.log(animals);
    return animals.filter((animal: Animal) => animal.type == "dog");
  }

  function getCats() {
    return animals.filter((animal) => animal.type == "cat");
  }
  function getFavorites() {
    return animals.filter((animal) => animal.favorited == true);
  }

  return (
    <AnimalsContext.Provider
      value={{
        animals: animals,
        cats: cats,
        dogs: dogs,
        getFavorites: getFavorites,
        featured: featured,
      }}
    >
      {children}
    </AnimalsContext.Provider>
  );
}

export function useAnimalsContext() {
  return useContext(AnimalsContext);
}
