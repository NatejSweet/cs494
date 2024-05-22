"use client";
import NavBar from "../components/navBar";
import "../app/globals.css";
import { Pet } from "../assets/types/pet";
import { Table, Container } from "@mui/material";
import { getDog } from "../assets/getPet";
import { useEffect, useState } from "react";
import PetCard from "../components/petCard";
import { PetContextProvider, usePetContext } from "@/context/petsContext";
export default function Dogs() {
  const [dogs, setDogs] = useState<Pet[]>([]);
  const { pets, setPets } = usePetContext();

  function toggleFavorite(pet: Pet) {
    const updatedDogs = dogs.map((dog) => {
      if (dog.name === pet.name) {
        return { ...dog, favorited: !dog.favorited };
      }
      return dog;
    });
    setDogs(updatedDogs);
  }

  // setPets(((prevPets: Pet[]) => [...prevPets, ...dogs]));
  return (
    <main>
      <PetContextProvider>
        <NavBar />
        <h1>Dogs</h1>
        <Container sx={{ display: "flex", flexWrap: "wrap" }}>
          {dogs.length > 0 ? (
            dogs.map((dog, i) => (
              <PetCard key={i} pet={dog} toggleFavorite={toggleFavorite} />
            ))
          ) : (
            <div></div>
          )}
        </Container>
      </PetContextProvider>
    </main>
  );
}
