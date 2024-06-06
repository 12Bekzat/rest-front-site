import React from 'react';
import { Link } from 'react-router-dom';
import useMainService from '../../services/MainService';

const ProductsItem = ({ id, price, update, oldPrice, name, img, tags, admin, count, date, buy }) => {
    const { removeProduct } = useMainService();

    const addToCart = () => {
        const prod = {
            id, price, oldPrice, name, img, tags, admin, count, date, buy
        }

        let cart = localStorage.getItem('cart123');
        if (cart) {
            cart = JSON.parse(cart);
            if (cart.filter(it => it.id === id).length == 0) {
                cart.push(prod);
                localStorage.setItem('cart123', JSON.stringify(cart));
            } else {
                cart = cart.filter(it => it.id !== id)
                localStorage.setItem('cart123', JSON.stringify(cart));
            }
        } else {
            localStorage.setItem('cart123', JSON.stringify([prod]));
        }
    }

    const isExistInCart = () => {
        let cart = localStorage.getItem('cart123');
        if (cart) {
            cart = JSON.parse(cart);
            return cart.filter(it => it.id === id).length > 0;
        }
        return false;
    }

    const remove = () => {
        removeProduct(id)
            .then(() => update())
            .catch(err => console.log(err));
    }

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
                <Link to={'/product/edit/' + id} className="products__icon"><i className="fa-solid fa-pen"></i></Link>
                <div className="products__icon del" onClick={remove}><i className="fa-solid fa-trash"></i></div>
            </div> : null}
            <div className="products__count">
                Кол-во: {count}
            </div>
            {buy ? <div className={"products__button" + (isExistInCart() ? ' active' : '')}
                onClick={addToCart}>{isExistInCart() ? 'Удалить с корзины' : 'Добавить в корзину'}</div> : null}
        </div>
    );
};

export default ProductsItem;