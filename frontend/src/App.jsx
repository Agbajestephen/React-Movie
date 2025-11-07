import "./css/App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";

function App() {
  const movieNumber = 2;
  return (
    <>
      <div>
        <NavBar />
        {/* ROUTES */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
