"use client";

import NavBar from "@/components/navBar";

import AnimalCard from "@/components/animalCard";

import { useAnimalsContext } from "@/context/animalsContext";

export default function Dogs() {
  const { dogs } = useAnimalsContext();

  return (
    <div>
      <NavBar />
      <main>
        {dogs.map((dog, i) => (
          <AnimalCard key={i} animalDetail={dog} />
        ))}
      </main>
    </div>
  );
}
