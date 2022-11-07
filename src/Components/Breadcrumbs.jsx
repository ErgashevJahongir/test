import { NavLink } from "react-router-dom";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import { product } from "../Pages/ProductsList/ProductsList";

const DynamicUserBreadcrumb = ({ match }) => {
    const newProduct = product.filter(
        (item) => item.key == match.params.productId
    );
    return <span>{newProduct[0].title}</span>;
};

export const Breadcrumbs = () => {
    const routes = [
        { path: "/", breadcrumb: "Заявки" },
        {
            path: "/zakaz",
            breadcrumb: "Оформить заказ",
        },
        {
            path: `/zakaz/:productId`,
            breadcrumb: DynamicUserBreadcrumb,
        },
    ];
    const breadcrumbs = useReactRouterBreadcrumbs(routes);
    return (
        <div className="breadcrumb">
            {breadcrumbs.map(({ match, breadcrumb }, key) =>
                key === 0 ? (
                    <NavLink key={match.pathname} to={match.pathname}>
                        {breadcrumb}
                    </NavLink>
                ) : key === 1 ? (
                    <>
                        {" "}
                        <i class="fa-solid fa-angle-right"></i>{" "}
                        <NavLink key={match.pathname} to={match.pathname}>
                            {breadcrumb}
                        </NavLink>
                    </>
                ) : (
                    <>
                        {" "}
                        <i class="fa-solid fa-angle-right"></i>{" "}
                        <NavLink key={match.pathname} to={match.pathname}>
                            {breadcrumb}
                        </NavLink>
                    </>
                )
            )}
        </div>
    );
};
