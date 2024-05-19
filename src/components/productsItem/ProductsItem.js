import React from 'react';
import { Link } from 'react-router-dom';

const ProductsItem = ({ price, oldPrice, name, img, tags, admin, count, date }) => {
    return (
        <div className="products__item">
            <div className="products__img">
                <img src={img} alt="" />
            </div>
            <div className="products__name">{name}</div>
            <div className="products__price">
                <p>{price} тг</p>
                {oldPrice ? <span>{oldPrice} тг</span> : null}
            </div>
            <div className="products__not">
                {tags.map((item, ind) => <p key={ind}>{item}</p>)}
            </div>
            <div className="products__text"><p>Срок годности:</p> {date}</div>
            {admin ? <div className="products__action">
                <Link to={'/product/edit'} className="products__icon"><i class="fa-solid fa-pen"></i></Link>
                <div className="products__icon del"><i class="fa-solid fa-trash"></i></div>
            </div> : null}
            <div className="products__count">
                Кол-во: {count}
            </div>
        </div>
    );
};

export default ProductsItem;