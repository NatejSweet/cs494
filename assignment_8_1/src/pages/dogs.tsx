"use client";
import NavBar from "../components/navBar";
import "../app/globals.css";
import { Pet } from "../assets/types/pet";
import { Table } from "@mui/material";
import { getDog } from "../assets/getPet";
import { useEffect, useState } from "react";
export default function Dogs() {
  const [dogs, setDogs] = useState<Pet[]>([]);
  useEffect(() => {
    getDog().then((data: Pet) => setDogs(dogs.concat(data)));
  }, []);
  useEffect(() => console.log(dogs), [dogs]);
  return (
    <main>
      <NavBar />
      <h1>Dogs</h1>
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
          {dogs.map((dog: Pet, i: number) => (
            <tr key={i}>
              <td>{dog.name}</td>
              <td>
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="max-w-1/6 max-h-1/6"
                />
              </td>
              <td>{dog.type}</td>
              <td>{dog.gender}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </main>
  );
}
