'use client';
import Image from "next/image";
import MyForm from "../components/myForm";
import MyTable from "../components/myTable";
import { useEffect, useState } from "react";
import { headers } from "next/headers";
import '../app/globals.css';

export default function Home() {
  const languages: string[] = ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'];
  // let bios: { name: string, language: string, comment: string }[] = [];
  let headers = ['Name', 'Language', 'Comment','Rating',  'Remove'];

  const [entries, setEntries] = useState<{ name: string, language: string, comment: string, rating: number }[]>([]); 

  function deleteEntries(index: number) {
    setEntries(prevEntries => prevEntries.filter((_, i) => i !== index));


  }

  function addEntries(entry: { name: string, language: string, comment: string, rating: number}) {
    setEntries(prevEntries => [...prevEntries, entry]); 
  }


  return (
    <main className="flex">
      <MyForm languages={languages} onSubmit={addEntries}></MyForm>
      <MyTable headers={headers} data={entries} deleteEntries={deleteEntries}></MyTable>
   </main>
  );
}
