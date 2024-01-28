import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

// Outlet component is used where other components are to be dynamically rendered
function Layout() {
    return ( 
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
     );
}

export default Layout;