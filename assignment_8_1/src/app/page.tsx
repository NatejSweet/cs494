"use client";
import NavBar from "../components/navBar";
import { PetContextProvider } from "@/context/petsContext";

export default function Home() {
  return (
    <PetContextProvider>
      <main>
        <NavBar />
      </main>
    </PetContextProvider>
  );
}
