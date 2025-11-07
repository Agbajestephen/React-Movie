import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
  const movieNumber = 2;
  return (
    <>
    {/* ROUTES */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
