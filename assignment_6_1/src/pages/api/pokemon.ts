import { NextApiRequest, NextApiResponse } from "next";
import { Pokemon } from "../../types/Pokemon";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon[]>
) {
  let pokemon: Pokemon[] = [];
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        console.log(response);
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      data.results.map((poke: any) => {
        pokemon.push({
          name: poke.name,
          url: poke.url,
        });
      });
      console.log(pokemon);
      res.status(200).json(pokemon);
    });
}
