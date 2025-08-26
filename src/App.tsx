import { useState } from "react";
import { Header } from "./components/header";
import { WorkoutList } from "./components/workout-list";
import type { Workout } from "./types/workout";

function App() {
  const [list, setList] = useState<Workout[]>([
    {
      id: "1",
      title: "Aula de zumba",
      date: "20/06/2026",
      duration: 50,
      intensity: 1,
    },
    {
      id: "2",
      title: "Aula de fitdance",
      date: "21/06/2026",
      duration: 45,
      intensity: 2,
    },
  ]);

  return (
    <>
      <Header />
      <button
        onClick={() =>
          setList([
            ...list,
            {
              id: "3",
              date: "20/08/2026",
              duration: 60,
              intensity: 5,
              title: "jiu-jitsu",
            },
          ])
        }
      >
        adicionar aula
      </button>
      <WorkoutList workoutList={list} />
    </>
  );
}

export default App;
