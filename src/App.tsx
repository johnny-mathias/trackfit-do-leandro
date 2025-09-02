import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { AddWorkout } from "./pages/add-workout";
import { Home } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddWorkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
