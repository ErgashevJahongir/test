import { Route, Routes } from "react-router-dom";
import Error404 from "../Components/ErrorPages/Error404";
import LayoutMenu from "../Components/Layout/Layout";
import Product from "../Pages/Product/Product";
import ProductsList from "../Pages/ProductsList/ProductsList";

const RoutesPage = () => {
    return (
        <Routes>
            <Route element={<LayoutMenu />}>
                <Route index element={<ProductsList />} />
                <Route path={"zakaz"} element={<ProductsList />} />
                <Route path={"zakaz/:productId"} element={<Product />} />
                <Route path={"*"} element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default RoutesPage;
