import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { Breadcrumbs } from "../../Components/Breadcrumbs";
import { product } from "./../ProductsList/ProductsList";
import "./product.css";

const Product = () => {
    const { productId } = useParams();
    const [newProduct, setNewProduct] = useState({});

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        const productNew = product.filter((item) => item.key == productId);
        setNewProduct(productNew[0]);
    }, [productId]);

    return (
        <div className="product-card">
            <Breadcrumbs />
            <div className="product">
                <h2>{newProduct?.title}</h2>
                <div className="product__item">
                    <div className="product__img">
                        <div style={{ width: 270 }}>
                            <Slider {...settings}>
                                <div>
                                    <img
                                        src={newProduct?.src}
                                        alt={newProduct?.title}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={newProduct?.src}
                                        alt={newProduct?.title}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={newProduct?.src}
                                        alt={newProduct?.title}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={newProduct?.src}
                                        alt={newProduct?.title}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={newProduct?.src}
                                        alt={newProduct?.title}
                                    />
                                </div>
                                <div>
                                    <img
                                        src={newProduct?.src}
                                        alt={newProduct?.title}
                                    />
                                </div>
                            </Slider>
                        </div>
                        <div className="product__card-qism">
                            {newProduct?.arr?.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        style={{
                                            color: item.color,
                                            backgroundColor: item.bgColor,
                                            padding: "6px 10px",
                                            borderRadius: "6px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {item?.iconName}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="product__content">
                        <div>
                            <p className="product__content-price">
                                Цена телефона
                            </p>
                            <h4 className="product__content-price-sena">
                                {newProduct?.price}
                            </h4>
                        </div>
                        <div className="product__rastamojka">
                            <p className="product__content-price">
                                Общая цена (с наценкой)
                            </p>
                            <h4 className="product__content-price-ras">
                                {newProduct?.price}
                            </h4>
                            <div className="bulibTula">
                                <div className="active">
                                    <p>3 мес</p>
                                </div>
                                <div>
                                    <p>6 мес</p>
                                </div>
                                <div>
                                    <p>9 мес</p>
                                </div>
                                <div>
                                    <p>12 мес</p>
                                </div>
                            </div>
                            <div className="foiz">
                                <h5>Наценка:</h5>
                                <h4>5%</h4>
                            </div>
                        </div>
                        <div className="product-xar">
                            <p className="product__content-price">
                                Общие характеристики
                            </p>
                            <h4 className="product__content-xar">
                                {newProduct?.discrioption}
                            </h4>
                            <a className="xar-more">Показать все</a>
                        </div>
                    </div>
                </div>
                <div className="product__aksiya">
                    <h3>Акции</h3>
                    <div className="product__aksiya-1">
                        <div className="aksiya-card">
                            <div
                                style={{
                                    color: "rgb(232,50,116)",
                                    backgroundColor: "#F39DBD",
                                    padding: "6px 10px",
                                    borderRadius: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 36,
                                    height: 28,
                                    marginRight: 16,
                                }}
                            >
                                <i className="fa-solid fa-share"></i>
                            </div>
                            <div className="summa">
                                <h4>
                                    Обменяй свой старый айфон и получи скидку на
                                    новый
                                </h4>
                                <p>- 400 000 сум</p>
                            </div>
                        </div>
                        <div className="checkbox">
                            <input type={"checkbox"} />
                        </div>
                    </div>
                    <div className="product__aksiya-1">
                        <div className="aksiya-card">
                            <div
                                style={{
                                    color: "#3d639d",
                                    backgroundColor: "#A2AEDB",
                                    padding: "6px 10px",
                                    borderRadius: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 36,
                                    height: 28,
                                    marginRight: 16,
                                }}
                            >
                                <i className="fa-solid fa-gift"></i>
                            </div>
                            <div className="summa">
                                <h4>Наушники в подарок</h4>
                                <p>Apple EarPods</p>
                            </div>
                        </div>
                        <div className="checkbox">
                            <input type={"checkbox"} />
                        </div>
                    </div>
                    <div className="product__aksiya-1">
                        <div className="aksiya-card">
                            <div
                                style={{
                                    color: "rgb(255,100,34)",
                                    backgroundColor: "#FFBD95",
                                    padding: "6px 10px",
                                    borderRadius: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 36,
                                    height: 28,
                                    marginRight: 16,
                                }}
                            >
                                <i className="fa-solid fa-percent"></i>
                            </div>
                            <div className="summa">
                                <h4>Скидка 20% на смартфоны</h4>
                                <p>- 10 000 сум</p>
                            </div>
                        </div>
                        <div className="checkbox">
                            <input type={"checkbox"} />
                        </div>
                    </div>
                    <div className="product__aksiya-1">
                        <div className="aksiya-card">
                            <div
                                style={{
                                    color: "rgb(232,50,116)",
                                    backgroundColor: "#F39DBD",
                                    padding: "6px 10px",
                                    borderRadius: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 36,
                                    height: 28,
                                    marginRight: 16,
                                }}
                            >
                                <i className="fa-solid fa-share"></i>
                            </div>
                            <div className="summa">
                                <h4>Скидка на айфоны</h4>
                                <p>IMEI 012345678901234</p>
                            </div>
                        </div>
                        <div className="checkbox">
                            <input type={"checkbox"} />
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button>Добавить в корзину</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
