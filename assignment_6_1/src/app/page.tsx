'use client';
import MyButton from "../components/myButton";
import MyTextField from "../components/myTextField";

import { useState, useEffect } from "react";

export default function Home() {
  const [facts, setFacts] = useState({ message: [] });
  const [count, setCount] = useState(0);

  const fetchFacts = async ()=> {
    fetch(`/api/fact?count=${count}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.json())
      .then(facts => setFacts(facts))
      .catch(error => console.error(error));
  };
  useEffect(() => {
    console.log(facts)
  }, [facts]);

  return(
    <main>
      {facts.message && facts.message.map((fact, index) => <p key={index}>{fact}</p>)}
      <MyTextField placeholder='Number of facts' id='nnumFacts' setFunction={setCount} />
      <MyButton action={fetchFacts}>Get a new fact</MyButton>
    </main>
  );
}