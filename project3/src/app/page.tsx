'use client';
import Image from "next/image";
import MyForm from "../components/myForm";
import MyTable from "../components/myTable";
import { useEffect, useState } from "react";
import { headers } from "next/headers";
import '../app/globals.css';

export default function Home() {
  let headers = ['Task', 'Urgency','Completes'];

  const [entries, setEntries] = useState<{ task: string, urgency: number }[]>([]); 

  function deleteEntries(index: number) {
    setEntries(prevEntries => prevEntries.filter((_, i) => i !== index));


  }

  function addEntries(entry: { task: string, urgency: number }) {
    const newEntries = [...entries, entry];
    newEntries.sort((a, b) => b.urgency - a.urgency);
    setEntries(newEntries);
}

  return (
    <main className="flex flex-col min-w-full">
      <header>
        <h1 className="text-4xl"> My Task Mangager </h1>
      </header>
      <br/>
      <div className="flex flex-row min-w-full">
        <MyForm onSubmit={addEntries}></MyForm>
        <MyTable headers={headers} data={entries} deleteEntries={deleteEntries}></MyTable>
      </div>
    </main>
  );
}
