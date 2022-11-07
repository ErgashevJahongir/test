import { Breadcrumbs } from "../../Components/Breadcrumbs";
import ProductCard from "../../Components/ProductCard";
import "./productsList.css";
import rasm1 from "../../Assets/Images/Product/image1.svg";
import rasm2 from "../../Assets/Images/Product/image2.svg";
import rasm3 from "../../Assets/Images/Product/image3.svg";
import rasm4 from "../../Assets/Images/Product/image4.svg";
import { Pagination } from "../../Components/Pagination";
import { useEffect, useState } from "react";

const productList = [
    {
        key: 1,
        src: rasm1,
        title: "Смартфон Samsung Galaxy A21S 4 64 Gb Black",
        price: "7 300 000 сум ",
        rasPrice: "от 2 435 000 сум",
        month: "24",
        discrioption: `Тип: моноблок (классический)
                        Стандарт: 2G, 3G, 4G (LTE), 5G
                        Операционная система: iOS 14
                        `,
        arr: [
            {
                id: 1,
                iconName: <i className="fa-solid fa-gift"></i>,
                bgColor: "#A2AEDB",
                color: "#3d639d",
            },
            {
                id: 2,
                iconName: <i className="fa-solid fa-percent"></i>,
                bgColor: "#FFBD95",
                color: "rgb(255,100,34)",
            },
        ],
    },
    {
        key: 2,
        src: rasm2,
        title: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
        discrioption: `Тип: моноблок (классический)
                        Стандарт: 2G, 3G, 4G (LTE), 5G
                        Операционная система: iOS 14
                        `,
        price: "7 300 000 сум ",
        rasPrice: "от 2 435 000 сум",
        month: "24",
        arr: [
            {
                id: 1,
                iconName: <i className="fa-solid fa-share"></i>,
                bgColor: "#F39DBD",
                color: "rgb(232,50,116)",
            },
            {
                id: 2,
                iconName: <i className="fa-solid fa-percent"></i>,
                bgColor: "#FFBD95",
                color: "rgb(255,100,34)",
            },
        ],
    },
    {
        key: 3,
        src: rasm3,
        title: "Наушники Apple Airpods 2 new version",
        price: "7 300 000 сум ",
        rasPrice: "от 2 435 000 сум",
        month: "24",
        discrioption: `Тип: моноблок (классический)
                        Стандарт: 2G, 3G, 4G (LTE), 5G
                        Операционная система: iOS 14
                        `,
        arr: [
            {
                id: 1,
                iconName: <i className="fa-solid fa-share"></i>,
                bgColor: "#F39DBD",
                color: "rgb(232,50,116)",
            },
        ],
    },
    {
        key: 4,
        src: rasm4,
        title: "Samsung Galaxy Z Fold 8 256Gb Silver",
        price: "7 300 000 сум ",
        rasPrice: "от 2 435 000 сум",
        month: "24",
        discrioption: `Тип: моноблок (классический)
                        Стандарт: 2G, 3G, 4G (LTE), 5G
                        Операционная система: iOS 14
                        `,
        arr: [
            {
                id: 1,
                iconName: <i className="fa-solid fa-gift"></i>,
                bgColor: "#A2AEDB",
                color: "#3d639d",
            },
            {
                id: 2,
                iconName: <i className="fa-solid fa-percent"></i>,
                bgColor: "#FFBD95",
                color: "rgb(255,100,34)",
            },
        ],
    },
    {
        key: 5,
        src: rasm2,
        title: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
        discrioption: `Тип: моноблок (классический)
                        Стандарт: 2G, 3G, 4G (LTE), 5G
                        Операционная система: iOS 14
                        `,
        price: "7 300 000 сум ",
        rasPrice: "от 2 435 000 сум",
        month: "24",
        arr: [
            {
                id: 1,
                iconName: <i className="fa-solid fa-share"></i>,
                bgColor: "#F39DBD",
                color: "rgb(232,50,116)",
            },
            {
                id: 1,
                iconName: <i className="fa-solid fa-gift"></i>,
                bgColor: "#A2AEDB",
                color: "#3d639d",
            },
        ],
    },
    {
        key: 6,
        src: rasm1,
        title: "Смартфон Samsung Galaxy A21S 4 64 Gb Black",
        price: "7 300 000 сум ",
        rasPrice: "от 2 435 000 сум",
        month: "24",
        discrioption: `Тип: моноблок (классический)
                        Стандарт: 2G, 3G, 4G (LTE), 5G
                        Операционная система: iOS 14
                        `,
        arr: [
            {
                id: 1,
                iconName: <i className="fa-solid fa-gift"></i>,
                bgColor: "#A2AEDB",
                color: "#3d639d",
            },
            {
                id: 2,
                iconName: <i className="fa-solid fa-percent"></i>,
                bgColor: "#FFBD95",
                color: "rgb(255,100,34)",
            },
        ],
    },
    {
        key: 7,
        src: rasm2,
        title: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
        discrioption: `Тип: моноблок (классический)
                        Стандарт: 2G, 3G, 4G (LTE), 5G
                        Операционная система: iOS 14
                        `,
        price: "7 300 000 сум ",
        rasPrice: "от 2 435 000 сум",
        month: "24",
        arr: [
            {
                id: 1,
                iconName: <i className="fa-solid fa-share"></i>,
                bgColor: "#F39DBD",
                color: "rgb(232,50,116)",
            },
            {
                id: 2,
                iconName: <i className="fa-solid fa-percent"></i>,
                bgColor: "#FFBD95",
                color: "rgb(255,100,34)",
            },
        ],
    },
    {
        key: 8,
        src: rasm3,
        title: "Наушники Apple Airpods 2 new version",
        price: "7 300 000 сум ",
        rasPrice: "от 2 435 000 сум",
        month: "24",
        discrioption: `Тип: моноблок (классический)
                        Стандарт: 2G, 3G, 4G (LTE), 5G
                        Операционная система: iOS 14
                        `,
        arr: [
            {
                id: 1,
                iconName: <i className="fa-solid fa-gift"></i>,
                bgColor: "#A2AEDB",
                color: "#3d639d",
            },
            {
                id: 2,
                iconName: <i className="fa-solid fa-percent"></i>,
                bgColor: "#FFBD95",
                color: "rgb(255,100,34)",
            },
        ],
    },
    {
        key: 9,
        src: rasm4,
        title: "Samsung Galaxy Z Fold 8 256Gb Silver",
        price: "7 300 000 сум ",
        rasPrice: "от 2 435 000 сум",
        month: "24",
        discrioption: `Тип: моноблок (классический)
                        Стандарт: 2G, 3G, 4G (LTE), 5G
                        Операционная система: iOS 14
                        `,
        arr: [
            {
                id: 1,
                iconName: <i className="fa-solid fa-share"></i>,
                bgColor: "#F39DBD",
                color: "rgb(232,50,116)",
            },
        ],
    },
    {
        key: 10,
        src: rasm2,
        title: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
        discrioption: `Тип: моноблок (классический)
                    Стандарт: 2G, 3G, 4G (LTE), 5G
                    Операционная система: iOS 14
                    `,
        price: "7 300 000 сум ",
        rasPrice: "от 2 435 000 сум",
        month: "24",
        arr: [
            {
                id: 1,
                iconName: <i className="fa-solid fa-share"></i>,
                bgColor: "#F39DBD",
                color: "rgb(232,50,116)",
            },
            {
                id: 1,
                iconName: <i className="fa-solid fa-gift"></i>,
                bgColor: "#A2AEDB",
                color: "#3d639d",
            },
            {
                id: 2,
                iconName: <i className="fa-solid fa-percent"></i>,
                bgColor: "#FFBD95",
                color: "rgb(255,100,34)",
            },
        ],
    },
];
const addPrduct = (productList, son) => {
    let arr = [];
    for (let index = 0; index < son; index++) {
        arr = [
            ...arr,
            { ...productList[Math.floor(Math.random() * 10)], key: index },
        ];
    }
    return arr;
};

