"use client";
import NavBar from "@/components/navBar";

import AnimalCardFavorite from "@/components/animalCardFavorite";
import { Animal } from "@/types/animal";
import { useAnimalsContext } from "@/context/animalsContext";
export default function Favorites() {
  const { getFavorites } = useAnimalsContext();
  let favs = getFavorites();
  return (
    <div>
      <NavBar />
      <main>
        {favs.map((fav: Animal, i: number) => (
          <AnimalCardFavorite key={i} animalDetail={fav} />
        ))}
      </main>
    </div>
  );
}
