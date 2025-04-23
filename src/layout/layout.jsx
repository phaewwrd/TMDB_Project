
import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div>
    
      <MainNav />
      <Outlet />
      <Footer/>
     
    </div>
  );
}

export default Layout;
