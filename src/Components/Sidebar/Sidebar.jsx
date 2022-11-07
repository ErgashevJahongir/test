import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidenav">
            <NavLink to={"/"} className={"sidebar__item"}>
                <i className="fa-solid fa-house"></i>
                <p>Главная</p>
            </NavLink>
            <NavLink to={"/zakazs"} className={"sidebar__item"}>
                <i className="fa-regular fa-file-lines"></i>
                <p>Заказы</p>
            </NavLink>
            <NavLink to={"/products"} className={"sidebar__item"}>
                <i className="fa-solid fa-bag-shopping"></i>
                <p>Товары</p>
            </NavLink>
            <NavLink to={"/call-center"} className={"sidebar__item"}>
                <i className="fa-regular fa-star"></i>
                <p>Отзывы</p>
            </NavLink>
            <NavLink to={"/zakaz"} className={"sidebar__item"}>
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Оформить заказ</p>
            </NavLink>
        </div>
    );
};

export default Sidebar;
