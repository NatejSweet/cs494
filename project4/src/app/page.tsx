"use client";
import { useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Card,
  Box,
  Typography,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import { album } from "../types/album";
import MySelect from "../components/mySelect";
import MyAlbums from "../components/myAlbums";

export default function Home() {
  const [tags, setTags] = useState<string[]>([]);
  const [activeTag, setActiveTag] = useState<string>("");
  const [albums, setAlbums] = useState<album[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let r = await fetch("api/getTags");
      let d = await r.json();
      setTags(d.genres);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchAlbums = async () => {
      let r = await fetch(`api/getAlbumsFromTag?tag=${activeTag}`);
      let d = await r.json();
      setAlbums(d.albums);
    };

    fetchAlbums();
  }, [activeTag]);

  return (
    <main>
      <MySelect tags={tags} activeTag={activeTag} setActiveTag={setActiveTag} />
      <MyAlbums albums={albums} />
    </main>
  );
}
