import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
function MainPage() {
  return (
    <>
      <NavBar />
      <Outlet></Outlet>
      {/* Fotter */}
    </>
  );
}

export default MainPage;
