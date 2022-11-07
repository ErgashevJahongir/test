import { Link } from "react-router-dom";
import "./navbar.css";
import profil from "../../Assets/Icons/Navbar/icon-личный кабинет.svg";
import notification from "../../Assets/Icons/Navbar/Notification.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__div">
                <div className="navbar__left">
                    <Link href="#" className="navbar__left-logo">
                        Logo
                    </Link>
                </div>
                <div className="navbar__right">
                    <div className="notification">
                        <Link to={"#"}>
                            <img
                                src={notification}
                                width={24}
                                height={24}
                                alt={"notification icon"}
                            />
                            <span className="span">1</span>
                        </Link>
                    </div>
                    <Link to={"#"} className="profil">
                        <div>
                            <p>Личный кабинет</p>
                            <img src={profil} alt={"profil icon"} />
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
