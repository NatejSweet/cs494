"use client";
import MyButton from "../components/myButton";
import MyTextField from "../components/myTextField";
import { Pokemon } from "../types/Pokemon";
import { DetailedPokemon } from "../types/DetailedPokemon";
import MyTableComponents from "../components/myTableComponents";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { useState, useEffect } from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [selectedPoke, setSelectedPoke] = useState<Pokemon>({
    name: "",
    url: "",
  });
  const [poke, setPoke] = useState<DetailedPokemon>({
    name: "",
    url: "",
    types: [],
    abilities: [],
    height: 0,
    weight: 0,
    thumbnailImage: "",
  });

  const fetchPokemon = async () => {
    fetch(`/api/pokemon`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((pokemon) => setPokemon(pokemon))
      .catch((error) => console.error(error));
  };

  const fetchPoke = async () => {
    let r = await fetch("/api/detailedPoke?pokeUrl=" + selectedPoke.url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(r);
    let data: DetailedPokemon = await r.json();
    console.log(data);

    setPoke({
      name: data.name,
      url: selectedPoke.url,
      types: data.types,
      abilities: data.abilities,
      height: data.height,
      weight: data.weight,
      thumbnailImage: data.thumbnailImage,
    });
  };

  useEffect(() => {
    fetchPokemon().then(() => setSelectedPoke(pokemon[0]));
  }, []);

  useEffect(() => {
    if (!selectedPoke) return;
    fetchPoke();
  }, [selectedPoke]);

  useEffect(() => {
    console.log(poke);
  }, [poke]);

  return (
    <main>
      <h1>Pokemon</h1>
      <FormControl>
        <Select
          onChange={(event) => setSelectedPoke(event.target.value)}
          value={selectedPoke}
        >
          {pokemon.map((p, index) => (
            <MenuItem key={index} value={p}>
              {p.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </main>
  );
}
