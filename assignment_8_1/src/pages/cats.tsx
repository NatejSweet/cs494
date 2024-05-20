"use client";
import NavBar from "../components/navBar";
import "../app/globals.css";
import { useEffect, useState } from "react";
import { getCat } from "../assets/getPet";
import { Pet } from "../assets/types/pet";
import { Table } from "@mui/material";

export default function Cats() {
  const [cats, setCats] = useState<Pet[]>([]);

  useEffect(() => {
    getCat().then((data: Pet) => setCats(cats.concat(data)));
  }, []);

  useEffect(() => console.log(cats), [cats]);
  return (
    <main>
      <NavBar />
      <h1>Cats</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Photo</th>
            <th>Type</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {cats.map((cat: Pet, i: number) => (
            <tr key={i}>
              <td>{cat.name}</td>
              <td>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="max-w-1/6 max-h-1/6"
                />
              </td>
              <td>{cat.type}</td>
              <td>{cat.gender}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </main>
  );
}
