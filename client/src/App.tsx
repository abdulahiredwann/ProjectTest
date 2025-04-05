import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Layouts/MainPage";
import Home from "./Pages/Home";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Home />} /> {/* Default child route */}
          {/* Define other nested routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