export const product = [...addPrduct(productList, 120)];

const ProductsList = () => {
    const [current, setCurrent] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [pageProduct, setPageProduct] = useState([]);

    useEffect(() => {
        setTotalItems(
            (product.length / 10) % 0
                ? Math.floor(product.length / 10) + 1
                : product.length / 10
        );
        setPageProduct(
            product.slice((current - 1) * 10, (current - 1) * 10 + 10)
        );
    }, [current]);

    console.log(pageProduct);

    return (
        <section className="productList">
            <Breadcrumbs />
            <h2>Оформить заказ</h2>
            <div className="searchComp">
                <input
                    className="search"
                    placeholder="Поиск по названию товара"
                />
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="products-list">
                <h3>Все товары ({product.length})</h3>
                <div className="products">
                    {pageProduct?.map((item) => {
                        return (
                            <ProductCard
                                keySon={item.key}
                                arr={item.arr}
                                imgSrc={item.src}
                                title={item.title}
                                price={item.price}
                                rasPrice={item.rasPrice}
                                month={item.month}
                            />
                        );
                    })}
                </div>
            </div>
            <Pagination
                pageSize={10}
                current={current}
                setCurrent={setCurrent}
                totalItems={totalItems}
            />
        </section>
    );
};

export default ProductsList;
