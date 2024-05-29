'use client';

import NavBar from "@/components/navBar"

import AnimalCard from "@/components/animalCard";

import { useAnimalsContext } from "@/context/animalsContext";

export default function Cats(){
    const { cats } = useAnimalsContext();


    return (
        <div>
            <NavBar />
            <main>
                {cats.map((cat, i)=>(
                    <AnimalCard key={i} animalDetail={cat} />
                ))}
            </main>
        </div>

    )
}