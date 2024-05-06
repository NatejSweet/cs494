import { NextApiRequest, NextApiResponse } from 'next'

const factsBank = ['There are 9096 visible stars in the night sky','You can see 9 Galaxies in the Night Sky',
    'The most common type of star is the Red Dwarf', 'Stars can be different colors',
    'Shooting stars are actually meteors']

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ message: string[] }>
) {
    let facts
    if (req.query.count && Number(req.query.count) <= (factsBank.length)) {
        facts = new Set('');
        while (facts.size < Number(req.query.count)) {
            facts.add(factsBank[Math.floor(Math.random() * factsBank.length)]);
        }
    } else {
        facts = new Array(facts);
        while (facts.length-1 < Number(req.query.count)) {
            facts.push(factsBank[Math.floor(Math.random() * factsBank.length)]);
        }
        
    }
    res.status(200).json({ message: Array.from(facts)});
}