import { useState } from "react";
import { Header } from "./components/header";
import { WorkoutForm } from "./components/workout-form";
import { WorkoutList } from "./components/workout-list";
import type { Workout } from "./types/workout";

function App() {
  const [list, setList] = useState<Workout[]>([]);

  function addWorkout(workout: Workout): void {
    setList((prev) => [...prev, workout]);
  }

  return (
    <>
      <Header />
      <WorkoutForm onAdd={addWorkout} />
      <WorkoutList workoutList={list} />
    </>
  );
}

export default App;
