import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

// import HomePage from "./pages/HomePage/HomePage";



const Layout = () => {
  return (
    <div>
    
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  );
};

export default Layout;
