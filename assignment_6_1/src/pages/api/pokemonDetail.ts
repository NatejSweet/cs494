import { NextApiRequest, NextApiResponse } from "next"

import { PokemonDetail } from '../../types/PokemonDetail';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{pokemon: PokemonDetail}>
  ) {

    const r = await fetch(req.query.url as string);
    
    const jsonData = await r.json();

    const pokemon: PokemonDetail = {
        name: jsonData.name,
        height: jsonData.height,
        weight: jsonData.weight,
        abilities: jsonData.abilities.map((x: {ability: {name: string}})=>x.ability.name),
        types: jsonData.types.map((x: {type: {name: string}})=>x.type.name),
        image: jsonData.sprites.other["official-artwork"].front_default
    }

    res.status(200).json({ pokemon: pokemon })
  }    