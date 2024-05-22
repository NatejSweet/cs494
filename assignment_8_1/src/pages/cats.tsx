"use client";
import NavBar from "../components/navBar";
import "../app/globals.css";
import { useEffect, useState } from "react";
import { getCat } from "../assets/getPet";
import { Pet } from "../assets/types/pet";
import { Table, Container } from "@mui/material";
import PetCard from "../components/petCard";
import { PetContextProvider } from "../context/petsContext";
import { usePetsContext } from "@/context/petsContext";
export default function Cats() {
  const [cats, setCats] = useState<Pet[]>([]);

  function toggleFavorite(pet: Pet) {
    const updatedCats = cats.map((cat) => {
      if (cat.name === pet.name) {
        return { ...cat, favorited: !cat.favorited };
      }
      return cat;
    });
    setCats(updatedCats);
  }

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      getCat().then((data: Pet) => setCats((prevCats) => [...prevCats, data]));
    }
  }, []);

  useEffect(() => console.log(cats), [cats]);
  return (
    <main>
      <PetContextProvider>
        <NavBar />
        <h1>Cats</h1>
        <Container sx={{ display: "flex", flexWrap: "wrap" }}>
          {cats.length > 0 ? (
            cats.map((cat, i) => (
              <PetCard key={i} pet={cat} toggleFavorite={toggleFavorite} />
            ))
          ) : (
            <div></div>
          )}
        </Container>
      </PetContextProvider>
    </main>
  );
}
