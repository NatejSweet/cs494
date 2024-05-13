import { NextApiRequest, NextApiResponse } from "next";
import { DetailedPokemon } from "../../types/DetailedPokemon";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DetailedPokemon>
) {
  let pokemon: DetailedPokemon;
  let r = await fetch(req.query.pokeUrl as string, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await r.json();
  pokemon = {
    name: data.name,
    url: req.query.pokeURL as string,
    types: data.types.map((type: any) => type.type.name),
    abilities: data.abilities.map((ability: any) => ability.ability.name),
    height: data.height,
    weight: data.weight,
    thumbnailImage: data.sprites.other["official-artwork"].front_default,
  };
  res.status(200).json(pokemon);
}
