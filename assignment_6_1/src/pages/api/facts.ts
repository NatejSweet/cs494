import { NextApiRequest, NextApiResponse } from "next"

const facts: string[] = [
  "Bananas are berries.",
  "You are looking at a website.",
  "Crabs are delicious."
]

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{facts: string[]}>
  ) {

    const randomFacts: string[] = [];

    const count: number = Number(req.query.count);
    console.log(count);

    for (let i = 0; i < count; i++){
      randomFacts.push(facts[Math.floor(Math.random() * facts.length)]);
    }

    res.status(200).json({ facts: randomFacts });
  }