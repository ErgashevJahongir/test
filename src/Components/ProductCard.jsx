import { Link } from "react-router-dom";
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./productCard.css";

const ProductCard = ({
    imgSrc,
    title,
    price,
    rasPrice,
    month,
    keySon,
    arr = [],
}) => {
    return (
        <div className="product__card" key={keySon}>
            <div className="product__card-img">
                <Link to={`/zakaz/${keySon}`}>
                    <img src={imgSrc} alt={title} />
                </Link>
                <div className="product__card-qism">
                    {arr.map((item) => {
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
                                {item.iconName}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="product__card-content">
                <Link to={`/zakaz/${keySon}`}>
                    <ReactReadMoreReadLess
                        charLimit={18}
                        readMoreText={""}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >
                        {title}
                    </ReactReadMoreReadLess>
                </Link>
                <h4>{price}</h4>
                <div className="product__card-price">
                    <button>{rasPrice}</button>
                    <p>х{month}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
