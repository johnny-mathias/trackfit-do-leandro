import { Header } from "./components/header";
import { WorkoutCard } from "./components/workout-card";

function App() {
  return (
    <>
      <Header />
      <main>
        <WorkoutCard
          id="1"
          title="FitDance"
          date="20/02/2026"
          durationMinutes={60}
          intensity={4}
        />
        <WorkoutCard
          id="2"
          title="Zumba"
          date="21/02/2026"
          durationMinutes={45}
          intensity={5}
        />
      </main>
    </>
  );
}

export default App;
