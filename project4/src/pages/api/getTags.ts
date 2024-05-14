import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";

async function getApiKey() {
  try {
    const apiKey = await fs.readFile("./private/apikey.txt", "utf-8");
    return apiKey.trim();
  } catch (err) {
    console.error("Error reading API key:", err);
    throw err;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = await getApiKey();
  let r = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=${apiKey}&format=json`,
    {
      method: "GET",
    }
  );
  let d = await r.json();
  let genres: string[] = [];
  d = d.toptags.tag.map((tag: any) => {
    genres.push(tag.name);
  });
  res.status(200).json({
    genres: genres,
  });
}
