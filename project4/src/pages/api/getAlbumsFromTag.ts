import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import { album } from "../../types/album";

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
    `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${req.query.tag}&api_key=${apiKey}&format=json&format=json`,
    {
      method: "GET",
    }
  );
  let d = await r.json();
  let albums: album[] = [];
  d.albums.album.map((album: any) => {
    albums.push({
      name: album.name,
      artist: album.artist.name,
      image: album.image[2]["#text"],
    });
  });
  res.status(200).json({ albums: albums });
}
