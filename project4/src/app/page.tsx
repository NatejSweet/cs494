"use client";
import { useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { album } from "../types/album";

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
      <FormControl className="w-full">
        <InputLabel>Choose a tag</InputLabel>
        <Select
          value={activeTag}
          onChange={(e) => setActiveTag(e.target.value)}
        >
          {tags.map((tag, index) => (
            <MenuItem key={index} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Artist</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {albums.map((album, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img src={album.image} alt={album.name} />
                </TableCell>
                <TableCell>{album.name}</TableCell>
                <TableCell>{album.artist}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
}
