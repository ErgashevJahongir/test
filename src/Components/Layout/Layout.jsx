import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function LayoutMenu() {
    return (
        <>
            <Navbar />
            <main className="main">
                <Sidebar />
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default LayoutMenu;
