import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
    <NavBar categorias={props.categorias}/>
    <Outlet />
    <Footer />
    </div>
  )
}

export default Layout;