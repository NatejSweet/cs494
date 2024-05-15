import { NextApiRequest, NextApiResponse } from "next"

import { Pokemon } from '../../types/Pokemon';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{pokemon: Pokemon[]}>
  ) {

    const pokemonArray: Pokemon[] = [];
    const r = await fetch("https://pokeapi.co/api/v2/pokemon");
    
    
    const jsonData = await r.json();
    for (let i = 0; i < jsonData.results.length; i++){
      pokemonArray.push(jsonData.results[i] as Pokemon);
    }


    res.status(200).json({ pokemon: pokemonArray })
  }    