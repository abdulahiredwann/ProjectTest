import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Layouts/MainPage";
import Home from "./Pages/Home";
import "./App.css";
import SignUp from "./Pages/Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Home />} /> {/* Default child route */}
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
