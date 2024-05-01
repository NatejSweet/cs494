'use client';
import MyTable from "../components/myTable";
import MyForm from "../components/myForm";
import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState<{ task: string, urgency: number, taskId: number }[]>([]);
  const [taskId, setTaskId] = useState(0); // Initialize taskId state

  const headers = ["Task","Urgency","Complete"];
  const filteredTasks = tasks.filter(task => task.urgency > 0).sort((a, b) => b.urgency - a.urgency);

  return (
    <main>
      <header>
        <h1>My Task Manager</h1>
      </header>
      
      <MyForm onSubmit={(task, urgency) => {
        setTasks([...tasks, { task, urgency, taskId }]);
        taskId++;//NOT WORKING FUUUUUCK
        console.log("taskId: "+taskId);

      }} />
      
      <MyTable headers={headers} data={filteredTasks} setTasks = {setTasks} />
    </main>
  );
}