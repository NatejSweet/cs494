'use client';
import Image from "next/image";
import MyForm from "../components/myForm";
import { useEffect, useState } from "react";

export default function Home() {
  let languages: string[] = ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'];

  const [entries, setEntries] = useState<{ name: string, language: string, comment: string }[]>([]); 

  function addEntries(entry: { name: string, language: string, comment: string }) {
    setEntries(prevEntries => [...prevEntries, entry]); 
    console.log(entries);
  }
  return (
    <main>
      <MyForm languages={languages} onSubmit={addEntries}></MyForm>
      {/* <MyTable></MyTable> */}
   </main>
  );
}
