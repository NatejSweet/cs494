'use client';
import MyButton from "../components/myButton";
import MyTextField from "../components/myTextField";
import { Pokemon } from "../../types/Pokemon";
import MyTableComponents from "../components/myTableComponents";

import { useState, useEffect } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const fetchPokemon = async ()=> {
    fetch(`/api/pokemon`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.json())
      .then(pokemon => setPokemon(pokemon))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchPokemon();
  },[]);

  return(
    <main>
      <h1>Pokemon</h1>
      {/* <MyTableComponents headers={['Number', 'Name', 'Type', 'Abilities', 'Weakness', 'Height', 'Weight', 'Image']} data={pokemon} /> */}
      <MyTableComponents headers={['Name']} data={pokemon} />
    </main>
  );
}