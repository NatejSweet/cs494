import { NextApiRequest, NextApiResponse } from 'next'
import { Pokemon } from '../../types/Pokemon'


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Pokemon[]>
) {
    let pokemon: Pokemon[] = [];
    fetch('https://pokeapi.co/api/v2/pokemon', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            data.results.map((poke: any) => {
                pokemon.push({
                    name: poke.name,
                });
            });
            res.status(200).json(pokemon);
        })
}