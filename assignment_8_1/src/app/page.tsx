"use client";

import NavBar from "@/components/navBar";
import { useAnimalsContext } from "@/context/animalsContext";
import { useEffect } from "react";
import AnimalCard from "@/components/animalCard";
export default function Home() {
  const { animals, featured } = useAnimalsContext();

  useEffect(() => {
    console.log(animals);
  }, [animals]);

  return (
    <main>
      <NavBar />
      {featured ? <AnimalCard animalDetail={featured} /> : null}
    </main>
  );
}
